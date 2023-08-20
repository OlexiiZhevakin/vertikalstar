import React from 'react'
import Inyektsiyi from './section/inyektsiyi/Inyektsiyi'
import Perekryttya from './section/perekryttya/Perekryttya'
import Form from '@/app/[locale]/components/form/Form'
import Torkretuvannya from './section/torkretuvannya/Torkretuvannya'
import FasadDo from './section/fasad-do/FasadDo'
import Fasad from './section/fasad/Fasad'

const Darvina = () => {
  return (
    <>
      <Inyektsiyi/>
      <Perekryttya/>
      <Torkretuvannya/>
      <FasadDo/>
      <Fasad/>
      <Form/>
    </>
  )
}

export default Darvina