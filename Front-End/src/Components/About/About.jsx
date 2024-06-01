import React from 'react'
import "../About/About.css"
import foto4 from "../../Assets/barbershop-101.png"
import play_icon from "../../Assets/play.png"
const About = ({setPlayState}) => {
  return (
    <div className='about'>
    
    <div className='about-left'>
    <img src={foto4} className='about-img'></img>
    <img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}}></img>
    </div>
    <div className='about-right'>
    
    <h3>ABOUT US</h3>
    <h2>Don't Be Late For Better Haircut</h2>
    <p>
    Our barber shop was founded by Mr.Ekiz in 1995. Since then, we have been working to provide the best service to our customers.
    </p>
    <p>
    Our mission is to provide quality hair cutting and grooming services to our customers. Our vision is to ensure that every customer leaves with beauty and self-confidence.
    </p>
    <p>
    Customer satisfaction, honesty and professionalism are the core values ​​of our barbershop.The experienced team of our barbershop follows the latest trends and offers the best service to our customers.
    </p>
    <p>
    We use modern equipment and quality products in our barber shop. You can trust us for haircuts, coloring, beard trimming and more.You can contact us by phone to come to our barber shop or make an appointment. You can also follow our current campaigns by following our social media accounts.
    </p>
    
    </div>
    
    </div>
  )
}

export default About