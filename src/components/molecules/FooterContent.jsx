import React from 'react'
import { Box, Grid, Image, Title } from '@mantine/core'
import logo from '../../assets/images/logo.png'

const FooterContent = () => {
  return (
    <>
      <Grid grow gutter="xs">
        <Grid.Col span={4}>
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
        </Grid.Col>
        <Grid.Col span={4}>2</Grid.Col>
        <Grid.Col span={4}>
          <Grid grow gutter="xs">
            <Grid.Col span={12}>AAA</Grid.Col>
            <Grid.Col span={12}>AAA</Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={4}>4</Grid.Col>
        <Grid.Col span={4}>5</Grid.Col>
      </Grid>
    </>
  )
}

export default FooterContent
