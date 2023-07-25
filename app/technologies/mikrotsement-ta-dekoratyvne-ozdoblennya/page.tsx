
// import Script from 'next/script'
// import Advantage from './section/advantage/Advantage'
// import Color from './section/color/Color'
// import HeaderPage from './section/header/Head'
// import Help from './section/help/Help'
// import Materialy from './section/materialy/Materialy'
// import Pryklady from './section/pryklady/Pryklady'
// import Technologiya from './section/technologiya/Technologiya'
// import Video from './section/video/Video'
// import { FC } from 'react'


// const Microcement: FC = () => {
  
//   return (
//     <>
//       <HeaderPage/>
//       <Pryklady/>
//       <Video/>
//       <Technologiya/>
//       <Advantage/>
//       <Color/>
//       <Materialy/>
//       <Help/>
//       <Script strategy="afterInteractive">
//         {`window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('mu0um2');`}
//       </Script>
//     </>
//   )
// }

// export default Microcement


import Script from 'next/script'
import Advantage from './section/advantage/Advantage'
import Color from './section/color/Color'
import HeaderPage from './section/header/Head'
import Help from './section/help/Help'
import Materialy from './section/materialy/Materialy'
import Pryklady from './section/pryklady/Pryklady'
import Technologiya from './section/technologiya/Technologiya'
import Video from './section/video/Video'

const Microcement: React.FC = () => {
  return (
    <>
      <HeaderPage />
      <Pryklady />
      <Video />
      <Technologiya />
      <Advantage />
      <Color />
      <Materialy />
      <Help />
      <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `
          window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('mu0um2');
        `
      }} />
    </>
  )
}

export default Microcement
