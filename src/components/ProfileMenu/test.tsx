import { render, screen } from 'utils/test-utils'
import theme from 'styles/theme'

import ProfileMenu from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    render(<ProfileMenu />)

    expect(screen.getByRole('link', { name: /My profile/i })).toHaveAttribute(
      'href',
      '/profile/me'
    )

    expect(screen.getByRole('link', { name: /My cards/i })).toHaveAttribute(
      'href',
      '/profile/cards'
    )

    expect(screen.getByRole('link', { name: /My orders/i })).toHaveAttribute(
      'href',
      '/profile/orders'
    )

    expect(screen.getByRole('link', { name: /Sign out/i })).toHaveAttribute(
      'href',
      '/logout'
    )
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveStyle({
      background: theme.colors.primary,
      color: theme.colors.white
    })
  })
})
