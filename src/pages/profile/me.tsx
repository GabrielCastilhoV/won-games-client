import { GetServerSidePropsContext } from 'next'

import FormProfile, { FormProfileProps } from 'components/FormProfile'
import ProfileLayout from 'layouts/Profile'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import { GET_PROFILE_ME } from 'graphql/queries/profile'

import {
  GetProfileMe,
  GetProfileMeVariables
} from 'graphql/generated/GetProfileMe'

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

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloClient.query<
    GetProfileMe,
    GetProfileMeVariables
  >({
    query: GET_PROFILE_ME,
    variables: {
      identifier: String(session?.id)
    }
  })

  return {
    props: { session, username: data.user?.username, email: data.user?.email }
  }
}
