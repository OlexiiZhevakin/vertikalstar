
'use client'
import styles from './technologiya.module.scss'
import { SwiperSlide } from 'swiper/react';
import technologiyaData from './data';
import MicrocementCard from '@/card/MicrocementCard/MicrocementCard';
import Slider from '@/app/[locale]/components/slider/Slider';
import Title from '@/app/[locale]/components/title/Title';

const Technologiya = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>Технологія нанесення</Title>
        <Slider>
          {technologiyaData.map((slide, index) => (
            <SwiperSlide key={index}>
              <MicrocementCard
                img={slide.img}
                body={slide.body}
              /> 
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Technologiya