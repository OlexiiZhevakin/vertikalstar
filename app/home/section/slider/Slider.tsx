
'use client'

import { Navigation } from 'swiper/modules';
import SliderCard from '@/card/SliderCard/SliderCard';
import styles from './Slider.module.scss';
import SliderData from '@/data/sliderData';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';

const Slider = () => {


  return (
    <section>
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
            loop={true}
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
            
            {SliderData.map((card, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <SliderCard
                  image={card.image}
                  imageWebp={card.imageWebp}
                  title={card.title}
                  link={card.link}
                  description={card.description}
                />
              </SwiperSlide>
            ))}
            
          </Swiper>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
