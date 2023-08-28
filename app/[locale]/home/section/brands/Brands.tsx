

import styles from './Brand.module.scss'

import BrandCard from '@/card/BrandCard/BrandCard';
import Title from '@/app/[locale]/components/title/Title';
import BrandData from '@/data/brandData';
import { useTranslations } from 'next-intl';

const Brands = () => {
  const t = useTranslations('home');
  return(
    <section>
      <div className="container">
        <Title title={'line'}>{t('brands.title')}</Title>
        <ul className={styles.list}>
          {BrandData.map((card, index) => {
            return(
              <li key={index}>
                <BrandCard
                link={card.link}
                image={card.image}
                title={card.title}
                country={card.country}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Brands;