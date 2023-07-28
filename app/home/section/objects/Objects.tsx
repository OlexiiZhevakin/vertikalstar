'use client'

import { FC } from "react"
import Link from "next/link"

import styles from './Objects.module.scss'
import SliderCard from '@/card/SliderCard/SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/scss';
import 'swiper/scss/navigation';
import { ObjectPage } from "@/app/object/data";

const Objects: FC = () => {
  const data = ObjectPage
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Об'єкти де застосовані наші ТЕХНОЛОГІЇ</h2>
        <div className={styles.wrapper}>
          <div className={styles.btnPrev}>&lt;</div>
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.${styles.btnPrev}`,
              nextEl: `.${styles.btnNext}`,
            }}
            slidesPerView={3}
            spaceBetween={50}
            loop={false}
            // centeredSlides
            breakpoints={{
              991: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 1,
              }
            }}
          >

            {data.map((obj: any, index: any) => (
              <SwiperSlide className={styles.slide} key={index}> 
                <Link href={`/object/${obj.id}`}>
                  <SliderCard
                    image={obj.src}
                    title={obj.title}
                    description={obj.title}
                  />
                </Link>
              </SwiperSlide>
            ))}

          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  )
}

export default Objects