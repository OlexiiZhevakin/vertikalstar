import Title from '@/components/title/Title'
import styles from './head.module.scss'

const Head = () => {
  return(
    <section className={styles.head}>
      <div className="container">
        <div className={styles.inner}>
          <Title title={'title'}>Реставрація цегляних фасадів</Title>
        </div>
      </div>
    </section>
  )
}

export default Head
