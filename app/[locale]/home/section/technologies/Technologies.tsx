// 'use client';

// import { useState } from 'react';
// import styles from './Technologies.module.scss';
// import TechnologiesData from '@/data/technologiesData';
// import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';
// import Title from '@/app/[locale]/components/title/Title';

// interface TechnoProps {
//   title: string
//   btn: string
//   cardTitle: string[]
// }

// const Technologies = ({title, btn, cardTitle}: TechnoProps) => {
//   const [visibleCards, setVisibleCards] = useState(6);

//   const showMoreCards = () => {
//     setVisibleCards(prevVisibleCards => prevVisibleCards + 6);
//   };

//   return (
//     <section>
//       <div className="container">
//         <Title title={'line'}>{title}</Title>
//         <ul className={styles.list}>
//           {TechnologiesData.slice(0, visibleCards).map((card, index) => (
//             <li key={index}>
//               <TechnologiesCard
//                 image={card.image}
//                 title={cardTitle}
//                 link={card.link}
//               />
//             </li>
//           ))}
//         </ul>
//         {visibleCards < TechnologiesData.length && (
//           <div className={styles.showMoreButton}>
//             <button className='btn' onClick={showMoreCards}>{btn}</button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Technologies;

// 'use client';

// import { useState } from 'react';
import styles from './Technologies.module.scss';
import TechnologiesData from '@/data/technologiesData';
import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';
import Title from '@/app/[locale]/components/title/Title';
import { useTranslations } from 'next-intl';
interface TechnoProps {
  title: string
  btn: string
}

const Technologies = ({ title }: TechnoProps) => {
  const t = useTranslations('home.technologies');

  return (
    <section>
      <div className="container">
        <Title title={'line'}>{title}</Title>
        <ul className={styles.list}>
          {TechnologiesData.map((card, index) => (
            <li key={index}>
              <TechnologiesCard
                image={card.image}
                title={t(`items.${index}.title`)}
                link={card.link}
                btn={t('btn')}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Technologies;

