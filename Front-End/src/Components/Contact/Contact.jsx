import React from 'react'
import "../../Components/Contact/Contact.css"
import location_icon from "../../Assets/location-icon.png"
import mail_icon from "../../Assets/mail-icon.png"
import phone_icon from "../../Assets/phone-icon.png"
import msg_icon from "../../Assets/msg-icon.png"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c14987ba-cfa4-48cb-a5b5-d681932b00d2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    
    <div className='contact'>

    <div className='contact-col'>
    <h3>Contact Us <img src={msg_icon}></img></h3>
    <p>
    Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our shop.
    </p>
    <ul>
        <li> <img src={mail_icon}></img> Contact@HairCutterms.com </li>
        <li><img src={phone_icon}></img> +09 542313150123</li>
        <li><img src={location_icon}></img> Jefferson Park,<br/>Los Angeles </li>
    </ul>
    </div>
    <div className="contact-col">
      <form onSubmit={onSubmit}>
        <label>Your name</label>
        <input type='text' name='name' placeholder='Enter your name' required/>
        <label>Phone Number</label>
        <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
        <label>Write your messages here</label>
        <textarea name='message' rows="6" placeholder='Enter your messages' required/>
        <button type='submit' className='btn dark-btn'>Submit now </button>
      </form>
      <span>{result}</span>
    </div>
</div>
  )
}

export default Contact