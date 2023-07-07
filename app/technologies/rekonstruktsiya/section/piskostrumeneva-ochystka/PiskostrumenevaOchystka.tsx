import Image from 'next/image'
import styles from './page.module.scss'

const PiskostrumenevaOchystka = () => {
  return(
    <section>
      <div className="container">
        <h2>Піскоструменева очистка</h2>
        <div className={styles.inner}>
          <ul className={styles.list}>
            <li>
              очищення металевих поверхонь від іржі,  
            </li>
            <li>
              очищення бетону від бруду та зняття "цементного молочка",
            </li>
            <li>
              очищення цегли.
            </li>
          </ul>
          <div className={styles.img}>
            <Image src='/img/technologies/page/piskostrumeneva-ochystka/piskostrumeneva-ochystka-1.jpg' alt='Піскоструменева очистка' title='Піскоструменева очистка' width={580} height={400}/>
            <Image src='/img/technologies/page/piskostrumeneva-ochystka/piskostrumeneva-ochystka-2.jpg' alt='Піскоструменева очистка' title='Піскоструменева очистка' width={580} height={400}/>
          </div>
          <p>
            Технологія піскоструменевого очищення є необхідною підготовкою перед нанесенням наступних ремонтних та захисних шарів.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PiskostrumenevaOchystka