import React from 'react'
import "../PersonelItem/PersonelItem.css"
const PersonelItem = ({id,name,image,description}) => {
  return (
    <div className='personel-hizmet-item'>
    <div className='hizmet-item-img-container'>
   
    <img src={image} className='personel-item-image'></img>
    </div>

    <div className='personel-item-info'>
        <div className='personel-item-name-rating'>
            <p>{name}</p>
            
           
        </div>
        <p>{description}</p>
    </div>


    </div>
  )
}

export default PersonelItem