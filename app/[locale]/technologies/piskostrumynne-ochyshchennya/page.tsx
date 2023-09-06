import Form from "@/app/[locale]/components/form/Form"
import Head from "./section/head/Head"
import Info from "./section/info/Info"
import Pisok from "../fasad/section/piskostrumynne-ochyshchennya/Pisok"
import { useTranslations } from 'next-intl';



const PiskostrumynneOchyshchennya = () => {
  const t = useTranslations('fasad');
  return(
    <>
      <Head/>
      <Info/>
      <Pisok title={t('pisok.title')} />
      <Form/>
    </>
  )
}

export default PiskostrumynneOchyshchennya