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
            <p className={styles.description}>
              {page.descr}
            </p>
          </div>
        </section>
      ): (
          <div>Об'єкт не знайден</div>
      )}
    </>
    
  )
}

export default PortfolioPage