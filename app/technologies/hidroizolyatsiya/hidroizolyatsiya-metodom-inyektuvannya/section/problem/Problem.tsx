import styles from './problem.module.scss'

const Problem = () => {
  return (
    <section className={styles.container}>

      <div className="container">

        <div className={styles.item}>

          <div className={styles.img}>
            <picture>
              <source type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/block_about/shlyakhi-pidyomu-volohy.webp" title="" />
              <img src="/img/technologies/page/hidro/hssmi/block_about/shlyakhi-pidyomu-volohy.jpg" alt="На цьому фото показано шляхи підйому вологи"
                width="600" height="500" loading="lazy"
                title="Шляхи підйому вологи" />
            </picture>
          </div>

          <div className={styles.info}>
            <h3 className={styles.title}>
              Це точно вирішить проблему?
            </h3>
            <div className={styles.text}>
              <p>
                Ні, не точно. Оскільки волога може проникати в приміщення щонайменше чотирма різними шляхами (позначено
                стрілками на кресленні).
              </p>
              <p>
                Тому, щоб уникнути помилки та надмірних витрат, необхідно провести обстеження та точно визначити, з
                яким
                із шляхів ми маємо справу на конкретному об'єкті.
              </p>
              <p>
                Ви можете звернутися до наших фахівців, надіслати фото / відео вашої ситуації, і ми професійно
                визначимо
                суть проблеми та запропонуємо технологію її вирішення.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Problem