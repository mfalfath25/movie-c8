import React from 'react'
import { Button, Grid, Input } from '@mantine/core'
import Logo from '../atoms/Logo'

const Navbar = () => {
  return (
    <>
      <Grid sx={{ width: '100%' }}>
        <Grid.Col
          span={3}
          p={0}
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <Logo />
        </Grid.Col>
        <Grid.Col span={6} p={0}>
          <Input placeholder="Search Movie" radius="md" size="lg" />
        </Grid.Col>
        <Grid.Col span={3} p={0} sx={{ textAlign: 'center' }}>
          <Button variant="subtle" radius="md" size="lg" color="dark">
            Sign In
          </Button>
        </Grid.Col>
      </Grid>
    </>
  )
}

export default Navbar
