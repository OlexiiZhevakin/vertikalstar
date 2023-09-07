import TechnologiesCard from '@/card/TechnologiesCard/TechnologiesCard';
import styles from './Technologies.module.scss';
import TechnologiesData from '@/data/technologiesData';
import Form from '@/app/[locale]/components/form/Form';
import { Metadata } from "next";
import Title from '@/app/[locale]/components/title/Title';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/technologies/'),
  title: 'Технології',
  description: 'Технології компанії Вертикаль Будівельних Технологій. Відкрийте для себе різноманітність методів, що використовуються нашою компанією',
  openGraph: {
    images: ['/img/head-bg.webp']
  }
}

const Technologies = () => {
  const t = useTranslations('home.technologies');
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
                    title={t(`items.${index}.title`)}
                    link={card.link}
                    btn={t('btn')}
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