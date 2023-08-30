
import styles from './Services.module.scss';
import Form from '@/app/[locale]/components/form/Form';
import Title from '@/app/[locale]/components/title/Title';
import { Metadata } from "next";
import ServicesCards from '../components/ServicesCards/ServicesCards';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/services'),
  title: 'Послуги',
  description: 'Послуги компанії Вертикаль Будівельних Технологій. Відкрийте для себе різноманітність методів, що використовуються нашою компанією',
  openGraph: {
    images: ['/img/head-bg.webp']
  }
}

const Services = () => {
  const t = useTranslations('services');
  return (
    <>
      <section className={styles.container}>
        <div className="container">
          <Title title={'h1'}>{t('title')}</Title>
          <ServicesCards/>
        </div>
      </section>
      <Form />
    </>
  )
}

export default Services;