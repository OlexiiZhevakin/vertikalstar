
// 'use client'
// import { ChangeEvent, useState } from 'react'
// import styles from './portfolio.module.scss'
// import { PortfolioPages } from './data'
// import Link from 'next/link'
// import PortfolioCard from '@/card/PortfolioCard/PortfolioCard'
// import Select from '@/components/select/Select'
// import Title from '@/components/title/Title'

// type Data = {
//   [year: string]: typeof PortfolioPages;
// }

// const Portfolio = () => {
//   const [technology, setTechnology] = useState('')
//   const data: Data = {};
//   PortfolioPages.forEach(val => {
//     if (!data[val.year]) data[val.year] = [];
//     data[val.year].push(val);
//   });
//   return (
//     <section className={styles.container}>
//       <div className="container">
//         <Select onChange={(e: ChangeEvent<HTMLSelectElement>) => setTechnology(e.target.value)} />
//         {Object.entries(data).map(([year, cards]) => {
//           const filteredCards = cards.filter(card => !technology || card.technologies.includes(technology));
//           if (filteredCards.length === 0) return null;
//           return (
//             <div className={styles.item} key={year}>
//               <Title className={styles.year} title={'h2'}>{year}</Title>
//               <ul className={styles.list}>
//                 {filteredCards.map((card, index) => (
//                   <li key={index}>
//                     <Link href={`/portfolio/${card.id}`}>
//                       <PortfolioCard
//                         image={card.image}
//                         title={card.title}
//                         place={card.place}
//                       />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }

// export default Portfolio



'use client'
import { ChangeEvent, useState } from 'react'
import styles from './portfolio.module.scss'
import { PortfolioPages } from './data'
import Link from 'next/link'
import PortfolioCard from '@/card/PortfolioCard/PortfolioCard'
import Select from '@/components/select/Select'
import Title from '@/components/title/Title'

type Data = {
  [year: string]: typeof PortfolioPages;
}

const Portfolio = () => {
  const [technology, setTechnology] = useState('')
  const data: Data = {};
  PortfolioPages.forEach(val => {
    if (!data[val.year]) data[val.year] = [];
    data[val.year].push(val);
  })

  const years = Object.keys(data).sort((a, b) => {
    if (a === '1999-2009') return -1;
    if (b === '1999-2009') return 1;
    return a.localeCompare(b);
  });

  return (
    <section className={styles.container}>
      <div className="container">
        <Select onChange={(e: ChangeEvent<HTMLSelectElement>) => setTechnology(e.target.value)} />
        {years.map(year => {
          const cards = data[year];
          const filteredCards = cards.filter(card => !technology || card.technologies.includes(technology));
          if (filteredCards.length === 0) return null;
          return (
            <div className={styles.item} key={year}>
              <Title className={styles.year} title={'h2'}>{year}</Title>
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


