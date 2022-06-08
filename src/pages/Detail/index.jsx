import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Button, Container, Group, Image, Text, Title } from '@mantine/core'
import notfound from '../../assets/images/notfound.jpg'
import OverviewSection from '../../components/molecules/Detail/OverviewSection'
import CharacterSection from '../../components/molecules/Detail/CharacterSection'
import SummarySection from '../../components/molecules/Detail/SummarySection'
import ReviewSection from '../../components/molecules/Detail/ReviewSection'

const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [rating, setRating] = useState(0)
  const [loading, setLoading] = useState(false)
  const apiKey = '2b719aca'
  const baseURL = `https://www.omdbapi.com/?apikey=${apiKey}`

  const getMovie = async (movieId) => {
    setLoading(true)
    await axios
      .get(`${baseURL}&i=${movieId}&plot=full`)
      .then((res) => {
        // console.log(res.data);
        setMovie(res.data)
        setRating(Number(res.data.imdbRating / 2))
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getMovie(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log('Movie', movie)
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
          <SummarySection movie={movie} rating={rating} loading={loading} />
        </Container>
      </Container>
      {/* <OverviewSection movie={movie} loading={loading} /> */}
      {/* <CharacterSection movie={movie} loading={loading} /> */}
      <ReviewSection loading={loading} />
    </>
  )
}

export default Detail
