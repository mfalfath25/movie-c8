import React from 'react'
import { Button, Container, Grid, Input } from '@mantine/core'
import Logo from '../atoms/Logo'

const HeaderContent = () => {
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
            <Button variant="subtle" radius="md" size="lg" color="dark">
              Sign In
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default HeaderContent
