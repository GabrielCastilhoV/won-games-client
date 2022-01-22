import { AppProps } from 'next/app'

import { useApollo } from 'utils/apollo'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from '../styles/theme'
import { ApolloProvider } from '@apollo/client'
import { CartProvider } from 'hooks/use-cart'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
