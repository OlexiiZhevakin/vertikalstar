import Form from "@/components/form/Form"
import Head from "./section/head/Head"
import Picture from "./section/picture/Picture"
import Slider from "./section/slider/Slider"
import AfterBefore from "./section/after-before/AfterBefore"
import OchyshchennyaPoverkhni from "./section/ochyshchennya-poverkhni-spetsialʹnoyu-pastoyu/OchyshchennyaPoverkhni"
import RestavratsiyaTsehly from "./section/restavratsiya-tsehly/RestavratsiyaTsehly"
import GidroizolyatsiyaPremykaniy from "./section/gidroizolyatsiya-premykaniy/GidroizolyatsiyaPremykaniy"
import Help from "@/components/help/Help"
import Sova from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/sova/Sova"
import Advantage from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/advantage/Advantage"
import Timeline from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/timeline/Timeline"
import KhimichnaOchystka from "./section/khimichna-ochystka/KhimichnaOchystka"
import PiskostrumynneOchyshchennya from "./section/piskostrumynne-ochyshchennya/PiskostrumynneOchyshchennya"
import SkleyuvannyaTrishchyn from "./section/skleyuvannya-trishchyn/SkleyuvannyaTrishchyn"
import Descr from "./section/descr/Descr"
import What from "./section/what/What"
import Hidrofikatsiya from "./section/hidrofikatsiya/Hidrofikatsiya"


const Fasad = () => {
  
  return(
    <>
    <Head/>
    <Picture/>
    <Slider/>
    <What/>
    {/* <OchyshchennyaPoverkhni/> */}
    <KhimichnaOchystka/>
    <PiskostrumynneOchyshchennya/>
    <RestavratsiyaTsehly/>
    <SkleyuvannyaTrishchyn/>
    <GidroizolyatsiyaPremykaniy/>
    <Hidrofikatsiya/>
    <Descr/>
    <Help/>
    <Sova/>
    <Advantage/>
    <Timeline/>
    <AfterBefore/>
    <Form/>
    </>
  )
}

export default Fasad