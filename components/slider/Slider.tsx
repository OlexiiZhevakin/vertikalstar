
import styles from './Slider.module.scss'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

type Props = {
  children: React.ReactNode,
  id?: string
  className?: string
}

const Slider = ({children, id, className}: Props) => {
  return (
    <div className={`${styles.wrapper} ${styles[`wrapper-${id}`]}`}>
      <div className={`${styles.btnPrev} ${styles[`btnPrev-${id}`]}`}>&lt;</div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: `.${styles[`btnPrev-${id}`]}`,
          nextEl: `.${styles[`btnNext-${id}`]}`,
        }}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        loop={true}
        className={`${styles.swiper} ${styles[`swiper-${id}`]}`}
      >
          {children}
      </Swiper>
      <div className={`${styles.btnNext} ${styles[`btnNext-${id}`]}`}>&gt;</div>
    </div>
  )
}
export default Slider
