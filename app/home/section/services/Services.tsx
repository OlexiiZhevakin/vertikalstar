import ServicesCard from "@/card/ServicesCard/ServicesCard";
import ServiceData from "@/data/servicesData";
import styles from './Services.module.scss';

const Services = () => {
  return(
    <section>
      <div className="container">
        <h2 className={styles.title}>Наші послуги</h2>
        <ul className={styles.list}>
          {ServiceData.map((card, index) => {
            return(
              <li key={index}>
              <ServicesCard
                image={card.image}
                title={card.title}
                description={card.description}
                link={card.link}
                video={card.video}
              />
            </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Services;