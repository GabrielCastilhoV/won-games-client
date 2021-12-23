import { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
