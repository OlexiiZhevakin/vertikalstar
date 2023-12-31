
import styles from './help.module.scss'

const Help = () => {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <p className={styles.text}>
              Задати питання та купити матеріали ви можете зв'язавшись із нашим менеджером
            </p>
          </div>
          <a className={styles.btn} href="tel:+380675713308">
            Зателефонуйте нам
          </a>
        </div>
      </div>
    </div>
  )
}

export default Help