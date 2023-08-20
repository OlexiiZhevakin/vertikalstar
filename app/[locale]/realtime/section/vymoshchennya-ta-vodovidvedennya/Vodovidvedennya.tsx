'use client'

import styles from './vodovidvedennya.module.scss'


import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import vodovidvedennyaData from './data';
import Image from 'next/image';


const Vodovidvedennya = () => {
  return (
    <div className={styles.realtime}>
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
            {vodovidvedennyaData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                {slide.video ? (
                  <video src={slide.video} width={1000} height={600} autoPlay muted></video>
                ) : slide.image ? (
                  <Image
                    src={slide.image}
                    alt='Ремонт входів'
                    title='Ремонт входів'
                    width={slide.width || 800}
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

export default Vodovidvedennya