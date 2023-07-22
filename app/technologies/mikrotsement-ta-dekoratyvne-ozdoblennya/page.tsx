

import Advantage from './section/advantage/Advantage'
import Color from './section/color/Color'
import HeaderPage from './section/header/Head'
import Help from './section/help/Help'
import Materialy from './section/materialy/Materialy'
import Pryklady from './section/pryklady/Pryklady'
import Technologiya from './section/technologiya/Technologiya'
import Video from './section/video/Video'

const Microcement = () => {
  return (
    <>
      <HeaderPage/>
      <Pryklady/>
      <Video/>
      <Technologiya/>
      <Advantage/>
      <Color/>
      <Materialy/>
      <Help/>
    </>
  )
}

export default Microcement