import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Pagination, SimpleGrid } from '@mantine/core'
import { BannerSwiper, CardMovie } from '../../components/molecules/Home'
import CategorySelection from '../../components/molecules/CategorySelection'

const Home = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])
  const [keyword, setKeyword] = useState('speed')
  const [loading, setLoading] = useState(false)
  const [pages, setPages] = useState(1)
  const [total, setTotal] = useState(0)
  // const [category, setCategory] = useState([])
  const apiKey = '2b719aca'
  const baseURL = `https://www.omdbapi.com/?apikey=${apiKey}`

  const getMovies = async (term = 'speed', page = 1) => {
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

  const handlePageChange = (pages) => {
    setPages(pages)
    getMovies(keyword, pages)
  }

  useEffect(() => {
    getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log('DATA', movies)
  return (
    <>
      <BannerSwiper />
      <Container size="xl" py="md">
        <CategorySelection />
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
            <div
              key={index}
              onClick={() => {
                navigate(`/detail/${item.imdbID}`)
              }}
              sx={{ cursor: 'pointer' }}
            >
              <CardMovie loading={loading} item={item}></CardMovie>
            </div>
          ))}
        </SimpleGrid>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Pagination page={pages} onChange={handlePageChange} total={total} />
        </Box>
      </Container>
    </>
  )
}

export default Home
