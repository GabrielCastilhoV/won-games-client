import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import Base from 'layouts/Base'

export type WishlistLayoutProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const WishlistLayout = ({
  games = [],
  recommendedGames,
  recommendedHighlight
}: WishlistLayoutProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}

      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default WishlistLayout
