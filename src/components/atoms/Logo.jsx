import { Anchor, Box, Image, Title } from '@mantine/core'
import logo from '../../assets/images/logo.png'

const Ttv = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image height={40} fit="contain" src={logo} />
      <Title order={3} pl={6}>
        TTV
      </Title>
    </Box>
  )
}

const Logo = ({ disabled }) => {
  return (
    <>
      {disabled ? (
        <Ttv />
      ) : (
        <Anchor href="/" variant="text">
          <Ttv />
        </Anchor>
      )}
    </>
  )
}

export default Logo
