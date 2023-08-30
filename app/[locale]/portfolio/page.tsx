// 'use client'
// import { ChangeEvent, useState } from 'react'
// import styles from './portfolio.module.scss'
// import { PortfolioPages } from './data'
// import Link from 'next-intl/link'
// import PortfolioCard from '@/card/PortfolioCard/PortfolioCard'
// import Select from '@/app/[locale]/components/select/Select'
// import Title from '@/app/[locale]/components/title/Title'
// import SmoothScroll from '../components/SmoothScroll/SmoothScroll'


// type Data = {
//   [year: string]: typeof PortfolioPages;
// }

// const Portfolio = () => {
//   const [technology, setTechnology] = useState('')
//   const data: Data = {};
//   PortfolioPages.forEach(val => {
//     if (!data[val.year]) data[val.year] = [];
//     data[val.year].push(val);
//   })

//   const years = Object.keys(data).sort((a, b) => {
//     if (a === '1999-2009') return -1;
//     if (b === '1999-2009') return 1;
//     return a.localeCompare(b);
//   });

//   return (
//     <>
//       <div id="top"></div>
//       <section className={styles.container}>
//         <SmoothScroll />
//         <div className="container">
//           <Select onChange={(e: ChangeEvent<HTMLSelectElement>) => setTechnology(e.target.value)} />
//           {years.map(year => {
//             const cards = data[year];
//             const filteredCards = cards.filter(card => !technology || card.technologies.includes(technology));
//             if (filteredCards.length === 0) return null;
//             return (
//               <div className={styles.item} key={year}>
//                 <Title className={styles.year} title={'h2'}>{year}</Title>
//                 <ul className={styles.list}>
//                   {filteredCards.map((card, index) => (
//                     <li key={index}>
//                       <Link href={`/portfolio/${card.id}`}>
//                         <PortfolioCard
//                           image={card.image}
//                           title={card.title}
//                           place={card.place}
//                         />
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           })}
//           <div id="bottom"></div> {/* Добавьте элемент с идентификатором #bottom */}
//         </div>
//       </section>
//     </>
//   )
// }

// export default Portfolio

'use client'
import { ChangeEvent, useEffect, useState } from 'react'
import styles from './portfolio.module.scss'
import { PortfolioPages } from './data'
import Link from 'next-intl/link'
import PortfolioCard from '@/card/PortfolioCard/PortfolioCard'
import Select from '@/app/[locale]/components/select/Select'
import Title from '@/app/[locale]/components/title/Title'
import SmoothScroll from '../components/SmoothScroll/SmoothScroll'


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

  // Используйте эффект для загрузки значения технологии из локального хранилища
  useEffect(() => {
    const storedTechnology = localStorage.getItem('technology');
    if (storedTechnology) {
      setTechnology(storedTechnology);
    }
  }, []);

  // Обработчик изменения селекта
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTechnology(value);
    localStorage.setItem('technology', value); // Сохраните значение технологии в локальном хранилище
  }

  return (
    <>
      <div id="top"></div>
      <section className={styles.container}>
        <SmoothScroll />
        <div className="container">
          <Select onChange={handleSelectChange} value={technology} />
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
          <div id="bottom"></div> {/* Добавьте элемент с идентификатором #bottom */}
        </div>
      </section>
    </>
  )
}

export default Portfolio

