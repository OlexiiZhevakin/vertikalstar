
import styles from './page.module.scss'
import Image from 'next/image';
import { PortfolioPages } from '../data';
import Sinagoga from '../sinagoga/page';
import Title from '@/app/[locale]/components/title/Title';
import GidroizolyatsiyaTerrasy from '../gidroizolyatsiya-terrasy-2023/page';
import Darvina from '../darvina-1999/page';


type Props = {
  params: {
    id: string
    title: string
  };
};

// async function getData() {
//   const res = await fetch('http://localhost:3000/json/portfolio.json')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

const PortfolioPage = async ({ params: { id } }: Props) => {
  const page = PortfolioPages.find((obj) => obj.id === id)
  if (id === "kharkivska-khoralna-synahoha-2003"){
    return <Sinagoga/>
  }
  if (id === "kharkivska-khoralna-synahoha-2003"){
    return <GidroizolyatsiyaTerrasy/>
  }
  if (id === "darvina-1999"){
    return <Darvina/>
  }
  return (
    <>
      {page ? (
        <section className={styles.container}>
          <div className="container">
            <Title title={'h1'}>{page.title}</Title>
            <p className={styles.subtext}>
              Історія проекту
            </p>
            <Title title={'left'}>{page.body}</Title>
            {page.descr && page.descr.map((p: string, index: number) => (
              <p className={styles.description} key={index}>
                {p}
              </p>
            ))}
            <div className={styles.img}>
              {page.images && page.images.map((img: string, index: number) => (
                <Image
                  src={img} 
                  alt={page.title} 
                  title={page.title} 
                  width={500}
                  height={400}
                  style={{ objectFit: "contain" }}
                  key={index}/>
              ))}
            </div>
            <div className={styles.video}>
              {page.video && page.video.map((video, index) => (
                <video className={styles.myVideo} width="400" height="auto" controls key={index} muted playsInline>
                  <source src={video} type="video/mp4"/>
                  Ваш браузер не підтримує тег відео.
                </video>
              ))}
            </div>
          </div>
        </section>
      ): (
          <div>Об'єкт не знайден</div>
      )}
    </>
    
  )
}

export default PortfolioPage