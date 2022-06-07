import { Image } from '@mantine/core'
import React from 'react'

import banner from '../../assets/images/movie-banner.jpg'

const PosterCard = () => {
  return (
    <>
      <Image height={300} fit="cover" src={banner}></Image>
    </>
  )
}

export default PosterCard
