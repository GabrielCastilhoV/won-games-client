import CartList, { CartListProps } from 'components/CartList'
import { HighlightProps } from 'components/Highlight'
import { GameCardProps } from 'components/GameCard'

import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'

import Base from 'layouts/Base'

import * as S from './styles'
import PaymentForm from 'components/PaymentForm'

export type CartLayoutProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const CartLayout = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: CartLayoutProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <PaymentForm />
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
export default CartLayout
