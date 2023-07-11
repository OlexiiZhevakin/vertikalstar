import Image from 'next/image'
import styles from './picture.module.scss'

const Picture = () => {
  return (
    <section>
      <div className="container">
        <h2>Знайома картина?</h2>
        <div className={styles.inner}>
          <Image src='/img/technologies/page/fasad/darvina.jpg' alt='Дарвина' title='Дарвина' width={580} height={400}/>
          <Image src='/img/technologies/page/fasad/harkivska-horalnaya-sinagoga.jpg' alt='Харьківська Хоральна сінагога' title='Харьківська Хоральна сінагога' width={580} height={400}/>
        </div>
      </div>
    </section>
  )
}

export default Picture