import { GetServerSidePropsContext } from 'next'

import ProfileLayout from 'layouts/Profile'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import { GetOrders, GetOrdersVariables } from 'graphql/generated/GetOrders'
import { GET_ORDERS } from 'graphql/queries/orders'
import { ordersMapper } from 'utils/mappers'

export default function Orders({ items }: OrdersListProps) {
  return (
    <ProfileLayout>
      <OrdersList items={items} />
    </ProfileLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) {
    return { props: {} }
  }

  const { data } = await apolloClient.query<GetOrders, GetOrdersVariables>({
    query: GET_ORDERS,
    variables: {
      identifier: String(session?.id)
    },
    fetchPolicy: 'no-cache'
  })

  return {
    props: {
      items: ordersMapper(data.orders),
      session
    }
  }
}
