import NextNprogress from 'nextjs-progressbar'

import { Provider as AuthProvider } from 'next-auth/client'
import { CartProvider } from 'hooks/use-cart'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { AppProps } from 'next/app'
import { useApollo } from 'utils/apollo'

import GlobalStyles from 'styles/global'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <GlobalStyles />
            <NextNprogress
              color="#F231A5"
              startPosition={0.3}
              stopDelayMs={200}
              height={5}
            />

            <Component {...pageProps} />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default MyApp
