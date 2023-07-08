import Image from 'next/image'
import styles from './info.module.scss'

const Info = () => {
  return(
    <section>
      <div className="container">
        <div className={styles.inner}>
          <p>
            Бетон, що відшаровується, необхідно збити. Бетон, що залишився, і арматуру очистити. Арматуру обробити антикорозійними складами, що зчіплюють. І після цього виконати відновлення бетонних елементів ремонтними розчинами, що по міцності не поступаються міцності конструкції, що ремонтується.  
          </p>
          <div className={styles.img}>
            <Image src='/img/technologies/page/remont-betonu-ta-zalizobetonu/remont-betonu-ta-zalizobetonu-1.jpg' alt='Ремонт бетону та залізобетону' title='Ремонт бетону та залізобетону' width={580} height={400}/>
            <Image src='/img/technologies/page/remont-betonu-ta-zalizobetonu/remont-betonu-ta-zalizobetonu-2.jpg' alt='Ремонт бетону та залізобетону' title='Ремонт бетону та залізобетону' width={580} height={400}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info