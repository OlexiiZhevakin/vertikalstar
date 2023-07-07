// 'use client'
// import { useEffect, useState } from "react";
// import Form from "@/components/form/Form";
// import styles from "./portfolio.module.scss";
// import Link from "next/link";
// import PortfolioCard from "@/card/PortfolioCard/PortfolioCard";

// const Portfolio = () => {
//   const [portfolioData, setPortfolioData] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://www.vertikalstar.com/portfolioData.json");
//         const data = await response.json();
//         setPortfolioData(data);
//       } catch (error) {
//         console.error("Error fetching portfolio data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       <section>
//         <div className="container">
//           {Object.entries(portfolioData).map(([year, card]) => (
//             <div className={styles.item} key={year}>
//               <h2>{year}</h2>
//               <ul className={styles.list}>
//                 {card.map((card: any) => (
//                   <li key={card.id}>
//                     <Link href="#">
//                       <PortfolioCard
//                         image={card.image}
//                         imageWebp={card.imageWebp}
//                         title={card.title}
//                         place={card.place}
//                       />
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Form />
//     </>
//   );
// };

// export default Portfolio;

'use client'

import { useEffect, useState } from "react";
import Form from "@/components/form/Form";
import styles from "./portfolio.module.scss";
import Link from "next/link";
import PortfolioCard from "@/card/PortfolioCard/PortfolioCard";

interface PortfolioDataItem {
  id: string;
  image: string;
  imageWebp: string;
  title: string;
  link: string;
  place: string;
  technologies: string[];
}

const Portfolio = () => {
  const [portfolioData, setPortfolioData] = useState<Record<string, PortfolioDataItem[]>>({});
  const [selectedTechnology, setSelectedTechnology] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/portfolioData.json");
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredYears = Object.entries(portfolioData)
    .filter(([_, cards]) =>
      selectedTechnology ? cards.some((item) => item.technologies.includes(selectedTechnology)) : true
    )
    .map(([year]) => year);

  return (
    <>
      <section>
        <div className="container">
          <select
            value={selectedTechnology}
            onChange={(e) => setSelectedTechnology(e.target.value)}
            className={styles.select}
          >
            <option value="">Всі технології</option>
            <option value="Гідроізоляція">Гідроізоляція</option>
            <option value="Мікроцемент та декоративне оздоблення">Мікроцемент та декоративне оздоблення</option>
            <option value="Утеплення та модернізація">Утеплення та модернізація</option>
            <option value="Очистка, реставрація та захист фасадів">Очистка, реставрація та захист фасадів</option>
            <option value="Промислові та декоративні підлоги">Промислові та декоративні підлоги</option>
            <option value="Добавки в бетони та розчини">Добавки в бетони та розчини</option>
            <option value="Піскоструминне очищення">Піскоструминне очищення</option>
            <option value="Склеювання тріщин">Склеювання тріщин</option>
            <option value="Посилення вуглецевими полотнами">Посилення вуглецевими полотнами</option>
            <option value="Торкетування">Торкетування</option>
            <option value="Ремонт бетону та залізобетону">Ремонт бетону та залізобетону</option>
          </select>
          {filteredYears.map((year: string) => (
            <div className={styles.item} key={year}>
              <h2>{year}</h2>
              <ul className={styles.list}>
                {portfolioData[year]
                  ?.filter((card) =>
                    selectedTechnology ? card.technologies.includes(selectedTechnology) : true
                  )
                  ?.map((card) => (
                    <li key={card.id}>
                      <Link href={card.link}>
                        <PortfolioCard
                          image={card.image}
                          imageWebp={card.imageWebp}
                          title={card.title}
                          place={card.place}
                        />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <Form />
    </>
  );
};

export default Portfolio;


