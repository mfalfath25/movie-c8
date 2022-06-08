import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Button, Container, Divider, Group, Image, Stack, Text, Title } from '@mantine/core'
import notfound from '../../assets/images/notfound.jpg'
import DescList from '../../components/atoms/DescList'
import Stars from '../../components/atoms/Stars'
import OverviewContent from '../../components/molecules/Detail/OverviewContent'
import CharacterSection from '../../components/molecules/Detail/CharacterSection'

const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [rating, setRating] = useState(0)
  const apiKey = '2b719aca'
  const baseURL = `https://www.omdbapi.com/?apikey=${apiKey}`

  const getMovie = async (movieId) => {
    await axios
      .get(`${baseURL}&i=${movieId}&plot=full`)
      .then((res) => {
        // console.log(res.data);
        setMovie(res.data)
        setRating(Number(res.data.imdbRating / 2))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getMovie(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('Movie', movie)
  return (
    <>
      <Container fluid p={0} sx={{ position: 'relative', background: 'black', color: 'white' }}>
        {movie?.Poster === 'N/A' ? (
          <Image height={440} src={notfound} sx={{ filter: 'blur(4px)' }} />
        ) : (
          <Image height={440} src={movie?.Poster} sx={{ filter: 'opacity(50%) blur(4px)' }} />
        )}
        <Container
          size="xl"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box>
            <Title order={2} pb={4}>
              {movie?.Title} {movie?.Year ? `(${movie?.Year})` : ''}
            </Title>
            <Stars rating={rating} />
            <Box pt="md" sx={{ display: 'flex', width: '50%' }}>
              <Text
                size="md"
                lineClamp={4}
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'wrap',
                }}
              >
                {movie?.Plot}
              </Text>
            </Box>
            <Group pt="md">
              <Button size="lg" sx={{ background: '#FE024E' }}>
                Watch Trailer
              </Button>
              <Button
                variant="outline"
                size="lg"
                sx={{ border: '2px solid white', color: 'white' }}
              >
                Add to Wishlist
              </Button>
            </Group>
          </Box>
        </Container>
      </Container>
      {/* <OverviewContent movie={movie} /> */}
      <CharacterSection movie={movie} />
    </>
  )
}

export default Detail
