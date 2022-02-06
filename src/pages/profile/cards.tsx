import { GetServerSidePropsContext } from 'next'

import CardsList, { CardsListProps } from 'components/CardsList'
import mockCards from 'components/PaymentOptions/mock'
import ProfileLayout from 'layouts/Profile'

import protectedRoutes from 'utils/protected-routes'

export default function Cards({ cards }: CardsListProps) {
  return (
    <ProfileLayout>
      <CardsList cards={cards} />
    </ProfileLayout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      cards: mockCards,
      session
    }
  }
}
