import { useState } from 'react'
import { Button, Container, Grid, Input, Modal, Stack, Text } from '@mantine/core'
import { LoginForm, RegisterForm } from '../forms'
// eslint-disable-next-line no-unused-vars
import { useLocation, useNavigate } from 'react-router-dom'
import Logo from '../atoms/Logo'

const HeaderContent = () => {
  const [open, setOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  // const location = useLocation()
  // const navigate = useNavigate()

  const handleOpenModal = () => {
    setOpen(!open)
    if (registerOpen) {
      setRegisterOpen(false)
    }
    // location.pathname === '/'
    //   ? location.pathname.replace('/', window.history.pushState('/', '', '/login'))
    //   : navigate(-1)
  }
  return (
    <>
      <Container size="xl">
        <Grid grow gutter="xs">
          <Grid.Col span={3} sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input placeholder="Search Movie" radius="md" size="lg" />
          </Grid.Col>
          <Grid.Col span={3} sx={{ textAlign: 'center' }}>
            <Button variant="subtle" radius="md" size="lg" color="dark" onClick={handleOpenModal}>
              Sign In
            </Button>
          </Grid.Col>
        </Grid>
      </Container>

      <Modal centered withCloseButton={false} opened={open} onClose={() => setOpen(false)}>
        <Stack align="center">
          <Logo disabled />
          {registerOpen ? <RegisterForm /> : <LoginForm />}
          <Text size="md">
            {registerOpen ? (
              <>
                Already have an account?{' '}
                <Text
                  variant="link"
                  onClick={() => setRegisterOpen(!registerOpen)}
                  sx={{ display: 'inline' }}
                >
                  Login
                </Text>
              </>
            ) : (
              <>
                Don't have an account?{' '}
                <Text
                  variant="link"
                  onClick={() => setRegisterOpen(!registerOpen)}
                  sx={{ display: 'inline' }}
                >
                  Register
                </Text>
              </>
            )}
          </Text>
        </Stack>
      </Modal>
    </>
  )
}

export default HeaderContent
