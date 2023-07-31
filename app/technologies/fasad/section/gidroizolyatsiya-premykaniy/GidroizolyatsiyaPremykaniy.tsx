'use client'
import styles from './gidroizolyatsiya-premykaniy.module.scss'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import gidroizolyatsiyaPremykaniyData from './data';
import Image from 'next/image';
import Title from '@/components/title/Title';


const GidroizolyatsiyaPremykaniy = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>Гідроізоляція примикань</Title>
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
                  alt='Гідроізоляція примикань'
                  title='Гідроізоляція примикань'
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