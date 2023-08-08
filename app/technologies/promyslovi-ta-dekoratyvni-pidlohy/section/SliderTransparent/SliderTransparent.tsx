'use client'

import Title from '@/components/title/Title'
import styles from './Slider.module.scss'
import Slider from "@/components/slider/Slider"
import { slidertransparent } from './data'
import Image from 'next/image'
import { SwiperSlide } from 'swiper/react'

const SliderTransparent = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Прозорі пропитки для бетонних підлог</Title>
        <Slider>
          {slidertransparent.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide}
                alt='Прозорі пропитки для бетонних підлог'
                title='Прозорі пропитки для бетонних підлог'
                width={1200}
                height={600}
                priority />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default SliderTransparent