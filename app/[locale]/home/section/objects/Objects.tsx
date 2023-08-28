'use client'


import Link from "next-intl/link"
import styles from './Objects.module.scss'
import SliderCard from '@/card/SliderCard/SliderCard';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/scss';
import 'swiper/scss/navigation';
// import { ObjectPage } from "@/app/object/data";
import Title from "@/app/[locale]/components/title/Title";
import { ObjectPage } from "@/app/[locale]/object/data";

interface ObjectsProps {
  title: string
}

const Objects = ({title}: ObjectsProps) => {
  const data = ObjectPage
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>{title}</Title>
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