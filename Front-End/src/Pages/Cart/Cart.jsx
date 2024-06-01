import React, { useContext } from 'react'
import {urun_list} from "../../Assets/assets"
import {StoreContext} from "../../Context/StoreContext"
import './Cart.css'
import Sepet from '../../Components/Sepet/Sepet'
import Title from '../../Components/Title/Title'
const Cart = () => {

  const {cartItems,urun_list,removeFromCart}=useContext(StoreContext);
  return (
   <div>
    <Title subTitle="What We Offer" title="Master Employees"/>
    <Sepet></Sepet>
   </div>
  )
}

export default Cart
