'use client'
import Form from "@/components/form/Form"
import styles from './realtime.module.scss'
import { useState } from 'react'

const Slider1 = [
  {
    image: "/img/real/1.jpg",
    imageWebp: "/img/real/1.webp"
  },
  {
    image: "/img/real/2.jpg",
    imageWebp: "/img/real/2.webp"
  },
  {
    image: "/img/real/3.jpg",
    imageWebp: "/img/real/3.webp"
  },
  {
    image: "/img/real/4.jpg",
    imageWebp: "/img/real/4.webp"
  }
]

const Slider2 = [
  {
    image: "/img/real/5.jpg",
    imageWebp: "/img/real/5.webp"
  },
  {
    image: "/img/real/6.jpg",
    imageWebp: "/img/real/6.webp"
  },
  {
    image: "/img/real/7.jpg",
    imageWebp: "/img/real/7.webp"
  },
  {
    image: "/img/real/8.jpg",
    imageWebp: "/img/real/8.webp"
  },
  {
    image: "/img/real/9.jpg",
    imageWebp: "/img/real/9.webp"
  },
  {
    image: "/img/real/10.jpg",
    imageWebp: "/img/real/10.webp"
  },
  {
    image: "/img/real/11.jpg",
    imageWebp: "/img/real/11.webp"
  },
  {
    image: "/img/real/12.jpg",
    imageWebp: "/img/real/12.webp"
  }
]

const Slider3 = [
  {
    video: "/img/real/slider3/1.mp4",
  },
  {
    video: "/img/real/slider3/2.mp4",
  },
  {
    video: "/img/real/slider3/3.mp4",
  },
  {
    image: "/img/real/slider3/4.jpg",
    imageWebp: '/img/real/slider3/4.webp'
  },
  {
    video: "/img/real/slider3/5.mp4",
  },
  {
    video: "/img/real/slider3/6.mp4",
  },
  {
    image: "/img/real/slider3/7.jpg",
    imageWebp: '/img/real/slider3/7.webp'
  }
]

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
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);
  const [currentSlide5, setCurrentSlide5] = useState(0);
  const [currentSlide6, setCurrentSlide6] = useState(0);
  const [currentSlide7, setCurrentSlide7] = useState(0);

  const handlePrevSlide1 = () => {
    setCurrentSlide1((prevSlide) => (prevSlide === 0 ? Slider1.length - 1 : prevSlide - 1));
  };

  const handleNextSlide1 = () => {
    setCurrentSlide1((prevSlide) => (prevSlide === Slider1.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide === 0 ? Slider2.length - 1 : prevSlide - 1));
  };

  const handleNextSlide2 = () => {
    setCurrentSlide2((prevSlide) => (prevSlide === Slider2.length - 1 ? 0 : prevSlide + 1));
  };

  const handlePrevSlide3 = () => {
    setCurrentSlide3((prevSlide) => (prevSlide === 0 ? Slider3.length - 1 : prevSlide - 1));
  };

  const handleNextSlide3 = () => {
    setCurrentSlide3((prevSlide) => (prevSlide === Slider3.length - 1 ? 0 : prevSlide + 1));
  };

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

  const visibleSlides1 = Slider1.slice(currentSlide1, currentSlide1 + 1);
  const visibleSlides2 = Slider2.slice(currentSlide2, currentSlide2 + 1);
  const visibleSlides3 = Slider3.slice(currentSlide3, currentSlide3 + 1);
  const visibleSlides4 = Slider4.slice(currentSlide4, currentSlide4 + 1);
  const visibleSlides5 = Slider5.slice(currentSlide5, currentSlide5 + 1);
  const visibleSlides6 = Slider6.slice(currentSlide6, currentSlide6 + 1);
  const visibleSlides7 = Slider7.slice(currentSlide7, currentSlide7 + 1);

  return (
    <>
      <div className={styles.realtime}>
        <div className="container">
          <p>
            Починаємо роботи з РЕКОНСТРУКЦІЇ двоповерхової будівлі (Україна). Центральний фасад будівлі відремонтовано кілька років тому.
          </p>
          <div className={styles.wrapper}>
            <button className={styles.btnPrev} onClick={handlePrevSlide1}>&lt;</button>
            <ul className={styles.list}>
              {visibleSlides1.map((slide, index) => {
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
            <button className={styles.btnNext} onClick={handleNextSlide1}>&gt;</button>
          </div>
        </div>
      </div>

      <div className={styles.realtime}>
        <div className="container">
          <span> 
            Інші фасади виглядають так:
          </span>
          <div className={styles.wrapper}>
            <button className={styles.btnPrev} onClick={handlePrevSlide2}>&lt;</button>
            <ul className={styles.list}>
              {visibleSlides2.map((slide, index) => {
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
            <button className={styles.btnNext} onClick={handleNextSlide2}>&gt;</button>
          </div>
        </div>
      </div>

      <div className={styles.work}>
        <div className="container">
          <p>
            Мають бути виконані роботи: 
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

      <div className={styles.realtime}>
        <div className="container">
          <p>Вимощення та водовідведення</p>
          <div className={styles.wrapper}>
            <button className={styles.btnPrev} onClick={handlePrevSlide3}>&lt;</button>
            <ul className={styles.list}>
              {visibleSlides3.map((slide, index) => {
                return(
                  <li key={index}>
                  {slide.video ? (
                    <video src={slide.video} width={1000} height={520} autoPlay muted></video>
                  ) : (
                    <picture>
                      <source type="image/webp" srcSet={slide.imageWebp} title='Реальний час'/>
                      <img src={slide.image} loading="lazy" alt='Реальний час' title='Реальний час' width={701} height={526} />
                    </picture>
                  )}
                </li>
                )
              })}
            </ul>
            <button className={styles.btnNext} onClick={handleNextSlide3}>&gt;</button>
          </div>
        </div>
      </div>

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
      
      <Form/>
    </>
  )
}

export default Real