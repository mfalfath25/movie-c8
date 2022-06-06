import { Box, Button } from '@mantine/core'
import React from 'react'

const CategoryButton = () => {
  return (
    <Box py={12}>
      <Button radius="xl" size="sm" color="dark" mr={6}>
        All
      </Button>
      <Button radius="xl" size="sm" color="dark" mr={6}>
        anime
      </Button>
      <Button radius="xl" size="sm" color="dark">
        action
      </Button>
    </Box>
  )
}

export default CategoryButton
