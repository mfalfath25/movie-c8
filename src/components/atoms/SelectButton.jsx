import React from 'react'
import { Button } from '@mantine/core'

const SelectButton = (props) => {
  return (
    <>
      <Button
        variant="filled"
        radius="xl"
        onClick={() => props.changeDisplay(props.text)}
        size="sm"
        color="dark"
        mr={6}
        sx={{ background: '#EB507F', '&:hover': { background: '#FE024E' } }}
      >
        {props.text}
      </Button>
    </>
  )
}

export default SelectButton
