import ServicesCard from '@/card/ServicesCard/ServicesCard';
import styles from './Services.module.scss';
import ServiceData from '@/data/servicesData';
import Form from '@/app/[locale]/components/form/Form';
import Title from '@/app/[locale]/components/title/Title';
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/services'),
  title: 'Послуги',
  description: 'Послуги компанії Вертикаль Будівельних Технологій. Відкрийте для себе різноманітність методів, що використовуються нашою компанією',
  openGraph: {
    images: ['/img/head-bg.webp']
  }
}

const Services = () => {
  return (
    <>
      <section className={styles.container}>
        <div className="container">
          <Title title={'h1'}>Наші послуги</Title>
          <ul className={styles.list}>
            {ServiceData.map((card, index) => {
              return (
                <li key={index}>
                  <ServicesCard
                    image={card.image}
                    title={card.title}
                    description={card.description}
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

export default Services;