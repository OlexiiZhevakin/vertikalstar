import Form from "@/app/[locale]/components/form/Form"
import Head from "./section/head/Head";
import Picture from "./section/picture/Picture";
import About from "./section/about/About";
import What from "./section/what/What";
import Grafic from "./section/grafic/Grafic";
import Sova from "./section/sova/Sova";
import Real from "./section/real/Real";
import Advantage from "./section/advantage/Advantage";
import Problem from "./section/problem/Problem";
import Slider from "./section/slider/Sliders";
import Help from "@/app/[locale]/components/help/Help";
import { useTranslations } from 'next-intl';
import Way from "@/app/[locale]/components/Way/Way";


const HsSmI = () => {
  const h = useTranslations('hidroizolyatsiya');
  return(
    <>
    <Head/>
    <Picture/>
    <Slider content={h('slider.content')} alt={h('slider.alt')}/>
    <About/>
    <What/>
    <Grafic/>
    <Help/>
    <Sova/>
    <Real/>
    <Advantage/>
    <Way/>
    <Problem/>
    <Form/>
    </>
  )
}

export default HsSmI;