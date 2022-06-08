import { Box, Container, Pagination, SimpleGrid, Title } from '@mantine/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/molecules/CardMovie'
import CategoryButton from '../../components/molecules/CategoryButton'
import BannerSwiper from '../../components/molecules/BannerSwiper'

const Home = () => {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState({})
  const [keyword, setKeyword] = useState('fast')
  const [loading, setLoading] = useState(false)
  const [pages, setPages] = useState(1)
  const [total, setTotal] = useState(0)
  // const [category, setCategory] = useState([])
  const apiKey = '2b719aca'
  const baseURL = `https://www.omdbapi.com/?apikey=${apiKey}`

  const getMovies = async (term = 'fast', page = 1) => {
    setLoading(true)
    await axios
      .get(`${baseURL}&s=${encodeURIComponent(term)}&plot=full&page=${page}`)
      .then((res) => {
        setMovies(res.data.Search)
        setTotal(Math.ceil(res.data.totalResults / 10))
        setPages(page)
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
      .catch((err) => {
        console.log(err)
        setMovies([])
        setLoading(false)
      })
  }

  const getMovie = (movieId) => {
    axios
      .get(`${baseURL}&i=${movieId}&plot=full`)
      .then((res) => {
        // console.log(res.data);
        setMovie(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handlePageChange = (pages) => {
    setPages(pages)
    getMovies(keyword, pages)
  }

  useEffect(() => {
    getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('DATA', movies)
  return (
    <>
      <BannerSwiper />
      <Container size="xl" py="sm">
        <Title order={2} sx={{ color: 'gray' }}>
          Browse by Category
        </Title>
        <CategoryButton />
        <SimpleGrid
          cols={5}
          breakpoints={[
            { maxWidth: 'xl', cols: 4, spacing: 'md' },
            { maxWidth: 'lg', cols: 3, spacing: 'md' },
            { maxWidth: 'md', cols: 2, spacing: 'md' },
            { maxWidth: 'xs', cols: 1, spacing: 'md' },
          ]}
        >
          {movies?.map((item, index) => (
            <div key={index}>
              <CardMovie loading={loading} item={item}></CardMovie>
            </div>
          ))}
        </SimpleGrid>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Pagination page={pages} onChange={handlePageChange} total={10} />
        </Box>
      </Container>
    </>
  )
}

export default Home
