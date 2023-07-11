import styles from './picture.module.scss'

const Picture = () => {
  return(
    <section className={styles.picture}>
      <div className="container">
        {/* <h2>Знайома картина?</h2> */}

        <div className={styles.inner}>
          <video src="/img/technologies/page/torkretuvannya/torkretuvannya.mp4" muted autoPlay width={1200}></video>
        </div>
      </div>
    </section>
  )
}

export default Picture