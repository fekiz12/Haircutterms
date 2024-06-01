import React, { useContext, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import "../PlaceOrder/PlaceOrder.css"
import { useNavigate } from 'react-router-dom'
import { urun_list } from '../../Assets/assets'
import axios from 'axios'
const PlaceOrder = () => {
    const {getTotalCartAmount,token,urunList,cartItems,url}=useContext(StoreContext);

    const [data,setData] =useState({
      firstName:"",
      lastName:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:""

    })

    const onChangeHandler=(event)=>{
      const name=event.target.name;
      const value =event.target.value;
      setData(data=>({...data,[name]:value}))
    }

    const placeOrder= async(event)=>{
      event.preventDefault();
      let orderItems=[];
      urunList.map((item)=>{
        if(cartItems[item._id]>0){
          let itemInfo=item;
          itemInfo["quantity"]=cartItems[item._id];
          orderItems.push(itemInfo);
        }
      })
      let orderData={
        address:data,
        items:orderItems,
        amount:getTotalCartAmount()+2,
      }
      let response =await axios.post(url+"/api/order/place",orderData,{headers:{token}});
      if(response.data.success){
        const {session_url}=response.data;
        window.location.replace(session_url);
      }
      else{
        alert("ERROR");
      }

    }

    
    const navigate=useNavigate();
  return (
    <form onSubmit={placeOrder} className='place-order'>
        <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
        <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type='text' placeholder='First name'></input>
        <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type='text' placeholder='Last name'></input>

        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type='text' placeholder='Email address'></input>
        <input required name='street' onChange={onChangeHandler} value={data.street} type='text' placeholder='street'></input>
        <div className='multi-fields'>
        <input required name='city' onChange={onChangeHandler} value={data.city} type='text' placeholder='City'></input>
        <input required name='state' onChange={onChangeHandler} value={data.state} type='text' placeholder='State'></input>
        </div>
        <div className='multi-fields'>
        <input required name='zipcode' onChange={onChangeHandler} value={data.zipcode} type='text' placeholder='Zip code'></input>
        <input required name='country' onChange={onChangeHandler} value={data.country} type='text' placeholder='Country'></input>
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type='text' placeholder='Phone'></input>

        </div>
        <div className='place-order-right'>
        <div className='cart-total'>
        <h2>Cart Total</h2>
        <div>
          <div className='cart-total-details'>
          <p>Subtotal</p>
          <p>{getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
          <p>Delivery Fee</p>
          <p>{2}</p>
          </div>
          <hr/>
          <div className='cart-total-details'>
          <b>Total</b>
          <b>{getTotalCartAmount()+2}</b>
          </div>
        </div>
        <button type='submit'>PROCEED TO PAYMENT</button>
      </div>


        </div>
    </form>
  )
}

export default PlaceOrder