import Title from '@/app/[locale]/components/title/Title'
import styles from './Torkretuvannya.module.scss'
import { darvinaData } from '../../data'
import Image from 'next/image'

const Torkretuvannya = () => {
  const { torkretuvannya } = darvinaData
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Торкретування</Title>
        <div className={styles.wrapepr}>
          {torkretuvannya.map((img, index) => (
            <Image src={img} alt='Торкретування' width={550} height={650} key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Torkretuvannya