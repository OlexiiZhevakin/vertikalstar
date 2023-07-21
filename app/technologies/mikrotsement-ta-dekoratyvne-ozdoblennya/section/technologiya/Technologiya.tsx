'use client'
import styles from './technologiya.module.scss'
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import technologiyaData from './data';

const Technologiya = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Технологія нанесення</h2>
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
            {technologiyaData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <Image
                  src={slide.img}
                  alt='Технологія нанесення'
                  title='Технологія нанесення'
                  width={550}
                  height={530} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
        <video className={styles.video} src="/img/technologies/page/microcement/microcement.mp4" autoPlay muted></video>
      </div>
    </section>
  )
}

export default Technologiya