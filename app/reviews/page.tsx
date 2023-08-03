
import Link from "next/link"
import styles from './page.module.scss'
import { reviewdata } from "./data"
import Title from "@/components/title/Title"

const Reviews = () => {
  return (
    <>
      <section className={styles.container}>
        <div className="container">
          <Title title={'h1'}>Відгуки про нас</Title>
          <ul>
            {reviewdata.map((item, index) => {
              return (
                <li className={styles.item} key={index}>
                  <div className={styles.info}>
                    <p className={styles.author}>{item.title}</p>
                    <p className={styles.descr}>{item.description}</p>
                  </div>
                  <Link className="btn" href={`/reviews/${item.id}`}>Докладніше</Link>
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