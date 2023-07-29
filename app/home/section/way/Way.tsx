import WayCard from "@/card/WayCard/WayCard";
import styles from "./Way.module.scss";
import wayData from "@/data/wayData";

const Way = () => {
  return(
    <section className={styles.way}>
      <div className="container">
        <h2 className={styles.title}>Ваш шлях з нами</h2>
        <ul className={styles.list}>
          {wayData.map((card, index) => {
            return(
              <li key={index}>
                <WayCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  num={card.num}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Way;