

import styles from './Brand.module.scss'

import BrandCard from '@/card/BrandCard/BrandCard';
import BrandData from '@/data/brandData';
const Brands = () => {
  return(
    <section>
      <div className="container">
        <h2>Бренди з якими ми працюємо</h2>
        <ul className={styles.list}>
          {BrandData.map((card, index) => {
            return(
              <li key={index}>
                <BrandCard
                link={card.link}
                image={card.image}
                imageWebp={card.imageWebp}
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