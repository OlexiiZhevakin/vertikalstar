'use client'
import Form from "@/components/form/Form"
import styles from './realtime.module.scss'
import { useState } from 'react'
import RemontVkhodiv from "./section/remont-vkhodiv/Slider3"
import Hidroizolyatsiya from "./section/hidroizolyatsiya/Hidroizolyatsiya"
import Vodovidvedennya from "./section/vymoshchennya-ta-vodovidvedennya/Vodovidvedennya"
import Start from "./section/start/Start"
import Inshi from "./section/Inshi/Inshi"


const Slider4 = [
  {
    image: "/img/real/slider4/1.jpg",
    imageWebp: "/img/real/slider4/1.webp"
  },
  {
    image: "/img/real/slider4/2.jpg",
    imageWebp: "/img/real/slider4/2.webp"
  },
  {
    image: "/img/real/slider4/3.jpg",
    imageWebp: "/img/real/slider4/3.webp"
  }
]

const Slider5 = [
  {
    image: "/img/real/slider5/1.jpg",
    imageWebp: '/img/real/slider5/1.webp'
  },
  {
    image: "/img/real/slider5/2.jpg",
    imageWebp: '/img/real/slider5/2.webp'
  },
  {
    image: "/img/real/slider5/3.jpg",
    imageWebp: '/img/real/slider5/3.webp'
  },
  {
    video: "/img/real/slider5/1.mp4",
  },
  {
    video: "/img/real/slider5/2.mp4",
  },
  {
    video: "/img/real/slider5/3.mp4",
  }
]

const Slider6 = [
  {
    video: "/img/real/slider6/1.mp4",
  },
  {
    video: "/img/real/slider6/2.mp4",
  },
  {
    video: "/img/real/slider6/3.mp4",
  },
  {
    video: "/img/real/slider6/4.mp4",
  },
  {
    image: "/img/real/slider6/1.jpg",
    imageWebp: '/img/real/slider6/1.webp'
  },
  {
    image: "/img/real/slider6/2.jpg",
    imageWebp: '/img/real/slider6/2.webp'
  },
  {
    image: "/img/real/slider6/3.jpg",
    imageWebp: '/img/real/slider6/3.webp'
  },
  {
    image: "/img/real/slider6/4.jpg",
    imageWebp: '/img/real/slider6/4.webp'
  },
  {
    image: "/img/real/slider6/5.jpg",
    imageWebp: '/img/real/slider6/5.webp'
  },
]

const Slider7 = [
  {
    image: "/img/real/slider7/1.jpg",
    imageWebp: '/img/real/slider7/1.webp'
  },
  {
    image: "/img/real/slider7/2.jpg",
    imageWebp: '/img/real/slider7/2.webp'
  },
  {
    video: "/img/real/slider7/1.mp4",
  },
  {
    image: "/img/real/slider7/3.jpg",
    imageWebp: '/img/real/slider7/3.webp'
  },
  {
    image: "/img/real/slider7/4.jpg",
    imageWebp: '/img/real/slider7/4.webp'
  },
  {
    image: "/img/real/slider7/5.jpg",
    imageWebp: '/img/real/slider7/5.webp'
  },
  {
    image: "/img/real/slider7/6.jpg",
    imageWebp: '/img/real/slider7/6.webp'
  },
  {
    image: "/img/real/slider7/7.jpg",
    imageWebp: '/img/real/slider7/7.webp'
  },
]


