import styles from './page.module.scss'
import TechnologiesCard from "@/card/TechnologiesCard/TechnologiesCard"
import TechnologiesData from "@/data/technologiesData";
import { useTranslations } from 'next-intl';

const TechnoListCard = () => {
  const t = useTranslations('home.technologies');
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
                  title={t(`items.${index}.title`)}
                  link={item.link}
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

export default TechnoListCard