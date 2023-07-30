

'use client'
import styles from './pryklady.module.scss'
import Image from 'next/image';
import prykladyData from './data';
import Slider from '@/components/slider/Slider';
import { SwiperSlide } from 'swiper/react';
import Title from '@/components/title/Title';

const Pryklady = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={"line"}>Приклади застосування</Title>
        <Slider>
          {prykladyData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.img}
                className={styles.image}
                alt='Приклади застосування'
                title='Приклади застосування'
                width={1200}
                height={600}
                priority
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}



export default Pryklady