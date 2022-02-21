import { GetServerSidePropsContext } from 'next'

import CartLayout, { CartLayoutProps } from 'layouts/Cart'

import protectedRoutes from 'utils/protected-routes'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import { initializeApollo } from 'utils/apollo'
import { GetRecommended } from 'graphql/generated/GetRecommended'
import { GET_RECOMMENDED } from 'graphql/queries/recommended'

export default function cart(props: CartLayoutProps) {
  return <CartLayout {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<GetRecommended>({
    query: GET_RECOMMENDED
  })

  return {
    props: {
      session,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
