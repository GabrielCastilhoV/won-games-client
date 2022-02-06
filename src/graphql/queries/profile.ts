import { gql } from '@apollo/client'

export const GET_PROFILE_ME = gql`
  query GetProfileMe {
    me {
      username
      email
    }
  }
`
