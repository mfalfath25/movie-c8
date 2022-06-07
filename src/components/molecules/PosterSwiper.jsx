import React from 'react'
import { Box } from '@mantine/core'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

import PosterCard from './PosterCard'

const PosterSwiper = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <PosterCard />
        </SwiperSlide>
        <SwiperSlide>
          <PosterCard />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default PosterSwiper
