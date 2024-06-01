import React from 'react'
import "../Gallery/Gallery.css"
import foto3 from "../../Assets/foto3.png"
import foto4 from "../../Assets/foto4.png"
import foto5 from "../../Assets/foto5.png"
import foto6 from "../../Assets/foto6.png"
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <div className='gallery'>
    <div className='galery-foto'>
        <img src={foto3}></img>
        <img src={foto4}></img>
        <img src={foto5}></img>
        <img src={foto6}></img>
    </div>
    <Link to={"../galery"}><button className='btn dark-btn1'>Click here some more</button></Link>
    </div>
  )
}

export default Gallery