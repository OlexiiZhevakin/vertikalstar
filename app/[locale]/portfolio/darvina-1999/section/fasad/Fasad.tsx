import Title from '@/app/[locale]/components/title/Title'
import styles from './fasad.module.scss'
import { darvinaData } from '../../data'
import Image from 'next/image'

const Fasad = () => {
  const { fasad } = darvinaData
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Фасад</Title>
        <div className={styles.wrapper}>
          {fasad.map((img, index) => (
            <Image src={img} alt='Фасад' width={550} height={650} key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fasad