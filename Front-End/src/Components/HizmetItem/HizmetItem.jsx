import React, { useContext, useState } from 'react'
import "../HizmetItem/HizmetItem.css"
import rating_star from  "../../Assets/rating_starts.png"
import kalp2 from "../../Assets/kalp2.png"
import { StoreContext } from '../../Context/StoreContext'
const HizmetItem = ({id,name,image,price}) => {

  const [itemCount,setItemCount] = useState(0)
  /*
  const{favItems,addToFav,removeFromCart}=useContext(StoreContext);
*/
  return (
    <div className='hizmet-item'>
    <div className='hizmet-item-img-container'>
   
    <img src={image} className='hizmet-item-image'></img>
    
    <img  className='fav'  src={kalp2}></img>
    

    </div>
    <div className='hizmet-item-info'>
        <div className='hizmet-item-name-rating'>
            <p>{name}</p>
            <img src={rating_star}></img>

        </div>
        <p className='hizmet-item-price'>${price}</p>

    </div>

    </div>
  )
}

export default HizmetItem;