import Image from 'next/image'
import styles from './microcementCard.module.scss'

type Props = {
  img: string
  body: string
}


const MicrocementCard = ({img, body}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.descr}>{body}</div>
      <Image
        className={styles.img}
        src={img}
        alt='Технологія нанесення'
        title='Технологія нанесення'
        width={550}
        height={530}
        priority />
    </div>
  )
}

export default MicrocementCard