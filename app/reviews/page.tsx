import ReviewData from "@/data/reviewdata"
import Link from "next/link"
import styles from './reviews.module.scss'

const Reviews = () => {
  return(
    <>
    <section>
      <div className="container">
        <h1>Відгуки про нас</h1>
        <ul>
          {ReviewData.map((item, index) => {
            return(
              <li className={styles.item} key={index}>
                <div className={styles.info}>
                  <p className={styles.author}>{item.author}</p>
                  <p className={styles.descr}>{item.description}</p>
                </div>
                <Link className="btn" href={item.link}>Докладніше</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
    </>
  )
}

export default Reviews