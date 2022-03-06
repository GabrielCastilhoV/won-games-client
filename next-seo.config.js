const url = process.env.NEXT_PUBLIC_URL

export default {
  title: 'Won Games',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    site_name: 'Won Games',
    title: 'Won Games'
  },
  twitter: {
    handle: '@GabrielCV06',
    site: url,
    cardType: 'summary_large_image'
  },
  description: 'E-commerce games similar to Steam platform.'
}
