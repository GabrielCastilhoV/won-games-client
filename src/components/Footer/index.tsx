import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        <a href="tel:552133283719">+55 21 33283719</a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>

        <nav id="social-media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Twitter
          </a>

          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Youtube
          </a>

          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopener, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav id="resources">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/games">
            <a>Store</a>
          </Link>

          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="contact">
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Localization
        </Heading>

        <span>Rua 7 de Maio</span>
        <span>527 - 89020330</span>
        <span>Rio de Janeiro, Brasil</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 © All rights reserved</S.Copyright>
  </S.Wrapper>
)

export default Footer
