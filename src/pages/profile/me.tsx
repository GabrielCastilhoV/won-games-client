import { GetServerSidePropsContext } from 'next'

import FormProfile, { FormProfileProps } from 'components/FormProfile'
import ProfileLayout from 'layouts/Profile'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import { GET_PROFILE_ME } from 'graphql/queries/profile'
import { GetProfileMe } from 'graphql/generated/GetProfileMe'

export default function Me(props: FormProfileProps) {
  return (
    <ProfileLayout>
      <FormProfile {...props} />
    </ProfileLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  const { data } = await apolloClient.query<GetProfileMe>({
    query: GET_PROFILE_ME
  })

  return {
    props: { session, username: data.me?.username, email: data.me?.email }
  }
}
