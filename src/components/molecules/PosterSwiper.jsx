import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'
import { Box } from '@mantine/core'
import PosterCard from './PosterCard'

const PosterSwiper = () => {
  return (
    <>
      <Box p={10}>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <Box p={10}>
              <PosterCard></PosterCard>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box p={10}>
              <PosterCard></PosterCard>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </>
  )
}

export default PosterSwiper
