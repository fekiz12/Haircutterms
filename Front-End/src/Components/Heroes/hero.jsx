import React from 'react'
import "../Heroes/hero.css"
import { Link } from "react-router-dom";
const hero = () => {
  return (
    <div className='hero container'>
    <div className='hero-text'>
     <h1>We ensure better making haircut for a cool looking</h1>
     <p>
     Enough to make you give up on your hair; Don't upset women. If you're going to go, don't come. If you're going to keep quiet, don't ever say 'hello'
     </p>
     <Link to={'../services'}><button className="btn">Explore more</button></Link>
    </div>


    </div>
  )
}

export default hero