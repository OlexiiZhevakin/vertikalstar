'use client'
import styles from './world.module.scss'
import Image from 'next/image';
import worldData from './data';
import Slider from '@/components/slider/Slider';
import { SwiperSlide } from 'swiper/react';
import Title from '@/components/title/Title';


const World = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={"line"}>Світові об'єкти</Title>
        <Slider>
          {worldData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                className={styles.img}
                src={slide.img}
                alt="Світові об'єкти"
                title="Світові об'єкти"
                width={1200}
                height={600} 
                priority/>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default World