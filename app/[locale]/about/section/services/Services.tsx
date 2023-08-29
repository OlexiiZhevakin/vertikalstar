import ServicesCard from "@/card/ServicesCard/ServicesCard";
import ServiceData from "@/data/servicesData";
import styles from './services.module.scss'
import Title from "@/app/[locale]/components/title/Title";
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('about');
  return(
    <section>
      <div className="container">
        <Title title={'h2'}>{t('services.title')}</Title>
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

        <p className={styles.text}>{t('services.content')}</p>

      </div>
    </section>
  )
}

export default Services