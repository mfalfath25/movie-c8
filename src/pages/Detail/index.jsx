import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Container, Image } from '@mantine/core'
import notfound from '../../assets/images/notfound.jpg'
import {
  OverviewSection,
  CharacterSection,
  SummarySection,
  ReviewSection,
  DisplaySelection,
} from '../../components/molecules/Detail'

const Detail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [rating, setRating] = useState(0)
  const [loading, setLoading] = useState(false)
  const [display, setDisplay] = useState('Overview')
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

  let component
  switch (display) {
    case 'Overview':
      component = <OverviewSection movie={movie} loading={loading} />
      break
    case 'Characters':
      component = <CharacterSection movie={movie} loading={loading} />
      break
    case 'Review':
      component = <ReviewSection loading={loading} />
      break
    default:
      component = <OverviewSection movie={movie} loading={loading} />
  }

  useEffect(() => {
    getMovie(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('Movie', movie)
  // console.log('DISPLAY PARENT', display)

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
      <Container size="xl" my="md">
        <DisplaySelection display={display} setDisplay={setDisplay} />
        {component}
        {/* <OverviewSection movie={movie} loading={loading} />
        <CharacterSection movie={movie} loading={loading} />
        <ReviewSection loading={loading} /> */}
      </Container>
    </>
  )
}

export default Detail
