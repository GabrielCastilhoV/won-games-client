import { gql } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'

export const GET_ORDERS = gql`
  query GetOrders($identifier: ID!) {
    orders(where: { user: { id: $identifier } }, sort: "created_at:desc") {
      id
      created_at
      card_brand
      card_last4
      games {
        ...GameFragment
      }
    }
  }
  ${GameFragment}
`
