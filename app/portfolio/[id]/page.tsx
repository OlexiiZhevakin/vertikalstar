
import styles from './page.module.scss'
import Image from 'next/image';
import { PortfolioPages } from '../data';
import Sinagoga from '../sinagoga/page';
import Title from '@/components/title/Title';


type Props = {
  params: {
    id: string
    title: string
  };
};


const PortfolioPage = ({ params: { id } }: Props) => {
  const portfolioPages = PortfolioPages
  const page = portfolioPages.find(obj => obj.id === id)
  if (id === "kharkivska-khoralna-synahoha-2003"){
    return <Sinagoga/>
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
            <Title title={'h2'}>{page.body}</Title>
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