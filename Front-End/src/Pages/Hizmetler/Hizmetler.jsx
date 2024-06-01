import React from 'react'
import './Hizmetler.css'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import HizmetDisplay from "../../Components/HizmetDisplay/HizmetDisplay"
import StoreContextProvider from '../../Context/StoreContext'

const Hizmetler = () => {
  const[category2,setCategory]=useState("All");
  return (
    <StoreContextProvider>
    <div className='hizmetler'>
      <ExploreMenu  category={category2} setCategory={setCategory}/>
      <HizmetDisplay category={category2}/>
    </div>
    </StoreContextProvider>
  )
}

export default Hizmetler;
