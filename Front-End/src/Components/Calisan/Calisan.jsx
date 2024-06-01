import React from 'react'
import "../Calisan/Calisan.css"
import ExplorePersonel from "../ExplorePersonel/ExplorePersonel"
import { useState } from 'react'
import PersonelDisplay from '../PersonelDisplay/PersonelDisplay'
import StoreContextProvider from '../../Context/StoreContext'
const Calisan = () => {
  const[Kategori,setKategori]=useState("All");
  return (
    <StoreContextProvider>
    <div>
        <ExplorePersonel  Kategori={Kategori} setKategori={setKategori}></ExplorePersonel>
        <PersonelDisplay Kategori={Kategori}></PersonelDisplay>
    </div>
    </StoreContextProvider>
  )
}

export default Calisan