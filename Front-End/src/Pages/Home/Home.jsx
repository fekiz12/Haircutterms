import React, { useState } from 'react'
import "../Home/Home.css"
import Hero from '../../Components/Heroes/hero'
import Title from '../../Components/Title/Title'
import Services from '../../Components/Services/Services'
import About from '../../Components/About/About'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'
import Gallery from '../../Components/Gallery/Gallery'
import Reviews from '../../Components/Reviews/Reviews'
import { Link } from 'react-router-dom'

const Home = () => {
  
  
  const[playState,setPlayState]=useState(false);
  
  return (
    <div >
      <Hero/>
      <div className='container'>
      <Title subTitle="What We Offer" title="Master Employees"/>
      <Services/>
      
        
        </div>
        <Link to={"../personel"}>
        <button className='btn dark-btn2'>See More</button>
        </Link>
        
      
      <About setPlayState={setPlayState}/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
      <Title subTitle="Gallery" title="Haircut Photos"/>
      <Gallery/>
      <Title subTitle="Reviews" title="What  Customer Says"/>
      <Reviews/>
    
    </div>
  )
}

export default Home