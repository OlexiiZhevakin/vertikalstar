import Title from '@/app/[locale]/components/title/Title'
import styles from './Before.module.scss'
import { data } from './data'
import Image from 'next/image'

const Before = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'left'}>Так виглидала тераса коли нас запросили до неї перший раз</Title>
        <div className={styles.img}>
          {data.map((img, index) => (
            <Image  src={img} alt='Так виглидала тераса коли нас запросили до неї перший раз' width={550} height={500} key={index}/>
          ))}
        </div>
        <video className={styles.video} src="/img/portfolio/2023/gidroizolyatsiya-terrasy/before/vyd-do-1.mp4" width={400} height={600} autoPlay muted></video>
      </div>
    </section>
  )
}

export default Before