const Real = () => {
  const [currentSlide4, setCurrentSlide4] = useState(0);
  const [currentSlide5, setCurrentSlide5] = useState(0);
  const [currentSlide6, setCurrentSlide6] = useState(0);
  const [currentSlide7, setCurrentSlide7] = useState(0);



  const handlePrevSlide4 = () => {
    setCurrentSlide4((prevSlide) => (prevSlide === 0 ? Slider4.length - 1 : prevSlide - 1));
  };

  const handleNextSlide4 = () => {
    setCurrentSlide4((prevSlide) => (prevSlide === Slider4.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide5 = () => {
    setCurrentSlide5((prevSlide) => (prevSlide === 0 ? Slider5.length - 1 : prevSlide - 1));
  };

  const handleNextSlide5 = () => {
    setCurrentSlide5((prevSlide) => (prevSlide === Slider5.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide6 = () => {
    setCurrentSlide6((prevSlide) => (prevSlide === 0 ? Slider6.length - 1 : prevSlide - 1));
  };

  const handleNextSlide6 = () => {
    setCurrentSlide6((prevSlide) => (prevSlide === Slider6.length - 1 ? 0 : prevSlide + 1));
  };
  const handlePrevSlide7 = () => {
    setCurrentSlide7((prevSlide) => (prevSlide === 0 ? Slider7.length - 1 : prevSlide - 1));
  };

  const handleNextSlide7 = () => {
    setCurrentSlide7((prevSlide) => (prevSlide === Slider7.length - 1 ? 0 : prevSlide + 1));
  };


  const visibleSlides4 = Slider4.slice(currentSlide4, currentSlide4 + 1);
  const visibleSlides5 = Slider5.slice(currentSlide5, currentSlide5 + 1);
  const visibleSlides6 = Slider6.slice(currentSlide6, currentSlide6 + 1);
  const visibleSlides7 = Slider7.slice(currentSlide7, currentSlide7 + 1);

  return (
    <>
      <Start/>
      <Inshi/>

      <div className={styles.work}>
        <div className="container">
          <p>
            На цьому об'єкті мають буті виконані такі роботи:
          </p>
          <ol>
            <li>
              гідроізоляція підвалу зовні і зсередини з відсіканням капілярного підйому вологи методом ін'єктування
            </li>
            <li>
              ремонту 3-х фасадів зі склеюванням тріщин
            </li>
            <li>
              влаштування вимощення та водовідведення
            </li>
            <li>
              ремонт підвалу
            </li>
            <li>
              ремонт входів у підвал
            </li>
          </ol>
        </div>
      </div>
      <Hidroizolyatsiya />
      

      <div className={styles.realtime}>
        <div className="container">
          <p>
            Лівий фасад
          </p>
          <div className={styles.wrapper}>
            <button className={styles.btnPrev} onClick={handlePrevSlide4}>&lt;</button>
            <ul className={styles.list}>
              {visibleSlides4.map((slide, index) => {
                return(
                  <li key={index}>
                    <picture>
                      <source type="image/webp" srcSet={slide.imageWebp} title='Реальний час'/>
                      <img src={slide.image} loading="lazy" alt='Реальний час' title='Реальний час' height={773} />
                    </picture>
                  </li>
                )
              })}
            </ul>
            <button className={styles.btnNext} onClick={handleNextSlide4}>&gt;</button>
          </div>
        </div>
      </div>

      <div className={styles.realtime}>
        <div className="container">
          <p>Правий фасад</p>
          <div className={styles.wrapper}>
            <button className={styles.btnPrev} onClick={handlePrevSlide5}>&lt;</button>
            <ul className={styles.list}>
              {visibleSlides5.map((slide, index) => {
                return(
                  <li key={index}>
                  {slide.video ? (
                    <video src={slide.video} width={1000} height={520} autoPlay muted></video>
                  ) : (
                    <picture>
                      <source type="image/webp" srcSet={slide.imageWebp} title='Реальний час'/>
                      <img src={slide.image} loading="lazy" alt='Реальний час' title='Реальний час' height={526} />
                    </picture>
                  )}
                </li>
                )
              })}
            </ul>
            <button className={styles.btnNext} onClick={handleNextSlide5}>&gt;</button>
          </div>
        </div>
      </div>

      <div className={styles.realtime}>
        <div className="container">
          <p>Склеювання тріщин</p>
          <div className={styles.wrapper}>
            <button className={styles.btnPrev} onClick={handlePrevSlide6}>&lt;</button>
            <ul className={styles.list}>
              {visibleSlides6.map((slide, index) => {
                return(
                  <li key={index}>
                  {slide.video ? (
                    <video src={slide.video} width={1000} height={520} autoPlay muted></video>
                  ) : (
                    <picture>
                      <source type="image/webp" srcSet={slide.imageWebp} title='Реальний час'/>
                      <img src={slide.image} loading="lazy" alt='Реальний час' title='Реальний час' height={526} />
                    </picture>
                  )}
                </li>
                )
              })}
            </ul>
            <button className={styles.btnNext} onClick={handleNextSlide6}>&gt;</button>
          </div>
        </div>
      </div>

      <div className={styles.realtime}>
        <div className="container">
          <p>Тильний фасад</p>
          <div className={styles.wrapper}>
            <button className={styles.btnPrev} onClick={handlePrevSlide7}>&lt;</button>
            <ul className={styles.list}>
              {visibleSlides7.map((slide, index) => {
                return(
                  <li key={index}>
                  {slide.video ? (
                    <video src={slide.video} width={1000} height={520} autoPlay muted></video>
                  ) : (
                    <picture>
                      <source type="image/webp" srcSet={slide.imageWebp} title='Реальний час'/>
                      <img src={slide.image} loading="lazy" alt='Реальний час' title='Реальний час' width={700} height={526} />
                    </picture>
                  )}
                </li>
                )
              })}
            </ul>
            <button className={styles.btnNext} onClick={handleNextSlide7}>&gt;</button>
          </div>
        </div>
      </div>
      <Vodovidvedennya />
      <RemontVkhodiv/>
      <Form/>
    </>
  )
}

export default Real