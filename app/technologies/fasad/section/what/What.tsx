import styles from './what.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Title from '@/components/title/Title';



const What = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <p className={styles.subtitle}>
          У більшості випадків такі фасади можна реставрувати, продовжити їх життя на найближчі десятиліття та зберегти їх у належному стані для наших нащадків.
        </p>
        <Title title={'left'}>Технологія реставрації фасадів зазвичай включає такі етапи:</Title>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/technologies/page/fasad/after-before/fasad-4.jpg' alt="Технологія реставрації фасадів" title="Технологія реставрації фасадів" width={380} height={520} />
          </div>

          <div className={styles.info}>

            <div className={styles.items}>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Очищення фасаду
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Реставрація цегли
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Заповнення швів
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Склеювання тріщин
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Гідроізоляція примикання
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Консервація фасаду
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default What