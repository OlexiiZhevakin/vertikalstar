import Image from 'next/image';
import styles from './sova.module.scss'

const Sova = () => {
  return(
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>
          Компанія <span>Вертикаль будівельних технологій</span> має:
        </h2>
        <div className={styles.inner}>
          <Image src='/img/technologies/page/hidro/hssmi/sova.jpg' alt='Зображення логотипу компанії' title='Зображення логотипу компанії' width={150} height={190}/>
          <ul className={styles.list}>
            <li>
              20-річний досвід виконання таких робіт;
            </li>
              
            <li>
              сертифіковані матеріали;
            </li>
            
            <li>
              необхідне обладнання;
            </li>
            
            <li>
              колектив спеціалістів.
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
}

export default Sova;