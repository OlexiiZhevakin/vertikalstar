'use client';

import { useState } from 'react';
import styles from './Technologies.module.scss';
import TechnologiesData from '@/data/technologiesData';
import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';

const Technologies = () => {
  const [visibleCards, setVisibleCards] = useState(6);

  const showMoreCards = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
  };

  return (
    <section>
      <div className="container">
        <h2 className={styles.title}>Технології</h2>
        <ul className={styles.list}>
          {TechnologiesData.slice(0, visibleCards).map((card, index) => (
            <li key={index}>
              <TechnologiesCard
                image={card.image}
                title={card.title}
                link={card.link}
              />
            </li>
          ))}
        </ul>
        {visibleCards < TechnologiesData.length && (
          <div className={styles.showMoreButton}>
            <button className='btn' onClick={showMoreCards}>Показати ще</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;
