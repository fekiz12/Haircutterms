import React, { useContext } from 'react'
import UrunItem from '../UrunItem/UrunItem'
import { StoreContext } from '../../Context/StoreContext'


const UrunDisplay = ({category}) => {
    const {urunList} =useContext(StoreContext)
  return (
    <div className='urun-display' id='urun-display'>
    <div className='urun-display-list'>
    {urunList.map((item,index)=>{
        {console.log(category,item.category)}
        if(category==="All" || category === item.category){
            return <UrunItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}></UrunItem>
        }
    })}

    </div>
    </div>
  )
}

export default UrunDisplay