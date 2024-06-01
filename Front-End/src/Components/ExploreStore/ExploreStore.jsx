import React from 'react'
import './ExploreStore.css'
import { shop_list } from '../../Assets/assets'

const ExploreStore = ({category,setCategory}) => {
  return (
    <div className='explore-store' id='explore-store'>
        <h1>Explore our store</h1>
        <p className='explore-store-text'>Choose from a diverse menu featuring an array delectable array of store</p>
      <div className="explore-store-list">
        {shop_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.shop_name?"All":item.shop_name)} key={index} className='explore-store-list-item'>
                        <img className={category===item.shop_name?"active":""} src={item.shop_image} alt=""/>
                        <p>{item.shop_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreStore
