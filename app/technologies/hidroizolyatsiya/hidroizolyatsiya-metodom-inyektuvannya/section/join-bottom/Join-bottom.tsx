import Link from 'next/link'
import styles from './join-bottom.module.scss'

const JoinBottom = () => {
  return(
    <div className={styles.join}>

       <div className="container">

         <div className={styles.inner}>

           <div>
             <h2>
               Замовити обстеження
             </h2>
             <p>
               вашого об'єкту.
             </p>
           </div>

           <Link className={styles.btn} href="tel:+380635640003">
             Зателефонуйте нам
           </Link>

         </div>
       </div>
     </div>
  )
}

export default JoinBottom