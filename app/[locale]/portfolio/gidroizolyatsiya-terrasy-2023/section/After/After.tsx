import Title from '@/app/[locale]/components/title/Title'
import styles from './After.module.scss'
import { data } from './data'
import Image from 'next/image'

const After = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'h2'}>Ми приступили до роботи</Title>
        <div className={styles.img}>
          {data.map((img, index) => (
            <Image src={img} alt='І так ми зробили' width={550} height={400} key={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default After