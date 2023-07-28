'use client'
import styles from './page.module.scss'
import Image from 'next/image';
import { PortfolioPages } from '../data';

type Props = {
  params: {
    id: string
    title: string
  };
};


const PortfolioPage = ({ params: { id } }: Props) => {
  const portfolioPages = PortfolioPages
  const page = portfolioPages.find(obj => obj.id === id)
  return (
    <>
      {page ? (
        <section className={styles.container}>
          <div className="container">
            <h1 className={styles.title}>{page.title}</h1>
            <p className={styles.subtext}>
              Історія проекту
            </p>
            <h2 className={styles.subtitle}>
              {page.body}
            </h2>
            {page.descr && page.descr.map((p, index) => (
              <p className={styles.description} key={index}>
                {p}
              </p>
            ))}
            <div className={styles.img}>
              {page.images && page.images.map((img, index) => (
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
          </div>
        </section>
      ): (
          <div>Об'єкт не знайден</div>
      )}
    </>
    
  )
}

export default PortfolioPage