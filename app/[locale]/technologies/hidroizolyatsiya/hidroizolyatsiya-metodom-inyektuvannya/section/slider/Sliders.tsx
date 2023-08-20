
'use client'
import Slider from '@/app/[locale]/components/slider/Slider'
import styles from './slider.module.scss'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { sliderdata } from './data'

type Props = {
  content: string
  alt: string
}

const Sliders = ({content, alt}: Props) => {
  return (
    <section className={styles.container}>
      <div className="container">
        <p className={styles.text}>
          {content}
        </p>
        <Slider>
          {sliderdata.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image 
                src={slide}
                width="1200"
                height="540"
                alt={alt}
                title={alt}
                priority />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Sliders