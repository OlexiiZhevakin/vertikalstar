import Image from 'next/image'
import styles from './teach.module.scss'

const Teach = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.info}>
            <h3>Навчаємо</h3>
            <p>
              Ми дуже поважно ставимося до навчання, знання основ  та глибокому розумінні будівельних процесів. Тому ми заснували свій корпоративний університет. 
            </p>
            <p>
              Тут ми навчаємо своїх співробітників нашим підходам та ТЕХНОЛОГІЯМ.  
            </p>
            <p>
              Також, у рамках нашого університету ми щедро ділимося знаннями з нашими Клієнтами та Партнерами, організовуючи презентації, семінари, навчання будівельних компаній та бригад чи шеф-монтаж на об’єктах. 
            </p>
          </div>
          <Image src='/img/about/fasad-12.jpg' alt='' title='' width={540} height={420} />
        </div>
      </div>
    </section>
  )
}

export default Teach