import Link from 'next/link'

import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My profile
    </Heading>

    <S.Form>
      <TextField
        name="username"
        placeholder="Username"
        label="Username"
        initialValue={username}
      />
      <TextField
        name="email"
        placeholder="E-mail"
        label="E-mail"
        type="email"
        initialValue={email}
        disabled
      />

      <S.ButtonContainer>
        <Link href={`/forgot-password?email=${email}`} passHref>
          <Button minimal size="medium" as="a">
            Reset Password
          </Button>
        </Link>
        <Button size="medium">Save</Button>
      </S.ButtonContainer>
    </S.Form>
  </>
)

export default FormProfile
