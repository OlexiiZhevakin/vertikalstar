import Form from "@/components/form/Form"
import Head from "./section/head/Head"
import Picture from "./section/picture/Picture"
import Slider from "./section/slider/Slider"
import AfterBefore from "./section/after-before/AfterBefore"
import OchyshchennyaPoverkhni from "./section/ochyshchennya-poverkhni-spetsialʹnoyu-pastoyu/OchyshchennyaPoverkhni"
import RestavratsiyaTsehly from "./section/restavratsiya-tsehly/RestavratsiyaTsehly"
import GidroizolyatsiyaPremykaniy from "./section/gidroizolyatsiya-premykaniy/GidroizolyatsiyaPremykaniy"


const Fasad = () => {
  return(
    <>
    <Head/>
    <Picture/>
    <Slider/>
    <OchyshchennyaPoverkhni/>
    <RestavratsiyaTsehly/>
    <GidroizolyatsiyaPremykaniy/>
    <AfterBefore/>
    <Form/>
    </>
  )
}

export default Fasad