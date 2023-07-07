import styles from './page.module.scss'
import TechnologiesCard from "@/card/TechnologiesCard/TechnologiesCard"
import TechnologiesData from "@/data/technologiesData";

const TechnoListCard = () => {
  const latestTechnologies = TechnologiesData.slice(-6);
  return(
    <section>
      <div className="container">
        <ul className={styles.list}>
          {latestTechnologies.map((item, index) => {
            return (
              <li key={index}>
                <TechnologiesCard
                  image={item.image}
                  imageWebp={item.image}
                  title={item.title}
                  link={item.link}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default TechnoListCard