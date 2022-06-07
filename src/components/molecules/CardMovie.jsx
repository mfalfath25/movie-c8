import { Image, Paper, Text, Title } from '@mantine/core'
import React from 'react'

const CardMovie = ({ item }) => {
  return (
    <>
      <Paper shadow="none" radius="md" sx={{ width: '240px', height: 'auto', minHeight: '420px' }}>
        <Image sx={{ width: '240px' }} radius="md" height={320} fit="cover" src={item.Poster} />
        <Title order={4} pt={0}>
          {item?.Title}
        </Title>
        <Text size="md">{item.Genre}</Text>
      </Paper>
    </>
  )
}

export default CardMovie
