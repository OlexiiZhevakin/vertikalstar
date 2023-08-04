import Title from '@/components/title/Title'
import styles from './head.module.scss'
import Image from 'next/image'

const Head = () => {
  return(
    <section className={styles.container}>
      <div className={styles.background}>
        <Image
          src="/img/technologies/page/torkretuvannya/head-bg.webp"
          fill
          style={{
            objectFit: 'cover',
          }}
          quality={75}
          alt='Фонова картинка'
          priority
        />
      </div>
      <div className="container">
        <div className={styles.inner}>
          <Title title={'title'}>Торкретування - нанесення під тиском бетонної суміші на поверхню</Title>
        </div>
      </div>
    </section>
  )
}

export default Head