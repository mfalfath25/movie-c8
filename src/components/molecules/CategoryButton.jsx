import { Box, Button } from '@mantine/core'
import React, { useState } from 'react'

const CategoryButton = () => {
  const [btnVariant, setBtnVariant] = useState('subtle')

  const handleClick = () => {
    setBtnVariant(btnVariant === 'subtle' ? 'filled' : 'subtle')
  }

  return (
    <Box py={12}>
      <Button variant={btnVariant} onClick={handleClick} radius="xl" size="sm" color="dark" mr={6}>
        All
      </Button>
      <Button variant={btnVariant} onClick={handleClick} radius="xl" size="sm" color="dark" mr={6}>
        etc
      </Button>
      <Button variant="subtle" radius="xl" size="sm" color="dark">
        etc
      </Button>
    </Box>
  )
}

export default CategoryButton
