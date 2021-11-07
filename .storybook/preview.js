import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    </>
  )
]
