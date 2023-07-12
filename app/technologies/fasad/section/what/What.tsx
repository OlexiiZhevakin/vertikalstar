import styles from './what.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';



const What = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>
          У більшості випадків такі фасади можна реставрувати, продовжити їх життя на найближче десятиліття та зберегти їх у належному стані для наших нащадків.
        </h2>
        <p className={styles.subtitle}>
          Технологія реставрації фасадів зазвичай включає такі етапи:
        </p>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/technologies/page/hidro/hssmi/block_about/metod-inyektsiy.jpg' alt="Ця картинка показує метод ін'єкцій" title="Ця картинка показує метод ін'єкцій" width={600} height={500} />
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
                  Гідроізоляція перемикань, карнизів, поличок
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Консервація фасаду - обробка гідрофобним складом
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