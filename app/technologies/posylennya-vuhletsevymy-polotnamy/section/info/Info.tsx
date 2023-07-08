import Image from 'next/image'
import styles from './info.module.scss'

const Info = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <p>
            Посилення будівельних конструкцій методом наклеювання на епоксидному клею вуглецевих полотен або ламелей. 
          </p>
          <p>
            Переваги:
          </p>
          <ul className={styles.list}>
            <li>
              висока міцність на розтягування та вигин,
            </li>
            <li>
              відсутність зварювальних робіт, простота нанесення,
            </li>
            <li>
              пожежна безпека в процесі розведення робіт,
            </li>
            <li>
              невелика вага,
            </li>
            <li>
              можливість сховати під наступне оздоблення.
            </li>
          </ul>
          <div className={styles.img}>
            <Image src='/img/technologies/page/posylennya-vuhletsevymy-polotnamy-chy-kompozytne-armuvannya/posylennya-vuhletsevymy-polotnamy-chy-kompozytne-armuvannya-1.jpg' alt='Ремонт бетону та залізобетону' title='Ремонт бетону та залізобетону' width={580} height={400}/>
            <Image src='/img/technologies/page/posylennya-vuhletsevymy-polotnamy-chy-kompozytne-armuvannya/posylennya-vuhletsevymy-polotnamy-chy-kompozytne-armuvannya-2.jpg' alt='Ремонт бетону та залізобетону' title='Ремонт бетону та залізобетону' width={580} height={400}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info