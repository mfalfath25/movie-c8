import React from 'react'
import { Button } from '@mantine/core'

const SelectButton = ({ text }) => {
  return (
    <>
      <Button
        variant="filled"
        value="one btn"
        radius="xl"
        size="sm"
        color="dark"
        mr={6}
        sx={{ background: '#EB507F', '&:hover': { background: '#FE024E' } }}
      >
        {text}
      </Button>
    </>
  )
}

export default SelectButton
