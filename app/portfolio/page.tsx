
'use client'
import { ChangeEvent, useState } from 'react'
import styles from './portfolio.module.scss'
import { PortfolioPages } from './data'
import Link from 'next/link'
import PortfolioCard from '@/card/PortfolioCard/PortfolioCard'
import Select from '@/components/select/Select'

type Data = {
  [year: number]: typeof PortfolioPages;
}

const Portfolio = () => {
  const [technology, setTechnology] = useState('')
  const data: Data = {};
  PortfolioPages.forEach(val => {
    if (!data[val.year]) data[val.year] = [];
    data[val.year].push(val);
  });
  return (
    <section className={styles.container}>
      <div className="container">
        <Select onChange={(e: ChangeEvent<HTMLSelectElement>) => setTechnology(e.target.value)} />
        {Object.entries(data).map(([year, cards]) => {
          const filteredCards = cards.filter(card => !technology || card.technologies.includes(technology));
          if (filteredCards.length === 0) return null;
          return (
            <div className={styles.item} key={year}>
              <h2 className={styles.year}>{year}</h2>
              <ul className={styles.list}>
                {filteredCards.map((card, index) => (
                  <li key={index}>
                    <Link href={`/portfolio/${card.id}`}>
                      <PortfolioCard
                        image={card.image}
                        title={card.title}
                        place={card.place}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio


