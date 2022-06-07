import { Box, Container, SimpleGrid, Title } from '@mantine/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/molecules/CardMovie'
import CategoryButton from '../../components/molecules/CategoryButton'
import Footer from '../../components/molecules/Footer'
import Navbar from '../../components/molecules/Navbar'
import PosterSwiper from '../../components/molecules/PosterSwiper'

const Home = () => {
  const [data, setData] = useState([])

  const apiKey = '2b719aca'
  const baseURL = `https://www.omdbapi.com/?apikey=${apiKey}`

  const getData = async () => {
    const res = await axios.get(`${baseURL}&s=avengers`)
    setData(res.data.Search)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('DATA', data)
  return (
    <>
      <div sx={{ height: '100vh' }}>
        <Navbar />
        <Box>
          <PosterSwiper />
          <Container size="xl">
            <Title order={2} sx={{ color: 'gray' }}>
              Browse by Category
            </Title>
            <CategoryButton />
            <SimpleGrid
              cols={4}
              breakpoints={[
                { maxWidth: 'xl', cols: 4, spacing: 'lg' },
                { maxWidth: 'lg', cols: 3, spacing: 'lg' },
                { maxWidth: 'md', cols: 2, spacing: 'lg' },
                { maxWidth: 'sm', cols: 1, spacing: 'lg' },
              ]}
            >
              {data.map((item, index) => (
                <div key={index}>
                  <CardMovie item={item}></CardMovie>
                </div>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        <Footer />
      </div>
    </>
  )
}

export default Home
