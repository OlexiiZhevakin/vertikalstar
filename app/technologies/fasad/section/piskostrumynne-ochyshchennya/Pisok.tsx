'use client'

import styles from './piskostrumynne-ochyshchennya.module.scss'
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import piskostrumynneOchyshchennyaData from './data';


const Pisok = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Піскоструминне очищення</h2>
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
            {piskostrumynneOchyshchennyaData.map((slide, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                {slide.video ? (
                  <video src={slide.video} width={760} height={570} autoPlay muted></video>
                ) : (
                    <Image
                      src={slide.img || ''}
                      alt='Піскоструминне очищення'
                      title='Піскоструминне очищення'
                      width={760}
                      height={570} />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default Pisok