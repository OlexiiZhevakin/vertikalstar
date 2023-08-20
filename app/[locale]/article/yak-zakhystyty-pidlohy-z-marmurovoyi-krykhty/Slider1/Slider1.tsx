'use client'
// import Title from "@/components/title/Title"
import styles from './Slider1.module.scss'
import Slider from "@/app/[locale]/components/slider/Slider"
import { slider1Data } from "./data"
import { SwiperSlide } from "swiper/react"
import Image from "next/image"

const Slider1 = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        {/* <Title title={'h2'}>Text</Title> */}
        <Slider>
          {slider1Data.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide}
                alt="Як захистити підлоги з мармурової крихти"
                width={1200}
                height={700}
                priority />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Slider1