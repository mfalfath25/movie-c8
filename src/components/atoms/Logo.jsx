import { Anchor, Box, Image, Title } from '@mantine/core'
import logo from '../../assets/images/logo.png'

const Logo = () => {
  return (
    <Anchor href="/" variant="text">
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
    </Anchor>
  )
}

export default Logo
