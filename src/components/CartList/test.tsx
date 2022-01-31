import { CartContextDefaultValues } from 'hooks/use-cart'
import { render, screen } from 'utils/test-utils'

import CartList from '.'
import items from './mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items,
      total: 'R$ 330,00'
    }

    render(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 330,00')).toHaveStyle({ color: '#F231A5' })
  })

  it('should render with button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items
    }
    render(<CartList hasButton />, { cartProviderProps })

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render without button', () => {
    render(<CartList />)

    expect(screen.queryByText(/buy it now/i)).not.toBeInTheDocument()
  })

  it('should render empty if there are no games', () => {
    render(<CartList />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/total/i)).not.toBeInTheDocument()
  })

  it('should render loading', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      loading: true
    }

    render(<CartList hasButton />, { cartProviderProps })

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument()
  })
})
