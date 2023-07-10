'use client'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider2.module.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';

import Image from 'next/image';
import dataSlider2 from './data';



const Slider2 = () => {
  return (
    <div>
      <div className="container">
        <p>Вимощення та водовідведення</p>
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
            {dataSlider2.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                {slide.video ? (
                  <video src={slide.video} width={1000} height={520} autoPlay muted></video>
                ) : slide.img ? (
                  <Image
                    src={slide.img}
                    alt='Вимощення та водовідведення'
                    title='Вимощення та водовідведення'
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

export default Slider2