
import Advantage from './section/advantage/Advantage'
import Color from './section/color/Color'
import HeaderPage from './section/header/Head'
import Help from './section/help/Help'
import Materialy from './section/materialy/Materialy'
import Pryklady from './section/pryklady/Pryklady'
import Technologiya from './section/technologiya/Technologiya'
import Video from './section/video/Video'
import World from './section/world/World'
import Leeloo from './section/leeloo/Leeloo'
import { Metadata } from "next";
import Form from '@/app/[locale]/components/form/Form'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vertikalstar.com/technologies/mikrotsement-ta-dekoratyvne-ozdoblennya'),
  title: 'Мікроцемент та декоративне оздоблення',
  description: "Послуга Мікроцемент та декоративне оздоблення від компанії Вертикаль Будівельних Технологій. Мікроцемент це комплекс оздоблювальних матеріалів, за допомогою яких можна створювати унікальні інтер'єри у тому числі в стилі Loft.",
  openGraph: {
    images: ['/img/technologies/page/microcement/head-bg.webp']
  }
}

const Microcement = () => {

  return (
    <>
      <HeaderPage />
      <Pryklady />
      <Video />
      <Technologiya />
      <Advantage />
      <Color />
      <Leeloo/>
      <Materialy />
      <World />
      <Help />
      <Form/>
    </>
  )
}

export default Microcement

