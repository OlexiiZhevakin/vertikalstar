import ServicesCard from "@/card/ServicesCard/ServicesCard";
import ServiceData from "@/data/servicesData";
import styles from './Services.module.scss';
import Title from "@/app/[locale]/components/title/Title";

const Services = () => {
  return(
    <section>
      <div className="container">
        <Title title={'line'}>Наші послуги</Title>
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
      </div>
    </section>
  )
}

export default Services;