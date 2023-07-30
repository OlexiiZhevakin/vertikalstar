
import styles from './video.module.scss'
import Title from '@/components/title/Title'


const Video = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={"line"}>Приклад нанесення</Title>
        <video className={styles.video} src="/img/technologies/page/microcement/microcement.mp4" autoPlay muted playsInline loop></video>
      </div>
    </section>
  )
}

export default Video