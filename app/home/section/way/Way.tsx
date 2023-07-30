import WayCard from "@/card/WayCard/WayCard";
import styles from "./Way.module.scss";
import wayData from "@/data/wayData";
import Title from "@/components/title/Title";

const Way = () => {
  return(
    <section className={styles.way}>
      <div className="container">
        <Title title={'h2'}>Ваш шлях з нами</Title>
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