

import styles from './Brand.module.scss'

import BrandCard from '@/card/BrandCard/BrandCard';
import Title from '@/components/title/Title';
import BrandData from '@/data/brandData';
const Brands = () => {
  return(
    <section>
      <div className="container">
        <Title title={'line'}>Бренди з якими ми працюємо</Title>
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