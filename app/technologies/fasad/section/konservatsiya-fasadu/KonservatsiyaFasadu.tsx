'use client'
import styles from './konservatsiya-fasadu.module.scss'
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import konservatsiyaFasaduData from './data';


const KonservatsiyaFasadu = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Консервація фасаду</h2>
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
            {konservatsiyaFasaduData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <Image
                  src={slide.img}
                  alt='Консервація фасаду'
                  title='Консервація фасаду'
                  width={760}
                  height={570}/>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
        <p className={styles.text}>
          Коли всі роботи з реставрації фасаду закінчені, необхідно законсервувати фасад методом нанесення гідрофобного просочення.
        </p>
      </div>
    </section>
  )
}

export default KonservatsiyaFasadu