
'use client'

import { Navigation } from 'swiper/modules';
import styles from './Reviews.module.scss';
import ReviewData from '@/data/reviewdata';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import ReviewCard from '@/card/ReviewCard/ReviewCard';
import Title from '@/components/title/Title';

const Reviews = () => {


  return (
    <section>
      <div className="container">
        <Title title={'line'}>Відгуки</Title>
        <div className={styles.wrapper}>
          
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.${styles.btnPrev}`,
              nextEl: `.${styles.btnNext}`,
            }}
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
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

            {ReviewData.map((card, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <ReviewCard
                  image={card.image}
                  title={card.title}
                  link={card.link}
                  author={card.author}
                  description={card.description}
                />
              </SwiperSlide>
            ))}

          </Swiper>
          <div className={styles.btnPrev}>&lt;</div>
          <div className={styles.btnNext}>&gt;</div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
