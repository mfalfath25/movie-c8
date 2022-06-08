import { Box, Button, Group, Text, Title } from '@mantine/core'
import React from 'react'
import StarsDisplay from '../../atoms/StarsDisplay'

const SummarySection = ({ movie, rating, loading }) => {
  return (
    <Box>
      <Title order={2} pb={4}>
        {movie?.Title} {movie?.Year ? `(${movie?.Year})` : ''}
      </Title>
      <StarsDisplay rating={rating} />
      <Box pt="md" sx={{ display: 'flex', width: '50%' }}>
        <Text
          size="md"
          lineClamp={4}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'wrap',
          }}
        >
          {movie?.Plot}
        </Text>
      </Box>
      <Group pt="md">
        <Button size="lg" sx={{ background: '#FE024E' }}>
          Watch Trailer
        </Button>
        <Button variant="outline" size="lg" sx={{ border: '2px solid white', color: 'white' }}>
          Add to Wishlist
        </Button>
      </Group>
    </Box>
  )
}

export default SummarySection
