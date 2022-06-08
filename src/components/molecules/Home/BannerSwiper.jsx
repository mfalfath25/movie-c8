import React from 'react'
import { Image } from '@mantine/core'

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

import banner1 from '../../../assets/images/banner-1.jpg'
import banner2 from '../../../assets/images/banner-2.jpg'
import banner3 from '../../../assets/images/banner-3.jpg'

const BannerSwiper = () => {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]}>
        <SwiperSlide>
          <Image height={360} src={banner1}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image height={360} src={banner2}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image height={360} src={banner3}></Image>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default BannerSwiper
