import Title from '@/app/[locale]/components/title/Title'
import styles from './Perekryttya.module.scss'
import { darvinaData } from '../../data'
import Image from 'next/image'

const Perekryttya = () => {
  const { perekryttya } = darvinaData
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Перекриття першого поверху</Title>
        <div className={styles.wrapper}>
        {perekryttya.map((img, index) => (
          <Image src={img} alt='' width={550} height={650} key={index}/>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Perekryttya