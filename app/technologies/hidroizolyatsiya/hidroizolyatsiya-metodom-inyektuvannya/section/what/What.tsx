import styles from './what.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const What = () => {
  return(
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}> 
          Що робити в такому випадку в існуючій будівлі?
        </h2>
        <div className={styles.inner}>
          <div className={styles.img}>
              <Image src='/img/technologies/page/hidro/hssmi/block_about/metod-inyektsiy.jpg' alt="Ця картинка показує метод ін'єкцій" title="Ця картинка показує метод ін'єкцій" width={600} height={500}/>
          </div>

          <div className={styles.info}>

            <h3 className={styles.subtitle}>
              Тут на допомогу приходить технологія ін'єктування.
            </h3>

            <div className={styles.items}>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Свердління отворів у цегляній кладці.
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Ін'єктування спеціальним гідроізоляційним складом в отвори.
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Зачеканка отворів ремонтним розчином.
                </p>
              </div>

              <div className={styles.item}>
                <FontAwesomeIcon className={styles.icon} icon={faCircleCheck} />
                <p>
                  Нанесення гідроізоляції над рядом ін'єкційних отворів.
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