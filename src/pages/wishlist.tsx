import { GetServerSidePropsContext } from 'next'

import WishlistLayout, { WishlistLayoutProps } from 'layouts/Wishlist'
import gamesMock from 'components/GameCardSlider/mock'

import { initializeApollo } from 'utils/apollo'
import { GetRecommended } from 'graphql/generated/GetRecommended'
import { GET_RECOMMENDED } from 'graphql/queries/recommended'

import { gamesMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

export default function wishlist(props: WishlistLayoutProps) {
  return <WishlistLayout {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetRecommended>({
    query: GET_RECOMMENDED
  })
  return {
    props: {
      session,
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
