import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

useRouter.mockImplementation(() => ({
  query: {}
}))

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Gabriel" />)

    expect(screen.getByText('Gabriel')).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Gabriel" />)

    userEvent.click(screen.getByText('Gabriel'))

    expect(
      screen.getByRole('link', { name: /My Account/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Wishlist/i })).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /Sign out/i })
    ).toBeInTheDocument()
  })
})
