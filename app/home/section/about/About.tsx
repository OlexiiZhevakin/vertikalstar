
import Image from 'next/image';
import styles from './About.module.scss'
import Btn from '@/components/Btn/Btn';

const About = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/about/my-photo.jpg' width={360} height={460} alt='На цій фотографії зображен диретор компанії Вертикаль будівельних технологій' title='На цій фотографії зображен диретор компанії Вертикаль будівельних технологій' />
          </div>
          <div className={styles.content}>
            <h3>
              Ми працюємо з 1999 року
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
                  Якщо Ви звернулися до нас вперше – Ви залишитеся з нами надовго, у колі однодумців та професіоналів.
                </p>
              </div>

            </div>
            <Btn className={styles.btn} href='/about'>Про нас</Btn>
            <p className={styles.signature}>
              з повагою, засновник компанії Сергій Стародубов
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;