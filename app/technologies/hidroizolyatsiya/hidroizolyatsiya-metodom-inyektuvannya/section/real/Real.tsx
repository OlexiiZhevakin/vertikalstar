import Title from '@/components/title/Title'
import styles from './real.module.scss'
import Image from 'next/image'

const Real = () => {
  return (
    <section className={styles.container}>
      <Title className={styles.title} title={'h2'}>Як це виглядає на реальних об'єктах?</Title>

      <div className={styles.items}>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/1.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах" width="490"
            height="400" title="Реальний об'єкт" />
        </div>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/2.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах"
            width="490" height="400" title="Реальний об'єкт" />
        </div>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/3.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах"
            width="490" height="400" title="Реальний об'єкт" />
        </div>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/4.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах"
            width="490" height="400" title="Реальний об'єкт" />
        </div>

        <div className={styles.item}>
          <Image src="/img/technologies/page/hidro/hssmi/block_real/5.jpg" alt="Фотографія на якій показано як це виглядає на реальних об'єктах"
            width="490" height="400" title="Реальний об'єкт" />
        </div>

      </div>

    </section>

  )
}

export default Real