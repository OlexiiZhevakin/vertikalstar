import Image from 'next/image'
import styles from './color.module.scss'



const Color = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>96 відтінків кольорів</h2>
        <Image className={styles.img} src='/img/technologies/page/microcement/color/96-vidtinkiv-koloriv-1.jpg' alt='96 відтінків кольорів' title='96 відтінків кольорів' width={400} height={400}/>
        <Image className={styles.img} src='/img/technologies/page/microcement/color/96-vidtinkiv-koloriv-2.jpg' alt='96 відтінків кольорів' title='96 відтінків кольорів' width={400} height={558}/>
      </div>
    </section>
  )
}

export default Color