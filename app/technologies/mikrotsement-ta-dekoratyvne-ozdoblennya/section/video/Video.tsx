import Script from 'next/script'
import styles from './video.module.scss'


const Video = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>
          Приклад нанесення
        </h2>
        <video className={styles.video} src="/img/technologies/page/microcement/microcement.mp4" autoPlay muted playsInline loop></video>
      </div>
    </section>
  )
}

export default Video