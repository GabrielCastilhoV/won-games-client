import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'My game',
  description: 'My description',
  price: 200
}

describe('<GameInfo />', () => {
  it('should render the heading', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /My game/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/\$200\.00/i)).toBeInTheDocument()

    expect(screen.getByText(/My description/i)).toBeInTheDocument()
  })

  it('should render buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
