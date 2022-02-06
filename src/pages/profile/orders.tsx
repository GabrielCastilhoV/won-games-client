import { GetServerSidePropsContext } from 'next'

import ProfileLayout from 'layouts/Profile'
import mockItems from 'components/OrdersList/mock'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

import protectedRoutes from 'utils/protected-routes'

export default function Orders({ items }: OrdersListProps) {
  return (
    <ProfileLayout>
      <OrdersList items={items} />
    </ProfileLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      cards: mockItems,
      session
    }
  }
}
