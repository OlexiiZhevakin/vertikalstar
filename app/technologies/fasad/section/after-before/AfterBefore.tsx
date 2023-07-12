import Image from 'next/image'
import styles from './afterbefore.module.scss'

const AfterBefore = () => {
  return (
    <section>
      <div className="container">
        <Image src='/img/technologies/page/fasad/after-before/fasad-1.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={280} height={420} />
        <Image src='/img/technologies/page/fasad/after-before/fasad-2.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
        <Image src='/img/technologies/page/fasad/after-before/fasad-3.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
        <Image src='/img/technologies/page/fasad/after-before/fasad-4.jpg' alt='ехнологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={280} height={420} />
        <Image src='/img/technologies/page/fasad/after-before/fasad-9.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />

        <Image src='/img/technologies/page/fasad/after-before/fasad-13.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
        <h2 className={styles.title}>Було-стало</h2>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/technologies/page/fasad/after-before/fasad-5.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
            <Image src='/img/technologies/page/fasad/after-before/fasad-6.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
          </div>
          <div className={styles.img}>
            <Image src='/img/technologies/page/fasad/after-before/fasad-7.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
            <Image src='/img/technologies/page/fasad/after-before/fasad-8.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
          </div>
          <div className={styles.img}>
            <Image src='/img/technologies/page/fasad/after-before/fasad-11.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
            <Image src='/img/technologies/page/fasad/after-before/fasad-12.jpg' alt='Технологія очищеня, реставрації та консервації цегляних фасадів' title='ехнологія очищеня, реставрації та консервації цегляних фасадів' width={570} height={420} />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AfterBefore