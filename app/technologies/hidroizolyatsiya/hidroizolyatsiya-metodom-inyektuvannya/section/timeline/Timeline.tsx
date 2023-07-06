import Link from 'next/link'
import styles from './timeline.module.scss'

const Timeline = () => {
  return(
    <section className={styles.timeline}>
       <div className="container">
         <h2>
           Як ми працюємо?
         </h2>

         <div>
           <ul className={styles.list}>
             <li>
               <div className={styles.pulse}>
                 <Link href="#">
                   <h3>Ви залишаєте заявку</h3>
                   <p>Можете нам відправити фото, відео свого об'єкту.</p>
                 </Link>
               </div>
             </li>
             <li>
               <div>
                 <h3>З вами зв'язується наш спеціаліст</h3>
                 <p>
                   Ми розробляємо технологію для вирішення вашого завдання та розраховуємо кошторис на виконання робіт.
                 </p>
               </div>
             </li>
             <li>
               <div>
                 <h3>Проведення робіт</h3>
                 <p>
                   Після узгодження кошторису ми
                   виконуємо роботи згідно з
                   розробленою технологією та усіма діючими нормативами.
                 </p>
               </div>
             </li>
             <li>
               <div>
                 <h3>Здача робіт</h3>
                 <p>
                   Закінчення робіт, підписання акту
                   виконаних робіт.
                 </p>
               </div>
             </li>
           </ul>
         </div>
       </div>
     </section>
  )
}

export default Timeline