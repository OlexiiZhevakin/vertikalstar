import Form from "@/components/form/Form"
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
import Help from "@/components/help/Help";
import Way from "@/app/home/section/way/Way";


const HsSmI = () => {
  return(
    <>
    <Head/>
    <Picture/>
    <Slider/>
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