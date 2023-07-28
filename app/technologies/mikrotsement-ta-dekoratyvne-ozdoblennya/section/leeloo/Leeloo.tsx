import Image from 'next/image'
import styles from './Leeloo.module.scss'

const Leeloo = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <div className={styles.block}>
          <Image className={styles.img} src='/img/technologies/page/microcement/microcement.jpg' alt='Ми приготували для вас збірник прикладів застосування мікроцементу та покрокову технологію його нанесення' title='Ми приготували для вас збірник прикладів застосування мікроцементу та покрокову технологію його нанесення' width={500} height={500} />
          <div className={styles.content}>
            <p className={styles.text}>Ми підготували для вас збірник прикладів застосування мікроцементу та покрокову технологію його нанесення
            </p>
            <div className={styles.btn}>
              <Image src='/img/technologies/page/microcement/file-pdf-white.svg' alt='Іконка PDF' title='Іконка PDF' width={30} height={30}/>
              <a className='btn' href="https://wep.wf/yszr6o">Завантажити</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leeloo