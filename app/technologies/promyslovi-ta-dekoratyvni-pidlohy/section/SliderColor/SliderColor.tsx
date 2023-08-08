'use client'

import Title from '@/components/title/Title'
import styles from './Slidercolor.module.scss'
import Slider from '@/components/slider/Slider'
import { slidercolor } from './data'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'



const SliderColor = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Кольорові покриття для бетонних підлог</Title>
        <Slider>
          {slidercolor.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide}
                alt='Кольорові покриття для бетонних підлог'
                title='Кольорові покриття для бетонних підлог'
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

export default SliderColor