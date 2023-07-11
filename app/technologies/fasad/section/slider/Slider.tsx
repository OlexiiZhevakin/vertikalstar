'use client'

import Image from 'next/image';
import styles from './slider.module.scss'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

const Slider = () => {
  return (
    <div>
      <div className="container">
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
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-1.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-2.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-3.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-4.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-5.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-6.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-7.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-8.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Image src='/img/technologies/page/fasad/slider/slider-9.jpg' alt='' title='' width={570} height={420}/>
            </SwiperSlide>
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default Slider