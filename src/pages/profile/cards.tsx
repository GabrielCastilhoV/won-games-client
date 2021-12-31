import CardsList, { CardsListProps } from 'components/CardsList'
import ProfileLayout from 'layouts/Profile'

import mockCards from 'components/PaymentOptions/mock'

export default function Cards({ cards }: CardsListProps) {
  return (
    <ProfileLayout>
      <CardsList cards={cards} />
    </ProfileLayout>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
