
import styles from './Slider.module.scss'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

type Props = {
  children: React.ReactNode
}

const Slider = ({children}: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.btnPrev}>&lt;</div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: `.${styles.btnPrev}`,
          nextEl: `.${styles.btnNext}`,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        loop={true}
        className={styles.swiper}
      >
          {children}
      </Swiper>
      <div className={styles.btnNext}>&gt;</div>
    </div>
  )
}

export default Slider