'use client'
import Image from 'next/image'
import styles from './restavratsiya-tsehly.module.scss'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import restavratsiyaTsehlyData from './data';
import Title from '@/app/[locale]/components/title/Title';



const RestavratsiyaTsehly = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>Реставрація цегли</Title>
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
            {restavratsiyaTsehlyData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                  <Image
                    src={slide.img || ''}
                    alt='Реставрація цегли'
                    title='Реставрація цегли'
                    width={570}
                    height={420} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default RestavratsiyaTsehly