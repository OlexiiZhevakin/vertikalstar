'use client'

import styles from './world.module.scss'
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import worldData from './data';


const World = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Світові об'єкти</h2>
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
            {worldData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <Image
                  className={styles.img}
                  src={slide.img}
                  alt="Світові об'єкти"
                  title="Світові об'єкти"
                  width={760}
                  height={507} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default World