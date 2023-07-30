
import Title from '@/components/title/Title';
import styles from './Head.module.scss';

const Head = () => {
  return(
    <section className={styles.head}>
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