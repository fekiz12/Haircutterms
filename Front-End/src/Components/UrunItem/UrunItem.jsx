import React, { useContext, useState } from 'react'
import "../UrunItem/UrunItem.css"
import add_icon_green from "../../Assets/add_icon_green.png"
import add_icon_white from "../../Assets/add_icon_white.png"
import remove_icon_red from "../../Assets/remove_icon_red.png"
import { StoreContext } from '../../Context/StoreContext'
import rating_starts from "../../Assets/rating_starts.png"
const UrunItem = ({id,name,price,description,image}) => {
  const[itemCount,setItemCount]=useState(0);
  const {cartItems,addToCart,removeFromCart,url}=useContext(StoreContext);
  return (
      
    <div className='urun-item'>
    
    <div className='urun-item-img-container'>
    <img className='urun-item-image' src={url+"/images/"+image}></img>
    {!cartItems[id]
        ?<img className='add' onClick={()=>addToCart(id)} src={add_icon_white}></img>
        :<div className='urun-item-counter'>
        <img onClick={()=>removeFromCart(id)} src={remove_icon_red}></img>
        <p>{cartItems[id]}</p>
        <img onClick={()=>addToCart(id)} src={add_icon_green}></img>
        </div>
    }
    </div>
    <div className='urun-item-info'>
        <div className='urun-item-name-rating'>
            <p>{name}</p>
            <img src={rating_starts}></img>
        </div>
        <p className='urun-item-desc'>{description}</p>
        <p className='urun-item-price'>${price}</p>
    </div>


    </div>

      
    
  )
}

export default UrunItem;
