import WayCard from "@/card/WayCard/WayCard";
import styles from "./Way.module.scss";
import wayData from "@/data/wayData";

const Way = () => {
  return(
    <section>
      <div className="container">
        <h2>Ваш шлях з нами</h2>
        <ul className={styles.list}>
          {wayData.map((card, index) => {
            return(
              <li key={index}>
                <WayCard
                  image={card.image}
                  imageWebp={card.imageWebp}
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