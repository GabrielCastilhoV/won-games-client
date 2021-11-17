import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Footer from '.'

describe('<Footer />', () => {
  it('should render 4 columns topics', () => {
    renderWithTheme(<Footer />)

    expect(
      screen.getByRole('heading', { name: /Contact/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Follow us/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /Links/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Localization/i })
    ).toBeInTheDocument()
  })
})
