import ServicesCard from "@/card/ServicesCard/ServicesCard";
import ServiceData from "@/data/servicesData";
import styles from './Services.module.scss';
import Title from "@/app/[locale]/components/title/Title";
import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('components.services');
  return (
    <section>
      <div className="container">
        <Title title={'line'}>{t('title')}</Title>
        <ul className={styles.list}>
          {ServiceData.map((card, index) => {
            return (
              <li key={index}>
                <ServicesCard
                  image={card.image}
                  title={t(`items.${index}.title`)}
                  description={t(`items.${index}.description`)}
                  link={card.link}
                  btn={t('btn')}
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


