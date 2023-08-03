
import Title from '@/components/title/Title';
import styles from './Head.module.scss';
import Image from 'next/image';

const Head = () => {
  return(
    <section className={styles.head}>
      <div className={styles.background}>
        <Image
          src="/img/head-bg.webp"
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
          <p className={styles.subtitle}>
            Група компаній
          </p>
          <Title title={'title'}>Вертикаль будівельних технологій</Title>
          <p className={styles.subtitle}>
            Впроваджуємо сучасні, ефективні технології для професійного будівництва
          </p>
        </div>
      </div>
    </section>
  )
}

export default Head;