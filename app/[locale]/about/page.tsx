
// import Services from './section/services/Services';
import Adaptationt from './section/adaptation/Adaptation';
import Head from './section/head/Head';
import Implement from './section/implement/Implement';
import Know from './section/know/Know';
import Look from './section/look/Look';
import Study from './section/study/Study';
import Teach from './section/teach/Teach';
import Form from '@/app/[locale]/components/form/Form';
import { Metadata } from "next";
import Way from '../components/Way/Way';
import Services from '../home/section/services/Services';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/about'),
  title: 'Про нас ',
  description: 'Інформація про компанію Вертикаль Будівельних Технологій. Відкрийте для себе різноманітність методів, що використовуються нашою компанією',
  openGraph: {
    images: ['/img/head-bg.webp']
  }
}



const About = () => {

  return(
    <>
      <Head/>
      <Know/>
      <Look/>
      <Study/>
      <Adaptationt/>
      <Teach/>
      <Implement/>
      <Services/>
      <Way/>
      <Form/>
    </>
  )
}

export default About;