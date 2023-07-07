import Image from 'next/image'
import styles from './page.module.scss'

const PiskostrumenevaOchystka = () => {
  return(
    <section>
      <div className="container">
        <h2>Піскоструменева очистка</h2>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/technologies/page/piskostrumeneva-ochystka/piskostrumeneva-ochystka-1.jpg' alt='Піскоструменева очистка' title='Піскоструменева очистка' width={400} height={400}/>
            <Image src='/img/technologies/page/piskostrumeneva-ochystka/piskostrumeneva-ochystka-2.jpg' alt='Піскоструменева очистка' title='Піскоструменева очистка' width={400} height={400}/>
          </div>
          <p>
            
          </p>
        </div>
      </div>
    </section>
  )
}

export default PiskostrumenevaOchystka