import Title from '@/components/title/Title'
import styles from './head.module.scss'



const HeaderPage = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'title'}>Мікроцемент та декоративне оздоблення</Title>
        <p className={styles.descr}>
          Мікроцемент це комплекс оздоблювальних матеріалів, за допомогою яких можна створювати унікальні інтер'єри у тому числі в стилі Loft.
        </p>
      </div>
    </section>
  )
}

export default HeaderPage