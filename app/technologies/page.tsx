import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';
import styles from './Technologies.module.scss';
import TechnologiesData from '@/data/technologiesData';
import Form from '@/components/form/Form';
import { Metadata } from "next";
import Title from '@/components/title/Title';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/technologies/'),
  title: 'Технології',
  description: 'Технології компанії Вертикаль Будівельних Технологій. Відкрийте для себе різноманітність методів, що використовуються нашою компанією',
  openGraph: {
    images: ['/img/head-bg.webp']
  }
}

const Technologies = () => {
  return (
    <>
      <section className={styles.technologies}>
        <div className="container">
          <Title title={'h1'}>Технології</Title>
          <p>
            Відкрийте для себе різноманітність методів, що використовуються нашою компанією
          </p>
          <ul className={styles.list}>
            {TechnologiesData.map((card, index) => {
              return (
                <li key={index}>
                  <TechnologiesCard
                    image={card.image}
                    title={card.title}
                    link={card.link}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      <Form />
    </>
  )
}

export default Technologies;