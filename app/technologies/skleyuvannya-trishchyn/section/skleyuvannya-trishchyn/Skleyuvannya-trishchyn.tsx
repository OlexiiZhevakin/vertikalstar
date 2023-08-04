import Image from 'next/image'
import styles from './page.module.scss'
import Title from '@/components/title/Title'

const SkleyuvannyTtrishchyn = () => {
  return(
    <section className={styles.container}>
      <div className="container">
        <Title title={'line'}>Склеювання тріщин</Title>
        <div className={styles.inner}>
          <div className={styles.img}>
            <Image src='/img/technologies/page/torkretuvannya/skleyuvannya-trishchyn-1.jpg' alt='Склеювання тріщин' title='Склеювання тріщин' width={580} height={400}/>
            <Image src='/img/technologies/page/torkretuvannya/skleyuvannya-trishchyn-2.jpg' alt='Склеювання тріщин' title='Склеювання тріщин' width={580} height={400}/>
          </div>
          <p className={styles.descr}>
            За рахунок нагнітання в тріщину складів, що склеюють під тиском, матеріал проникає у всі дрібні тріщинки, пори і капіляри. Таким чином, ми склеюємо не тільки саму тріщину, а й ореол стіни навколо неї. Доповненням до цієї технології служить система вклеєних спіральних анкерів, які ніби "зшивають" стіну в її товщині.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SkleyuvannyTtrishchyn