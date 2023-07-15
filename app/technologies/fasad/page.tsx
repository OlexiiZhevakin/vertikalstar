import Form from "@/components/form/Form"
import Head from "./section/head/Head"
import Picture from "./section/picture/Picture"
import Slider from "./section/slider/Slider"
import AfterBefore from "./section/after-before/AfterBefore"
import RestavratsiyaTsehly from "./section/restavratsiya-tsehly/RestavratsiyaTsehly"
import GidroizolyatsiyaPremykaniy from "./section/gidroizolyatsiya-premykaniy/GidroizolyatsiyaPremykaniy"
import Help from "@/components/help/Help"
import Sova from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/sova/Sova"
import Timeline from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/timeline/Timeline"
import KhimichnaOchystka from "./section/khimichna-ochystka/KhimichnaOchystka"
import SkleyuvannyaTrishchyn from "./section/skleyuvannya-trishchyn/SkleyuvannyaTrishchyn"
import What from "./section/what/What"
import Hidrofikatsiya from "./section/konservatsiya-fasadu/KonservatsiyaFasadu"
import Pisok from "./section/piskostrumynne-ochyshchennya/Pisok"
import Descr from "./section/descr/Descr"
import ZapovnennyaShviv from "./section/zapovnennya-shviv/ZapovnennyaShviv"
import Advantage from "./section/advantage/Advantage"
import Object from "./section/object/Object"


const Fasad = () => {

  return (
    <>
      <Head />
      <Picture />
      <Slider />
      <What />
      <Descr />
      <AfterBefore />
      <Help />
      <Sova />
      <Advantage />
      <Object/>
      <KhimichnaOchystka />
      <Pisok />
      <RestavratsiyaTsehly />
      <ZapovnennyaShviv />
      <SkleyuvannyaTrishchyn />
      <GidroizolyatsiyaPremykaniy />
      <Hidrofikatsiya />
      <Timeline />
      <Form />
    </>
  )
}

export default Fasad