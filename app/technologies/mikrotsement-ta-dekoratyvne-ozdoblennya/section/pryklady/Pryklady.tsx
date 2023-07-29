// 'use client'

// import styles from './pryklady.module.scss'
// import Image from 'next/image';
// import { Navigation, Pagination } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';
// import prykladyData from './data';


// const Pryklady = () => {
//   return (
//     <section className={styles.container}>
//       <div className="container">
//         <h2 className={styles.title}>Приклади застосування</h2>
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
//             {prykladyData.map((slide, index) => (
//               <SwiperSlide className={styles.slide} key={index}>
//                 <Image
//                   src={slide.img}
//                   alt='Мікроцемент та декоративне оздоблення'
//                   title='Мікроцемент та декоративне оздоблення'
//                   width={760}
//                   height={507} />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//           <div className={styles.btnNext}>&gt;</div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Pryklady


import styles from './pryklady.module.scss'
import Image from 'next/image';
import prykladyData from './data';
import Slider from '@/components/slider/Slider';
import { SwiperSlide } from 'swiper/react';


const Pryklady = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>Приклади застосування</h2>
        <Slider>
          {prykladyData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Image
                src={slide.img}
                className={styles.image}
                alt='Приклади застосування'
                title='Приклади застосування'
                width={1200}
                height={600}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </section>
  )
}



export default Pryklady