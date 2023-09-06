'use client'

import Title from '@/app/[locale]/components/title/Title';
import zapovnennyaShvivData from './data'
import styles from './zapovnennya-shviv.module.scss'

import Image from 'next/image';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ShowViewProps } from 'react-admin';

type ShviProps = {
  title: string
}

const ZapovnennyaShviv = ({title}: ShviProps) => {
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
            {zapovnennyaShvivData.map((slide, index) => (
              <SwiperSlide key={index}>
                <video className={styles.video} src={slide.video} autoPlay muted playsInline loop></video>
              </SwiperSlide>
            ))}

          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default ZapovnennyaShviv