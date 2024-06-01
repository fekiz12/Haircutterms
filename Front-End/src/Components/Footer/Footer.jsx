import React from 'react'
import "../Footer/Footer.css"
import face from "../../Assets/facebook_icon.png"
import linkedin from "../../Assets/linkedin_icon.png"
import twitter from "../../Assets/twitter_icon.png"
const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
  

        <div className='footer-content-left'>
        <h2>HairCutterms</h2>
        <p>
        Saçınızı keserken rahatlayın ve keyfini çıkarın!
        “Yeni saç kesiminizle harika görüneceksiniz!”
        </p>
        <div className='footer-social-icons'>
           <a href=''> <img src={face}></img></a>
            <img src={linkedin}></img>
            <img src={twitter}></img>
        </div>

        </div>
        <div className='footer-content-center'>
        <h4>Opening Hours (by appointment only):</h4>
        <ul>
            <li>Mon &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 9am-5pm</li> 
            <li>Tues &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 9am-5pm</li> 
            <li>Wed &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 9am-5pm</li> 
            <li>Thur &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 9am-5pm</li> 
            <li>Frid &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9am-5pm</li> 
            <li>Satu &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Closed</li> 
            <li>Sund &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; Closed</li> 
        </ul>
        
        <h4>Later times available by appointment</h4>
        
        
        </div>
       
       
        <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+09-545-432-12-3211</li>
            <li>Contact@HairCutterms.com</li>
        </ul>
        </div>

    </div>
    <hr></hr>
    <p className='footer-copyright'>
        Copyright 2024 @ HairCutterms.com -All Right Reserved
    </p>
    </div>
  )
}

export default Footer