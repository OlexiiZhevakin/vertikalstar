import Image from 'next/image'
import styles from './head.module.scss'
import Title from '@/components/title/Title'

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
          <Title title={'title'}>Посилення вуглецевими полотнами чи композитне армування</Title>
        </div>
      </div>
    </section>
  )
}

export default Head