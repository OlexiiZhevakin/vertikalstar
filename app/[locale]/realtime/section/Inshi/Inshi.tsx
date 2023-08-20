'use client'

import styles from './inshi.module.scss'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Image from 'next/image';
import inshiData from './data';


const Inshi = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <p className={styles.descr}>
          Інші фасади виглядають так:
        </p>
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
            {inshiData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <Image
                  src={slide.img}
                  alt='Ремонт входів'
                  title='Ремонт входів'
                  width={800}
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

export default Inshi