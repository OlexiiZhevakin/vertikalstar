'use client'

import Image from 'next/image';
import styles from './slider.module.scss'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import fasadDataSlider from './data';

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
            {fasadDataSlider.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <Image 
                  src={slide.img}
                  alt='Фасад до'
                  title='Фасад до'
                  width={slide.width || 760}
                  height={570}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default Slider