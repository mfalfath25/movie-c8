import React from 'react'
import logo from '../../assets/images/logo.png'
import { Box, Button, Container, Grid, Image, Input, Title } from '@mantine/core'

const Navbar = () => {
  return (
    <>
      <Container size="xl">
        <Grid m={0}>
          <Grid.Col
            span={3}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image height={40} fit="contain" src={logo} />
              <Title order={3} pl={6}>
                MilanTV
              </Title>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <Input placeholder="Search Movie" radius="md" size="lg" />
          </Grid.Col>
          <Grid.Col span={3} sx={{ textAlign: 'center' }}>
            <Button variant="subtle" radius="md" size="lg" color="dark">
              Sign In
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default Navbar
