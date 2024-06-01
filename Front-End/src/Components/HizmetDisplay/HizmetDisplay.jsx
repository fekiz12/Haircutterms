import React, { useContext } from 'react'
import "../HizmetDisplay/HizmetDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import HizmetItem from "../HizmetItem/HizmetItem"

const HizmetDisplay = ({category}) => {
    const {hizmet_list} =useContext(StoreContext)
  return (
    <div className='hizmet-display' id='hizmet-display'>
        <h2></h2>
        <div className='hizmet-display-list'>
        {hizmet_list.map((item,index)=>{
          if(category==="All" || category===item.category){
            return <HizmetItem key={index} id={item.id} name={item.name}
             image={item.image} price={item.price}/>
          }
        })}

        </div>
    </div>
  )
}

export default HizmetDisplay;