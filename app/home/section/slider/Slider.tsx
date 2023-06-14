'use client'
import SliderCard from '@/card/SliderCard/SliderCard';
import styles from './Slider.module.scss';
import SliderData from '@/data/sliderData';
import { useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? SliderData.length - 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === SliderData.length - 3 ? 0 : prevSlide + 1));
  };

  const visibleSlides = SliderData.slice(currentSlide, currentSlide + 3);


  return(
    <section>
      <div className="container">
        <h2>Об'єкти де застосовані наші ТЕХНОЛОГІЇ</h2>
        <div className={styles.wrapper}>
          <button className={styles.btn} onClick={handlePrevSlide}>&lt;</button>
          <ul className={styles.list}>
            {visibleSlides.map((card, index) => {
              return(
                <li key={index}>
                  <SliderCard
                    image={card.image}
                    imageWebp={card.imageWebp}
                    title={card.title}
                    link={card.link}
                    description={card.description}
                  />
                </li>
              )
            })}
          </ul>
          <button className={styles.btn} onClick={handleNextSlide}>&gt;</button>
        </div>
      </div>
    </section>
  )
}

export default Slider;