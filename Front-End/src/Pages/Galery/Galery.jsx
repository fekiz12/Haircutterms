import React from 'react'
import './Galery.css'
import Galeripage from '../../Components/Galeripage/Galeripage'
import Title from '../../Components/Title/Title'

const Galery = () => {
  return (
    <div>
      <Title subTitle="Gallery" title="Haircut Photos"/>
      <Galeripage/>
    </div>
  )
}

export default Galery