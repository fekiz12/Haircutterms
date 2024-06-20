import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import carpi from "../../Assets/cross_icon.png"
import { StoreContext } from '../../Context/StoreContext'
import axios from "axios"

// Cookie yardımcı fonksiyonlarını ekle
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, expiryDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    const expires = "expires="+ d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

const LoginPopup = ({setShowLogin}) => {

    const {url,setToken}=useContext(StoreContext);
    console.log(url)
    const [currState, setCurrState] = useState("Login") 
    const [data,setData]=useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
   
      setData({...data,[name]:value})
    }
    const onLogin=async (event)=>{
      event.preventDefault();
      let newUrl=url;
      if(currState==="Login"){
        newUrl +="/api/user/login"
      }
      else{
        newUrl +="/api/user/register"
      }
      const response=await axios.post(newUrl,data);
      if(response.data.success){
        setCookie("token", response.data.token, /*geçerlilik süresi*/); // Geçerlilik süresini belirtin
        setShowLogin(false);
      }
      else{
        alert(response.data);
      }
    }
    

  return (
    <div className='login'>
      <form onSubmit={onLogin}  className="login_popup-container">
        <div className="login_popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)}  src={carpi} alt="" />
        </div>
        <div className="loginpopup-input">
            {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your name' required />}
            <input name='email' onChange={onChangeHandler} value={data.email} type='email' placeholder='Your e-mail' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type='password' placeholder='Password' required />
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="loginpopup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
        :<p>Already have an account <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
        
      </form>
    </div>
  )
}

export default LoginPopup
