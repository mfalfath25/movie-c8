import { Box, SimpleGrid, Title } from '@mantine/core'
import React from 'react'
import CardMovie from '../../components/molecules/CardMovie'
import CategoryButton from '../../components/molecules/CategoryButton'
import Navbar from '../../components/molecules/Navbar'
import PosterSwiper from '../../components/molecules/PosterSwiper'

const Home = () => {
  return (
    <>
      <div sx={{ height: '100vh' }}>
        <Navbar />
        <PosterSwiper />
        <Box px={'xl'} mx={'xl'}>
          <Title order={2} sx={{ color: 'gray' }}>
            Browse by Category
          </Title>
          <CategoryButton />
          <SimpleGrid
            cols={5}
            spacing="lg"
            breakpoints={[
              { maxWidth: 'xl', cols: 4, spacing: 'lg' },
              { maxWidth: 'lg', cols: 3, spacing: 'lg' },
              { maxWidth: 'md', cols: 2, spacing: 'lg' },
              { maxWidth: 'sm', cols: 1, spacing: 'lg' },
            ]}
          >
            <div>
              <CardMovie></CardMovie>
            </div>
            <div>
              <CardMovie></CardMovie>
            </div>
            <div>
              <CardMovie></CardMovie>
            </div>
            <div>
              <CardMovie></CardMovie>
            </div>
            <div>
              <CardMovie></CardMovie>
            </div>
          </SimpleGrid>
        </Box>
      </div>
    </>
  )
}

export default Home
