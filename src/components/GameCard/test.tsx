import { screen, fireEvent } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /Population Zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('img', { name: /Population Zero/i })
    ).toHaveAttribute('src', props.img)

    expect(
      screen.getByRole('heading', { name: 'R$ 235,00' })
    ).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByRole('heading', { name: props.price })).not.toHaveStyle(
      'text-decoration: line-through'
    )

    expect(screen.getByRole('heading', { name: props.price })).toHaveStyle(
      'background-color: #3CD3C1'
    )
  })

  it('should render a line-thorugh in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

    expect(screen.getByRole('heading', { name: props.price })).toHaveStyle(
      'text-decoration: line-through'
    )

    expect(screen.getByRole('heading', { name: 'R$ 15,00' })).not.toHaveStyle(
      'text-decoration: line-through'
    )
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should render Ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
