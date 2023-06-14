import Image from 'next/image';
import styles from './About.module.scss'
import Link from 'next/link';

const About = () => {
  return(
    <section>
      <div className="container">
        <h2>Про нас</h2>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src="/img/about/my-photo.jpg" alt='На цій фотографії зображен диретор компанії Вертикаль будівельних технологій' title='На цій фотографії зображен диретор компанії Вертикаль будівельних технологій' width={360} height={460} loading="lazy"/>
          </div>
          <div className={styles.content}>
            <h3>
              Ми працюємо більше 24 років для людей
            </h3>
            <div className={styles.items}>
            <div>
                <i className="fa-regular fa-circle-check"></i>
                <p>
                  Вважаємо, що унікальні споруди мають бути збережені для нащадків.
                  Прагнемо, щоб нові будинки служили століттями
                </p>
              </div>
              <div>
                <i className="fa-regular fa-circle-check"></i>
                <p>
                  Якщо Ви займаєтеся Професійним будівництвом, Ви обов 'язково знайдете у нас корисні технології для себе.
                </p>
              </div>
              <div>
                <i className="fa-regular fa-circle-check"></i>
                <p>
                  Якщо Ви звернетеся до нас вперше– Ви залишитеся з нами надовго, тому що, цікаво та вигідно вирішувати завдання та розвиватися у колі Однодумців та Професіоналів.
                </p>
              </div>
          </div>
          <Link href="/" className='btn'>Докладніше</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;