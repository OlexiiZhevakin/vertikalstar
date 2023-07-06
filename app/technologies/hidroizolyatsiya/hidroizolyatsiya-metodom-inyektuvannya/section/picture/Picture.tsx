import styles from './picture.module.scss'

const Picture = () => {
  return(
    <div className={styles.picture}>
      <div className="container">
        <h2>Знайома картина?</h2>

        <div className={styles.inner}>
          <div className={styles.img}>
            <picture>
              <source type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/picture/plisnyava-na-stini.webp"
                title="Фотографія плісняви на стіні"/>
              <img src="/img/technologies/page/hidro/hssmi/plisnyava-​na-stini.jpg" alt="Фотографія плісняви на стіні" width="580" height="400"
                loading="lazy" title="Фотографія плісняви на стіні"/>
            </picture>
          </div>

          <div className={styles.img}>
            <picture>
              <source type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/picture/shpalery-yaki-vidstayut-vid-volohy.webp"
                title="Фотографія плісняви на стіні"/>
              <img src="/img/technologies/page/hidro/hssmi/picture/shpalery-yaki-vidstayut-vid-volohy.jpg" alt="Фотографія плісняви на стіні" width="580" height="400"
                loading="lazy" title="Фотографія плісняви на стіні"/>
            </picture>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Picture