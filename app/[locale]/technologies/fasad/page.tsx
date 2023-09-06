import Form from "@/app/[locale]/components/form/Form"
import Head from "./section/head/Head"
import Picture from "./section/picture/Picture"
import Slider from "./section/slider/Slider"
import AfterBefore from "./section/after-before/AfterBefore"
import RestavratsiyaTsehly from "./section/restavratsiya-tsehly/RestavratsiyaTsehly"
import GidroizolyatsiyaPremykaniy from "./section/gidroizolyatsiya-premykaniy/GidroizolyatsiyaPremykaniy"
import Help from "@/app/[locale]/components/help/Help"
import Sova from "../hidroizolyatsiya/hidroizolyatsiya-metodom-inyektuvannya/section/sova/Sova"
import KhimichnaOchystka from "./section/khimichna-ochystka/KhimichnaOchystka"
import SkleyuvannyaTrishchyn from "./section/skleyuvannya-trishchyn/SkleyuvannyaTrishchyn"
import What from "./section/what/What"
import Hidrofikatsiya from "./section/konservatsiya-fasadu/KonservatsiyaFasadu"
import Pisok from "./section/piskostrumynne-ochyshchennya/Pisok"
import Descr from "./section/descr/Descr"
import ZapovnennyaShviv from "./section/zapovnennya-shviv/ZapovnennyaShviv"
import Advantage from "./section/advantage/Advantage"
import Object from "./section/object/Object"
import { Metadata } from "next";
import Way from "../../components/Way/Way"
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/technologies/fasad'),
  title: 'Реставрація цегляних фасадів',
  description: 'Послуга Реставрація цегляних фасадів від компанії Вертикаль Будівельних Технологій. Відкрийте для себе різноманітність методів, що використовуються нашою компанією',
  openGraph: {
    images: ['/img/technologies/page/fasad/head-bg.webp']
  }
}


const Fasad = () => {
  const t = useTranslations('fasad');
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
      <KhimichnaOchystka title={t('khimichna-ochystka.title')} />
      <Pisok title={t('pisok.title')} />
      <RestavratsiyaTsehly title={t('cegla.title')} />
      <ZapovnennyaShviv title={t('shvi.title')} />
      <SkleyuvannyaTrishchyn title={t('trishchina.title')} />
      <GidroizolyatsiyaPremykaniy title={t('gidroizolyatsiya.title')} />
      <Hidrofikatsiya title={t('konservatsiya.title')} content={t('konservatsiya.content')} />
      <Way/>
      <Form />
    </>
  )
}

export default Fasad