import Title from '@/app/[locale]/components/title/Title'
import styles from './FasadDo.module.scss'
import { darvinaData } from '../../data'
import Image from 'next/image'

const FasadDo = () => {
  const { fasaddo } = darvinaData
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Фасад до</Title>
        <div className={styles.wrapepr}>
          {fasaddo.map((img, index) => (
            <Image src={img} alt='Фасад до' width={550} height={450} key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FasadDo