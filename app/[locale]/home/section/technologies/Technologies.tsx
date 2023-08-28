'use client';

import { useState } from 'react';
import styles from './Technologies.module.scss';
import TechnologiesData from '@/data/technologiesData';
import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';
import Title from '@/app/[locale]/components/title/Title';

interface TechnoProps {
  title: string
  btn: string
}

const Technologies = ({title, btn}: TechnoProps) => {
  const [visibleCards, setVisibleCards] = useState(6);

  const showMoreCards = () => {
    setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
  };

  return (
    <section>
      <div className="container">
        <Title title={'line'}>{title}</Title>
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
            <button className='btn' onClick={showMoreCards}>{btn}</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Technologies;

// import styles from './Technologies.module.scss';
// import TechnologiesData from '@/data/technologiesData';
// import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';
// import Title from '@/app/[locale]/components/title/Title';

// const Technologies = () => {

//   return (
//     <section>
//       <div className="container">
//         <Title title={'line'}>Технології</Title>
//         <ul className={styles.list}>
//           {TechnologiesData.map((card, index) => (
//             <li key={index}>
//               <TechnologiesCard
//                 image={card.image}
//                 title={card.title}
//                 link={card.link}
//               />
//             </li>
//           ))}
//         </ul>

//       </div>
//     </section>
//   );
// };

// export default Technologies;
