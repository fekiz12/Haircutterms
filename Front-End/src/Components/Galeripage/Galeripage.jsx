import React from 'react'
import './Galeripage.css'
import Title from '../Title/Title'
import foto3 from "../../Assets/foto3.png"
import foto4 from "../../Assets/foto4.png"
import foto5 from "../../Assets/foto5.png"
import foto6 from "../../Assets/foto6.png"
import foto7 from "../../Assets/foto7.png"
import foto8 from "../../Assets/foto8.png"
import foto9 from "../../Assets/foto9.png"
import foto10 from "../../Assets/foto10.png"
import foto11 from "../../Assets/foto11.png"
import foto12 from "../../Assets/foto12.png"
import foto13 from "../../Assets/foto13.png"
import foto14 from "../../Assets/foto14.png"
import nail1 from "../../Assets/nail1.jpg"
import nail2 from "../../Assets/nail2.jpg"
import nail3 from "../../Assets/nail3.jpg"
import nail4 from "../../Assets/nail4.jpg"
 
const Galeripage = () => {
  return (
    <div>
       <div className='gallery'>
    <div className='galery-foto'>
        <img src={foto3}></img>
        <img src={foto4}></img>
        <img src={foto5}></img>
        <img src={foto6}></img>
        <img src={foto7}></img>
        <img src={foto8}></img>
        <img src={foto9}></img>
        <img src={foto10}></img>
        <img src={foto11}></img>
        <img src={foto12}></img>
        <img src={foto13}></img>
        <img src={foto14}></img>
        <Title title="Nail Photos"/>
        <img src={nail1}></img>
        <img src={nail2}></img>
        <img src={nail3}></img>
        <img src={nail4}></img>

    </div>
    </div>
    </div>
  )
}

export default Galeripage
