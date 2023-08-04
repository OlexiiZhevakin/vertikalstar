
'use client'
import Slider from '@/components/slider/Slider'
import styles from './slider.module.scss'
import { SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { sliderdata } from './data'

const Sliders = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <p className={styles.text}>
          Неприємний запах, пліснява та грибок, відшарування штукатурки, шпалер чи фарбування, плями вологи всередині будівлі або на фасаді.
        </p>
        <Slider>
          {sliderdata.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image 
                src={slide}
                width="1200"
                height="540"
                alt="Фото проблемної будівлі"
                title="Фото проблемної будівлі"
                priority />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Sliders