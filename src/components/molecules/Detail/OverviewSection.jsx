import React from 'react'
import { Divider, Stack, Text, Title } from '@mantine/core'
import { DescList } from '../../atoms'

const OverviewSection = ({ movie, loading }) => {
  return (
    <>
      <Stack spacing={0} my="sm">
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
    </>
  )
}

export default OverviewSection
