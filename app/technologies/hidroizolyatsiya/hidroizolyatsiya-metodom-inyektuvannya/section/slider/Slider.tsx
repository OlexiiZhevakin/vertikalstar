'use client'
import styles from './slider.module.scss'
import hmiData from '@/data/hmiData'
import { useState } from 'react';

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? hmiData.length - 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === hmiData.length - 3 ? 0 : prevSlide + 1));
  };

  const visibleSlides = hmiData.slice(currentSlide, currentSlide + 1);

  return(
    <div className={styles.slider}>
      <div className="container">
        <p>
          Неприємний запах, пліснява та грибок, відшарування штукатурки, шпалер чи фарбування, плями вологи всередині будівлі або на фасаді.
        </p>
        <div className={styles.wrapper}>
          <button className={styles.btnPrev} onClick={handlePrevSlide}>&lt;</button>
          <ul className={styles.list}>
          {visibleSlides.map((item, index) => {
            return(
              <li key={index}>
                <picture>
                  <source type="image/webp" srcSet={item.imageWebp} title="Фото проблемної будівлі"/>
                  <img src={item.image} width="1138" height="540" loading="lazy" alt="Фото проблемної будівлі" title="Фото проблемної будівлі" />
                </picture>
              </li>
            )
          })}
        </ul>
        <button className={styles.btnNext} onClick={handleNextSlide}>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default Slider