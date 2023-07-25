

// import Script from 'next/script'
// import Advantage from './section/advantage/Advantage'
// import Color from './section/color/Color'
// import HeaderPage from './section/header/Head'
// import Help from './section/help/Help'
// import Materialy from './section/materialy/Materialy'
// import Pryklady from './section/pryklady/Pryklady'
// import Technologiya from './section/technologiya/Technologiya'
// import Video from './section/video/Video'

// const Microcement: React.FC = () => {
//   return (
//     <>
//       <HeaderPage />
//       <Pryklady />
//       <Video />
//       <Technologiya />
//       <Advantage />
//       <Color />
//       <Materialy />
//       <Help />
//       <Script strategy="afterInteractive" dangerouslySetInnerHTML={{
//         __html: `
//           window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('mu0um2');
//         `
//       }} />
//     </>
//   )
// }

// export default Microcement

'use client'
import { useEffect } from 'react'
import Advantage from './section/advantage/Advantage'
import Color from './section/color/Color'
import HeaderPage from './section/header/Head'
import Help from './section/help/Help'
import Materialy from './section/materialy/Materialy'
import Pryklady from './section/pryklady/Pryklady'
import Technologiya from './section/technologiya/Technologiya'
import Video from './section/video/Video'

const Microcement: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = `
      window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('mu0um2');
    `
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

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
    </>
  )
}

export default Microcement

