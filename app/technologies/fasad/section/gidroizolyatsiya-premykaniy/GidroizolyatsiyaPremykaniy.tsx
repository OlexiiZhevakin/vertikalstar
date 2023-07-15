'use client'
import styles from './gidroizolyatsiya-premykaniy.module.scss'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import gidroizolyatsiyaPremykaniyData from './data';
import Image from 'next/image';


const GidroizolyatsiyaPremykaniy = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Гідроізоляція примикань</h2>
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
            {gidroizolyatsiyaPremykaniyData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                  <Image
                    src={slide.img}
                    alt='Ремонт входів'
                    title='Ремонт входів'
                    width={820}
                    height={600}
                  />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default GidroizolyatsiyaPremykaniy