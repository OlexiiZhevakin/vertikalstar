import AboutUs from "./section/about-us/About-us";
import About from "./section/about/About";
import Head from "./section/head/Head";
import Services from "./section/services/Services";
import Brands from "./section/brands/Brands";
import Reviews from "./section/reviews/Reviews";
import Form from "@/app/[locale]/components/form/Form";
import Blog from "./section/blog/Blog";
import Youtube from "./section/youtube/Youtube";
import Objects from "./section/objects/Objects";
import Technologies from "./section/technologies/Technologies";
import Way from "../components/Way/Way";
import { useTranslations } from 'next-intl';


const HomePage = () => {
  const t = useTranslations('home');
  return (
    <>
      <Head />
      <Services />
      <About />
      <AboutUs />
      <Technologies
        title={t('technologies.title')}
        btn={t('technologies.btn')} />
      <Objects
        title={t('objects.title')} />
      <Brands />
      <Way />
      <Reviews
        title={t('reviews.title')} />
      <Form />
      <Blog />
      <Youtube />
    </>
  )
}

export default HomePage;
