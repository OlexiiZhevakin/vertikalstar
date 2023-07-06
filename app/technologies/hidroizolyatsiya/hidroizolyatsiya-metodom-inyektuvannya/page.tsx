import Form from "@/components/form/Form"
import Head from "./section/head/Head";
import Picture from "./section/picture/Picture";
import About from "./section/about/About";
import What from "./section/what/What";
import Grafic from "./section/grafic/Grafic";
import JoinTop from "./section/join-top/Join-top";
import Sova from "./section/sova/Sova";
import Real from "./section/real/Real";
import Advantage from "./section/advantage/Advantage";
import Timeline from "./section/timeline/Timeline";
import Problem from "./section/problem/Problem";
import Slider from "./section/slider/Slider";


const HsSmI = () => {
  return(
    <>
    <Head/>
    <Picture/>
    <Slider/>
    <About/>
    <What/>
    <Grafic/>
    <JoinTop/>
    <Sova/>
    <Real/>
    <Advantage/>
    <Timeline/>
    <Problem/>
    <Form/>
    </>
  )
}

export default HsSmI;