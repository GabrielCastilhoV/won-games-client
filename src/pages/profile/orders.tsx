import ProfileLayout from 'layouts/Profile'

import mockItems from 'components/OrdersList/mock'
import OrdersList, { OrdersListProps } from 'components/OrdersList'

export default function Orders({ items }: OrdersListProps) {
  return (
    <ProfileLayout>
      <OrdersList items={items} />
    </ProfileLayout>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: mockItems
    }
  }
}
