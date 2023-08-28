
'use client'

import { Navigation } from 'swiper/modules';
import styles from './Reviews.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import ReviewCard from '@/card/ReviewCard/ReviewCard';
import Title from '@/app/[locale]/components/title/Title';
import { reviewdata } from '@/app/[locale]/reviews/data';

interface ReviewProps {
  title: string
}

const Reviews = ({title}: ReviewProps) => {


  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>{title}</Title>
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

            {reviewdata.map((card, index) => (
              <SwiperSlide className={styles.slide} key={index}>
                <ReviewCard
                  image={card.mini}
                  title={card.title}
                  author={card.title}
                  link={`/reviews/${card.id}`}
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
