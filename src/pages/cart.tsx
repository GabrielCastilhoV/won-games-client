import CartLayout, { CartLayoutProps } from 'layouts/Cart'

import itemsMock from 'components/CartList/mock'
import cardsMock from 'components/PaymentOptions/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function cart(props: CartLayoutProps) {
  return <CartLayout {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      items: itemsMock,
      total: '430',
      cards: cardsMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
