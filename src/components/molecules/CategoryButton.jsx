import React from 'react'
import { Box, Title } from '@mantine/core'
import { SelectButton } from '../atoms'

const CategoryButton = () => {
  // const [btnVariant, setBtnVariant] = useState('filled')
  // const [active, setActive] = useState(false)

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   const { value } = e.target
  //   setVal(value)
  //   console.log(val)
  //   // setBtnVariant(btnVariant === 'subtle' ? 'filled' : 'subtle')
  // }

  // const handleClick = () => {
  //   setBtnVariant(btnVariant === 'subtle' ? 'filled' : 'subtle')
  // }

  return (
    <Box mb="md">
      <Title order={2} sx={{ color: 'gray' }} mb="xs">
        Browse by Category
      </Title>
      <SelectButton text="All" />
      <SelectButton text="Anime" />
      <SelectButton text="Action" />
      <SelectButton text="Advanture" />
      <SelectButton text="Sci-Fi" />
      <SelectButton text="Comedy" />
    </Box>
  )
}

export default CategoryButton
