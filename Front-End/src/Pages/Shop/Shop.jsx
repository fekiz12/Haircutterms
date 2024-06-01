import React, { useState } from 'react'
import "../Shop/Shop.css"
import UrunItem from '../../Components/UrunItem/UrunItem'
import UrunDisplay from '../../Components/UrunDisplay/UrunDisplay'
import Title from '../../Components/Title/Title'
import ExploreStore from '../../Components/ExploreStore/ExploreStore'
const Shop = () => {
  const[category,setCategory] =  useState("All");
  return (
    <div>
    <Title subTitle="What We Selling" title="Special Products"/>
    <ExploreStore category={category} setCategory={setCategory}/>
     <UrunDisplay category={category}></UrunDisplay>
    </div>
  )
}

export default Shop