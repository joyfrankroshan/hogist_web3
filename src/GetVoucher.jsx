import React from "react";
import "./GetVoucher.css";
import heroround1 from "./assets/heroround1.jpg";
import heroround2 from "./assets/heroround2.jpg";
import heroround3 from "./assets/heroround3.jpg";
import img2 from "./assets/healthymeals2.jpg";


function GetVoucher() {
  return (
    
    <div style={{
        backgroundPosition:"center",
        backgroundImage:`url(${img2})`
    }}  className="getVoucher ">
      

      <div className="getVoucher-text">
        <div className="getVoucher-round">
          <img src={heroround1} alt="user" />
          <img src={heroround2} alt="user" />
          <img src={heroround3} alt="user" />
        </div>

        <h2>
          Get Your First Meal – Claim Your{" "}
          <span>20% Off Voucher.</span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="getVoucher-email">
          <input type="email" placeholder="Enter your email address" />
          <button>Get Voucher →</button>
        </div>
      </div>
    </div>
  );
}

export default GetVoucher;
