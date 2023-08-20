'use client'
import styles from './khimichna-ochystka.module.scss'
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import khimichnaOchystkaData from './data';
import Title from '@/app/[locale]/components/title/Title';



const KhimichnaOchystka = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>Хімічна очистка</Title>
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
            {khimichnaOchystkaData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <Image
                  src={slide.img}
                  alt='Хімічна очистка'
                  title='Хімічна очистка'
                  width={570}
                  height={560} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default KhimichnaOchystka