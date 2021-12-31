import { useRouter } from 'next/router'

import { Container } from 'components/Container'
import Heading from 'components/Heading'
import ProfileMenu from 'components/ProfileMenu'
import Base from 'layouts/Base'

import * as S from './styles'

export type ProfileLayoutProps = {
  children: React.ReactNode
}

const ProfileLayout = ({ children }: ProfileLayoutProps) => {
  const { asPath } = useRouter()

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My account
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Base>
  )
}

export default ProfileLayout
