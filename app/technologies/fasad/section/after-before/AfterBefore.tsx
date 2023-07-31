import Image from 'next/image'
import styles from './afterbefore.module.scss'
import Title from '@/components/title/Title'

const AfterBefore = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>Було-стало</Title>
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