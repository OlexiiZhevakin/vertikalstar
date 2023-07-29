// 'use client'
// import styles from './technologiya.module.scss'
// import { Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import technologiyaData from './data';
// import MicrocementCard from '@/card/MicrocementCard/MicrocementCard';

// const Technologiya = () => {
//   return (
//     <section className={styles.container}>
//       <div className="container">
//         <h2 className={styles.title}>Технологія нанесення</h2>
//         <div className={styles.wrapper}>
//           <div className={styles.btnPrev}>&lt;</div>
//           <Swiper
//             modules={[Navigation, Pagination]}
//             navigation={{
//               prevEl: `.${styles.btnPrev}`,
//               nextEl: `.${styles.btnNext}`,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             slidesPerView={1}
//             loop={true}
//             className={styles.swiper}
//           >
//             {technologiyaData.map((slide, index) => (
//               <SwiperSlide className={styles.slide} key={index}>
//                 <MicrocementCard
//                   img={slide.img}
//                   body={slide.body}
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className={styles.btnNext}>&gt;</div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Technologiya


import styles from './technologiya.module.scss'
import { SwiperSlide } from 'swiper/react';
import technologiyaData from './data';
import MicrocementCard from '@/card/MicrocementCard/MicrocementCard';
import Slider from '@/components/slider/Slider';

const Technologiya = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Технологія нанесення</h2>
        <Slider>
          {technologiyaData.map((slide, index) => (
            <SwiperSlide key={index}>
              <MicrocementCard
                img={slide.img}
                body={slide.body}
              /> 
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Technologiya