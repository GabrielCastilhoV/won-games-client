import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { Provider as AuthProvider } from 'next-auth/client'
import { CartProvider } from 'hooks/use-cart'
import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { AppProps } from 'next/app'
import { useApollo } from 'utils/apollo'

import GlobalStyles from 'styles/global'
import theme from '../styles/theme'
import { WishlistProvider } from 'hooks/use-wishlist'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <DefaultSeo {...SEO} />
              <GlobalStyles />
              <NextNprogress
                color="#F231A5"
                startPosition={0.3}
                stopDelayMs={200}
                height={5}
              />

              <Component {...pageProps} />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default MyApp
