import styles from './real.module.scss'

const Real = () => {
  return (
    <section className={styles.container}>

      <h2 className={styles.title}>
        Як це виглядає на реальних об'єктах?
      </h2>

      <div className={styles.items}>

        <div className={styles.item}>
          <picture>
            <source type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/block_real/1.webp" title="Реальний об'єкт" />
            <img src="/img/technologies/page/hidro/hssmi/block_real/1.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах" width="490"
              height="400" loading="lazy" title="Реальний об'єкт" />
          </picture>
        </div>

        <div className={styles.item}>
          <picture>
            <source type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/block_real/2.webp" title="Реальний об'єкт" />
            <img src="/img/technologies/page/hidro/hssmi/block_real/2.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах"
              width="490" height="400" loading="lazy" title="Реальний об'єкт" />
          </picture>
        </div>

        <div className={styles.item}>
          <picture>
            <source media="(min-width: 768px)" type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/block_real/3.webp" title="Реальний об'єкт" />
            <img src="/img/technologies/page/hidro/hssmi/block_real/3.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах"
              width="490" height="400" loading="lazy" title="Реальний об'єкт" />
          </picture>
        </div>

        <div className={styles.item}>
          <picture>
            <source media="(min-width: 768px)" type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/block_real/4.webp" title="Реальний об'єкт" />
            <img src="/img/technologies/page/hidro/hssmi/block_real/4.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах"
              width="490" height="400" loading="lazy" title="Реальний об'єкт" />
          </picture>
        </div>

        <div className={styles.item}>
          <picture>
            <source media="(min-width: 768px)" type="image/webp" srcSet="/img/technologies/page/hidro/hssmi/block_real/5.webp" title="Реальний об'єкт" />
            <img src="/img/technologies/page/hidro/hssmi/block_real/5.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах"
              width="490" height="400" loading="lazy" title="Реальний об'єкт" />
          </picture>
        </div>

      </div>

    </section>

  )
}

export default Real