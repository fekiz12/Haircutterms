import React, { useRef } from 'react'
import "../Reviews/Reviews.css"
import next_icon from "../../Assets/next-icon.png"
import back_icon from "../../Assets/back-icon.png"
import user_1 from "../../Assets/user-1.png"
import user_2 from "../../Assets/user-2.png"
import user_3 from "../../Assets/user-3.png"
import user_4 from "../../Assets/user-4.png"
const Reviews = () => {

    const slider =useRef();
    let tx = 0;

    const ilerikaydir=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
    }
    const gerikaydir=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`;
        
    }



  return (
    <div className='reviews'>
    <img src={next_icon} className='next-btn' onClick={ilerikaydir}></img>
    <img src={back_icon} className='back-btn' onClick={gerikaydir}></img>
    <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                 <div className='info'>
                <img src={user_1}></img>
                <div>
                    <h3>Dilara Tatlısu</h3>
                    <span>Isparta,Turkey</span>
                </div>
                    </div>
                <p>
                I had a great experience! My cut came out perfect and the staff was very professional.
                </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                 <div className='info'>
                <img src={user_2}></img>
                <div>
                    <h3>Furkan Ekiz</h3>
                    <span>Muğla,Turkey</span>
                </div>
                    </div>
                <p>
                I was very pleased with the service at your barber shop. The employees are friendly and do their job well.
                </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                 <div className='info'>
                <img src={user_3}></img>
                <div>
                    <h3>Elif Nemutlu</h3>
                    <span>Ankara,Turkey</span>
                </div>
                    </div>
                <p>
                I am happy to see that your barber follows the hygiene rules. I received service in a clean and orderly services.
                </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                 <div className='info'>
                <img src={user_4}></img>
                <div>
                    <h3>Aslan Tagizade</h3>
                    <span>Baku,Azerbaijan</span>
                </div>
                    </div>
                <p>
                I made an appointment for my cut and the wait time was very long. I did not like the service I received at all and it was extremely expensive.
                </p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Reviews