import styles from './Head.module.scss';

const Head = () => {
  return(
    <section className={styles.head}>
      <div className="container">
        <h1>Контакти</h1>
        <p>
          Зв'яжіться з нами, щоб отримати більш детальну інформацію про наші послуги та проекти
        </p>
      </div>
    </section>
  )
}

export default Head;