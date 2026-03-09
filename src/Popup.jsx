import React from "react";
import "./Popup.css";
import popupimg from "./assets/burgers.jpg";

function Popup({ closePopup }) {
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
            />
            <button>+</button>
          </div>

          <p className="popup-small">
By entering your email, you agree to receive special offers from us. of <span>Terms of Service and Privacy Policy.</span> You may unsubscribe at any time. 
</p>

        </div>

      </div>

    </div>
  );
}

export default Popup;