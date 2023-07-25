import ServicesCard from "@/card/ServicesCard/ServicesCard";
import ServiceData from "@/data/servicesData";
import styles from './services.module.scss'

const Services = () => {
  return(
    <section>
      <div className="container">
        <h2>Ми пропонуємо такі послуги:</h2>
        <ul className={styles.list}>
          {ServiceData.map((card, index) => {
            return(
              <li key={index}>
              <ServicesCard
                image={card.image}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            </li>
            )
          })}
        </ul>

        <p className={styles.text}>
          Якщо ви професійно пов’язані з будівництвом чи будуєте/ремонтуєте своє житло, ви обов’язково знайдете у нас багато корисного для себе. А ми готові вам в цьому допомогти.
        </p>

      </div>
    </section>
  )
}

export default Services