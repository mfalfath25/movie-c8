import { Box, Button } from '@mantine/core'
import React from 'react'

const CategoryButton = () => {
  return (
    <Box py={12}>
      <Button radius="xl" size="sm" color="dark" mr={6}>
        All
      </Button>
      <Button radius="xl" size="sm" color="dark" mr={6}>
        etc
      </Button>
      <Button radius="xl" size="sm" color="dark">
        etc
      </Button>
    </Box>
  )
}

export default CategoryButton
