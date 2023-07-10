'use client'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider3.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';

import Image from 'next/image';
import dataSlider3 from './data';



const RemontVkhodiv = () => {
  return (
    <div>
      <div className="container">
        <p>Ремонт входів</p>
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
            {dataSlider3.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                {slide.video ? (
                  <video src={slide.video} width={1000} height={520} autoPlay muted></video>
                ) : slide.img ? (
                  <Image
                    src={slide.img}
                    alt='Ремонт входів'
                    title='Ремонт входів'
                    width={1000}
                    height={600}
                  />
                ) : null}
              </SwiperSlide>
            ))}



          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default RemontVkhodiv