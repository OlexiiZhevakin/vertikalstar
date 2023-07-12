'use client'
import Image from 'next/image'
import styles from './descr.module.scss'

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import descrData from './data';


const Descr = () => {
  return (
    <div className={styles.container}>
      <div className="container">
          <h2 className={styles.title}>
            Коли всі роботи закінчені з реставрації фасаду, необхідно законсервувати фасад методом нанесення гідрофобного просочення.
          </h2>
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
            {descrData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <Image
                  src={slide.img}
                  alt='Коли всі роботи закінчені з реставрації фасаду, необхідно законсервувати фасад методом нанесення гідрофобного просочення'
                  title='Коли всі роботи закінчені з реставрації фасаду, необхідно законсервувати фасад методом нанесення гідрофобного просочення'
                  width={570}
                  height={420} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </div>
  )
}

export default Descr