import { Image, Paper, Text, Title } from '@mantine/core'
import React from 'react'

const CardMovie = () => {
  return (
    <>
      <Paper shadow="sm" radius="md" sx={{ width: '280px', height: '400px' }}>
        <Image
          sx={{ width: '280px' }}
          radius="md"
          height={320}
          fit="cover"
          src="https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg"
        />
        <Title order={3} pt={12}>
          Movie Name
        </Title>
        <Text size="md">Default text</Text>
      </Paper>
    </>
  )
}

export default CardMovie
