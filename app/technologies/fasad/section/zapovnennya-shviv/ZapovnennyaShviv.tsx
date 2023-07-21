'use client'

import zapovnennyaShvivData from './data'
import styles from './zapovnennya-shviv.module.scss'

import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const ZapovnennyaShviv = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Заповнення швів</h2>
        <div className={styles.wrapper}>
          <div className={styles.btnPrev}>&lt;</div>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: `.${styles.btnPrev}`,
              nextEl: `.${styles.btnNext}`,
            }}
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            loop={true}
            className={styles.swiper}
          >
            {zapovnennyaShvivData.map((slide, index) => (
              <SwiperSlide key={index}>
                <video className={styles.video} src={slide.video} autoPlay muted playsInline loop></video>
              </SwiperSlide>
            ))}

          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default ZapovnennyaShviv