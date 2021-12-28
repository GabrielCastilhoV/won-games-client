import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Menu from 'components/Menu'
import * as S from './styles'

export type BaseLayoutProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseLayoutProps) => (
  <S.Wrapper>
    <Container>
      <Menu />
    </Container>

    <S.Content>{children}</S.Content>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </S.Wrapper>
)

export default Base
