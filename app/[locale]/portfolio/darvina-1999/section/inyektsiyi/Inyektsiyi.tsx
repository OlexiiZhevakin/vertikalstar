import Title from '@/app/[locale]/components/title/Title'
import styles from './Inyektsiyi.module.scss'
import { darvinaData } from '../../data'
import Image from 'next/image'


const Inyektsiyi = () => {
  const { inyektsiyi } = darvinaData;
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Ін'єкції-склеювання тріщин</Title>
        <div className={styles.wrapper}>
          {inyektsiyi.map((img: string, index: number) => (
            <Image src={img} alt="Ін'єкції-склеювання тріщин" width={450} height={550} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Inyektsiyi
