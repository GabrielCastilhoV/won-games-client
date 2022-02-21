import { gql } from '@apollo/client'

export const GET_PROFILE_ME = gql`
  query GetProfileMe($identifier: ID!) {
    user(id: $identifier) {
      id
      username
      email
    }
  }
`
