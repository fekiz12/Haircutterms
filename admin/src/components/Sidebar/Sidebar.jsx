import React from 'react'
import "../Sidebar/Sidebar.css"
import {assets} from "../../assets/assets"
import {NavLink} from "react-router-dom"
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-options'>
        <NavLink  to="./add" className='sidebar-option'>
        <img src={assets.add_icon}></img>
        <p>ADD ITEMS</p>
        </NavLink>
        <NavLink to="./list" className='sidebar-option'>
        <img src={assets.order_icon}></img>
        <p>LIST ITEMS</p>
        </NavLink>
        <NavLink to="./orders" className='sidebar-option'>
        <img src={assets.order_icon}></img>
        <p>ORDERS</p>
        </NavLink>

      </div>

    </div>
  )
}

export default Sidebar