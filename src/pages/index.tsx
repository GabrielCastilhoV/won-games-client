import { GetHome, GetHomeVariables } from 'graphql/generated/GetHome'
import { GET_HOME } from 'graphql/queries/home'

import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

import HomeLayout, { HomeLayoutProps } from 'layouts/Home'
import { initializeApollo } from 'utils/apollo'

const Home = (props: HomeLayoutProps) => {
  return <HomeLayout {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const TODAY = new Date().toISOString().slice(0, 10)

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<GetHome, GetHomeVariables>({
    query: GET_HOME,
    variables: { date: TODAY }
  })

  return {
    revalidate: 60,
    props: {
      banners: bannerMapper(banners),
      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),
      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),
      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}

export default Home
