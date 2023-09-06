'use client'
import styles from './konservatsiya-fasadu.module.scss'
import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import konservatsiyaFasaduData from './data';
import Title from '@/app/[locale]/components/title/Title';

type KonservatsiyaProps = {
  title: string
  content: string
}

const KonservatsiyaFasadu = ({title, content}: KonservatsiyaProps) => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>{title}</Title>
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
        <p className={styles.text}>{content}</p>
      </div>
    </section>
  )
}

export default KonservatsiyaFasadu