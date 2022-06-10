import { Box, Title } from '@mantine/core'
import { SelectButton } from '../atoms'

const CategorySelection = ({ type, setType }) => {
  return (
    <Box mb="md">
      <Title order={2} sx={{ color: 'gray' }} mb="xs">
        Browse by Category
      </Title>
      <SelectButton text="All" type={type} changeType={(type) => setType(type)} />
      <SelectButton text="movie" type={type} changeType={(type) => setType(type)} />
      <SelectButton text="series" type={type} changeType={(type) => setType(type)} />
      <SelectButton text="game" type={type} changeType={(type) => setType(type)} />
    </Box>
  )
}

export default CategorySelection
