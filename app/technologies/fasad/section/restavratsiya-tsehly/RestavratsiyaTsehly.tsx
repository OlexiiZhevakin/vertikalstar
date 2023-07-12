import Image from 'next/image'
import styles from './restavratsiya-tsehly.module.scss'


const RestavratsiyaTsehly = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>
          Реставрація цегли
        </h2>
        <div className={styles.inner}>
          <Image src='/img/technologies/page/fasad/restavratsiya-tsehly/restavratsiya-tsehly-1.jpg' alt='Реставрація цегли' title='Реставрація цегли' width={570} height={420}/>
          <Image src='/img/technologies/page/fasad/restavratsiya-tsehly/restavratsiya-tsehly-2.jpg' alt='Реставрація цегли' title='Реставрація цегли' width={570} height={420}/>
          <Image src='/img/technologies/page/fasad/restavratsiya-tsehly/restavratsiya-tsehly-3.jpg' alt='Реставрація цегли' title='Реставрація цегли' width={570} height={420}/>
          <Image src='/img/technologies/page/fasad/restavratsiya-tsehly/restavratsiya-tsehly-4.jpg' alt='Реставрація цегли' title='Реставрація цегли' width={570} height={420}/>
        </div>
      </div>
    </section>
  )
}

export default RestavratsiyaTsehly