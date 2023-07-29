
import styles from './world.module.scss'
import Image from 'next/image';
import worldData from './data';
import Slider from '@/components/slider/Slider';
import { SwiperSlide } from 'swiper/react';


const World = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Світові об'єкти</h2>
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