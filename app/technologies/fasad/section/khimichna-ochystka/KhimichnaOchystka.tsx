'use client'
import styles from './khimichna-ochystka.module.scss'
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import khimichnaOchystkaData from './data';



const KhimichnaOchystka = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Хімічна очистка</h2>
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