'use client'
import ReviewCard from '@/card/ReviewCard/ReviewCard';
import styles from './Reviews.module.scss';
import ReviewData from '@/data/reviewdata';
import { useState } from 'react';
const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? ReviewData.length - 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === ReviewData.length - 3 ? 0 : prevSlide + 1));
  };

  const visibleSlides = ReviewData.slice(currentSlide, currentSlide + 3);

  return(
    <section>
      <div className="container">
        <h2>Відгуки</h2>
        <div className={styles.wrapper}>
          <button className={styles.sliderBtn} onClick={handlePrevSlide}>&lt;</button>
          <ul className={styles.list}>
            {visibleSlides.map((card, index) => {
            return (
              <li key={index}>
                <ReviewCard
                  description={card.description}
                  image={card.image}
                  imageWebp={card.imageWebp}
                  title={card.title}
                  author={card.author}
                  link={card.link}
                />
              </li>
            )
          })}
          </ul>
          <button className={styles.sliderBtn} onClick={handleNextSlide}>&gt;</button>
        </div>
      </div>
    </section>
  )
}

export default Reviews;