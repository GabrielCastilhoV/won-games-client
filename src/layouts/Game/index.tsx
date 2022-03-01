import Image from 'next/image'
import { NextSeo } from 'next-seo'

import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import { Divider } from 'components/Divider'

import Base from 'layouts/Base'

import * as S from './styles'

export type GameLayoutProps = {
  slug?: string
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedTitle: string
  recommendedGames: GameCardProps[]
}

const url = process.env.NEXT_PUBLIC_URL

const GameLayout = ({
  slug,
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedTitle,
  recommendedGames
}: GameLayoutProps) => (
  <Base>
    <NextSeo
      title={`${gameInfo.title} - Won Games`}
      description={gameInfo.description}
      canonical={`${url}/${slug}`}
      openGraph={{
        url: `${url}/${slug}`,
        title: `${gameInfo.title} - Won Games`,
        description: gameInfo.description,
        images: [
          {
            url: cover,
            alt: `${gameInfo.title}`
          }
        ]
      }}
    />

    <S.Cover>
      <Image src={cover} alt={gameInfo.title} layout="fill" />
    </S.Cover>

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />

        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title={recommendedTitle} games={recommendedGames} />
    </S.Main>
  </Base>
)

export default GameLayout
