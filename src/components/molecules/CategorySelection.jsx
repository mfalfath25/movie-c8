import { Box, Title } from '@mantine/core'
import { SelectButton } from '../atoms'

const CategorySelection = () => {
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

export default CategorySelection
