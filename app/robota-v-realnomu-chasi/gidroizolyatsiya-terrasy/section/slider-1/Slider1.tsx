'use client'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider1.module.scss'

import 'swiper/scss';
import 'swiper/scss/navigation';
import Image from 'next/image';
import slider1Data from './data';

const Slider1 = () => {
  return (
    <div className={styles.realtime}>
      <div className="container">
        <p>
          Розчинна стяжка з розухилкою вже залита, по ній належить нанести поліріутанове покриття з флоками та запечатування лаком.
        </p>
        <div className={styles.wrapper}>
          <div className={styles.btnPrev}>&lt;</div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.${styles.btnPrev}`,
              nextEl: `.${styles.btnNext}`,
            }}
            slidesPerView={1}
            loop={true}
            className={styles.swiper}
          >
            {slider1Data.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <Image
                  src={slide.img}
                  alt='Ремонт входів'
                  title='Ремонт входів'
                  width={slide.width || 800}
                  height={600}
                />
              </SwiperSlide>
            ))}



          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default Slider1