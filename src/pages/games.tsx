import GamesLayout, { GamesLayoutProps } from 'layouts/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function Games(props: GamesLayoutProps) {
  return <GamesLayout {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}
