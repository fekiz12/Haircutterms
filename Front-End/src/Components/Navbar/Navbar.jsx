import React, { useContext, useEffect, useState } from "react";
import "../Navbar/Navbar.css"
import basket from "../../Assets/basket_icon.png"
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import bag_icon from "../../Assets/bag_icon.png"
import logout_icon from "../../Assets/logout_icon.png"
import profile_icon from "../../Assets/profile_icon.png"

const Navbar=({setShowLogin})=>{
    const[bar,setbar]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY > 50 ? setbar(true) : setbar(false);
        })
    },[]);
    const[menu,setMenu]=useState("home");

    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);
    const navigate =useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");

    }


return(
    <nav className={`container ${bar? 'dark-nav' : ''}`}>
    <svg className="logo"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-columns-gap" viewBox="0 0 16 16">
    
    <path d="M6 1v3H1V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm14 12v3h-5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM6 8v7H1V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm14-6v7h-5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/>
    
    </svg>
    
    <h1 className="h1-1">HairCutterms</h1>
    <ul>
       <Link to={'../'}>
            <li onClick={()=>setMenu("home")}
        className={menu==="home"?"active":""}>Home</li></Link>
        <Link to={'../galery'}>
            <li onClick={()=>setMenu("Favoriler")} className={menu==="Favoriler"?"active":""}>Gallery</li></Link>
        <Link to={'../services'}>
            <li onClick={()=>setMenu("Services")} className={menu==="Services"?"active":""}>Services</li></Link>
        <Link to={'../shop'}>
            <li onClick={()=>setMenu("Shop")} className={menu==="Shop"?"active":""}>Shop</li></Link>
        <Link  to={'../contact'}>
        <li><button className="btn">Contact Us</button></li></Link>
        <Link to={'../book'}>
            <li><button className="btn1" >Book Now</button></li></Link>
        
    </ul>
        <div className="navbar_right">
            <div className="navbar-basket">
             <Link to={'../cart'}><img src={basket} alt="" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            {!token?<button onClick={() =>setShowLogin(true)} className="btn2">Sign In</button>:<div className="navbar-profile">
            <img src={profile_icon}></img>
            <ul className="nav-profile-dropdown">
            <li><img src={bag_icon}></img>
            <p>Orders</p></li>
            <hr></hr>
            <li onClick={logout}><img src={logout_icon}></img><p>Logout</p></li>
            </ul>
            
            </div>}
            
            
        </div>
    </nav>



)

}
export default Navbar;