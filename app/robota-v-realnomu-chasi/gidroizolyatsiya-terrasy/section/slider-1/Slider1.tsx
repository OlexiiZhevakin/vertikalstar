'use client'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider1.module.scss'

import 'swiper/scss';
import 'swiper/scss/navigation';
import Image from 'next/image';

const Slider1 = () => {
  return (
    <div className={styles.head}>
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
            <SwiperSlide className={styles.slide}>
              <Image src='/img/real/gidroizolyatsiya-terrasy/slider1/gidroizolyatsiya-terrasy-1.jpg' alt='Гідроізоляція тераси' title='Гідроізоляція тераси' width={480} height={640}/>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image src='/img/real/gidroizolyatsiya-terrasy/slider1/gidroizolyatsiya-terrasy-2.jpg' alt='Гідроізоляція тераси' title='Гідроізоляція тераси' width={480} height={640}/>
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image src='/img/real/gidroizolyatsiya-terrasy/slider1/gidroizolyatsiya-terrasy-3.jpg' alt='Гідроізоляція тераси' title='Гідроізоляція тераси' width={480} height={640}/>
            </SwiperSlide>

          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default Slider1