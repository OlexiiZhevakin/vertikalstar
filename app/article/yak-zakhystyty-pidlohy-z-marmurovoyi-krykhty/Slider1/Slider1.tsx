import Title from "@/components/title/Title"
import styles from './Slider1.module.scss'
import Slider from "@/components/slider/Slider"

const Slider1 = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Text</Title>
        <Slider>
          
        </Slider>
      </div>
    </section>
  )
}

export default Slider1