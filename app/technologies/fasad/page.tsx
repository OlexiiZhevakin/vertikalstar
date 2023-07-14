import Form from "@/components/form/Form"
import Head from "./section/head/Head"
import Picture from "./section/picture/Picture"
import Slider from "./section/slider/Slider"
import AfterBefore from "./section/after-before/AfterBefore"
import RestavratsiyaTsehly from "./section/restavratsiya-tsehly/RestavratsiyaTsehly"
import GidroizolyatsiyaPremykaniy from "./section/gidroizolyatsiya-premykaniy/GidroizolyatsiyaPremykaniy"
import Help from "@/components/help/Help"
import Sova from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/sova/Sova"
import Advantage from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/advantage/Advantage"
import Timeline from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/timeline/Timeline"
import KhimichnaOchystka from "./section/khimichna-ochystka/KhimichnaOchystka"
import SkleyuvannyaTrishchyn from "./section/skleyuvannya-trishchyn/SkleyuvannyaTrishchyn"
import What from "./section/what/What"
import Hidrofikatsiya from "./section/konservatsiya-fasadu/KonservatsiyaFasadu"
import Pisok from "./section/piskostrumynne-ochyshchennya/Pisok"
import Descr from "./section/descr/Descr"
import ZapovnennyaShviv from "./section/zapovnennya-shviv/ZapovnennyaShviv"


const Fasad = () => {
  
  return(
    <>
    <Head/>
    <Picture/>
    <Slider/>
    <What/>
    <KhimichnaOchystka/>
    <Pisok/>
    <RestavratsiyaTsehly/>
    <ZapovnennyaShviv/>
    <SkleyuvannyaTrishchyn/>
    <GidroizolyatsiyaPremykaniy/>
    <Hidrofikatsiya/>
    <Descr/>
    <AfterBefore />
    <Help/>
    <Sova/>
    <Advantage/>
    <Timeline/>
    <Help/>
    </>
  )
}

export default Fasad