import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Popup.css";
import popupimg from "./assets/burgers.jpg";
import axios from "axios";

function Popup({ closePopup }) {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
const [message,setMessage]=useState("");
const [type,setType]=useState("");  
  


  const sendEmailApi = async (data) => {

    try {
      const res = await axios.post('https://hogist.com/api/v2/auth/send-contact-mail', data)
      console.log(res.data)
    } catch (err) {

    }
  }

  const handleSubmit = () => {
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!email && !phone) {
  setMessage("Please enter email and phone number");
    setType("error");

  return;
   }
  if (!email) {
  setMessage("Please enter email ");
    setType("error");

  return;
  
}
if (!phone) {
  setMessage("Please enter Phonenumber ");
    setType("error");

  return;
  
}

if (!emailpattern.test(email)) {
  setMessage("Please enter a valid email address");
    setType("error");

  return;
}

if (phone.length < 10) {
  setMessage("Please enter a valid phone number");
    setType("error");

  return;
}
    const userData = {

      fname: 'website',
      mobile: phone,
      message: `The Email id of the customer is  ${email}`,
      head: "This is from the webite",


    };

sendEmailApi(userData);
setMessage("Successfully registered your email and phone number 🎉");
setType("success");

  }

  return (
    <div className="popup-overlay">

      <div className="popup-box">

        <button className="popup-close" onClick={closePopup}>
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="popup-left">
          <img src={popupimg} alt="offer" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="popup-right">

          <h2>Enjoy 15% Off Your </h2>
          <h2 className="rightsec">First Order</h2>
          <h6>+ Free Shipping & Returns</h6>

          <div className="email-box">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="email-ph">
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputStyle={{
                width: "100%",
                height: "40px",
                fontSize: "14px"
              }}
            />
            <button onClick={handleSubmit}>+</button>

          </div>
{message && (
  <p className={type === "error" ? "error-message" : "success-message"}>
    {message}
  </p>
)}

          <p className="popup-small">
            By entering your email, you agree to receive special offers from us. of <span>Terms of Service and Privacy Policy.</span> You may unsubscribe at any time.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Popup;