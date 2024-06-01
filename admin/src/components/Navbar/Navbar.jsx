import React from 'react'
import "../Navbar/Navbar.css"
import {assets} from "../../assets/assets"
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo'></img>
        <img className='profile' src={assets.profile_image}></img>
    </div>
  )
}

export default Navbar