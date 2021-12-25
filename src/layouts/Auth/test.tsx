import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="My page">
        <input type="text" />
      </Auth>
    )

    expect(screen.getAllByRole('img', { name: /Won Games/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /WON is the best and most complete gaming plataform./i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /My page/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
