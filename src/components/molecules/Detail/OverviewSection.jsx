import { Container, Divider, Stack, Text, Title } from '@mantine/core'
import React from 'react'
import DescList from '../../atoms/DescList'

const OverviewSection = ({ movie, loading }) => {
  return (
    <Container size="xl" my="md">
      <Stack spacing={0}>
        <Divider
          my="xs"
          size="md"
          label={
            <Title order={3} mt={0} sx={{ color: 'black' }}>
              Synopsis
            </Title>
          }
        />
        <Text>{movie?.Plot}</Text>
      </Stack>
      <Stack spacing={0}>
        <Divider
          my="xs"
          size="md"
          label={
            <Title order={3} mt={0} sx={{ color: 'black' }}>
              Movie Info
            </Title>
          }
        />
        <DescList first={'Release date'}>{movie?.Released}</DescList>
        <DescList first={'Director'}>{movie?.Director}</DescList>
        <DescList first={'Genre:'}>{movie?.Genre}</DescList>
        <DescList first={'Rated'}>{movie?.Rated}</DescList>
        <DescList first={'Duration'}>{movie?.Runtime}</DescList>
        <DescList first={'Box office'}>{movie?.BoxOffice}</DescList>
      </Stack>
    </Container>
  )
}

export default OverviewSection
