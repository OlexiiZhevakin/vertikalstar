import Form from '@/components/form/Form'
import Head from './section/head/Head'
import Picture from './section/picture/Picture'
import TechnoListCard from './section/techno-list-card/TechnoListCard'
import PiskostrumenevaOchystka from './section/piskostrumeneva-ochystka/PiskostrumenevaOchystka'

const Rekonstruktsiya = () => {

  return (
    <>
      <Head />
      <Picture />
      <PiskostrumenevaOchystka/>
      <TechnoListCard/>
      <Form />
    </>
  )
}

export default Rekonstruktsiya