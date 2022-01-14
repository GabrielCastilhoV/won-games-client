import { AppProps } from 'next/app'

import { useApollo } from 'utils/apollo'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from '../styles/theme'
import { ApolloProvider } from '@apollo/client'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
