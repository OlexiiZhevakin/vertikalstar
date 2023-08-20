import Image from 'next/image'
import styles from './picture.module.scss'
import Title from '@/app/[locale]/components/title/Title'

const Picture = () => {
  return (
    <section>
      <div className="container">
        <Title title={'h2'}>Знайома картина?</Title>
        <p className={styles.descr}> 
          Старовинна будівля виконана з цегли з дуже гарним цегляним орнаментом, але протягом десятиліть фасад цієї будівлі став брудним, частково руйнується та втрачає свою первинну красу.
        </p>
        <div className={styles.inner}>
          <Image src='/img/technologies/page/fasad/darvina.jpg' alt='Дарвина' title='Дарвина' width={580} height={400}/>
          <Image src='/img/technologies/page/fasad/harkivska-horalnaya-sinagoga.jpg' alt='Харьківська Хоральна сінагога' title='Харьківська Хоральна сінагога' width={580} height={400}/>
        </div>
      </div>
    </section>
  )
}

export default Picture