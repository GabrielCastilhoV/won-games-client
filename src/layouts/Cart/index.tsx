import CartList, { CartListProps } from 'components/CartList'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'

import Base from 'layouts/Base'

import * as S from './styles'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'
import Empty from 'components/Empty'

export type CartLayoutProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const CartLayout = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartLayoutProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
export default CartLayout
