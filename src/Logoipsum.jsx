import React from "react";
import logoipsum1 from "./assets/logoipsum1.jpg";
import logoipsum2 from "./assets/logoipsum2.jpg";
import logoipsum3 from "./assets/logoipsum3.jpg";
import logoipsum4 from "./assets/logoipsum4.jpg";
import "./Logoipsum.css";

function Logoipsum() {
  return (
    <div className="logoipsum">
      <div className="logo-track">
        <img src={logoipsum1} alt="logo1" />
        <img src={logoipsum2} alt="logo2" />
        <img src={logoipsum3} alt="logo3" />
        <img src={logoipsum4} alt="logo4" />



        <img src={logoipsum1} alt="logo1" />
        <img src={logoipsum2} alt="logo2" />
        <img src={logoipsum3} alt="logo3" />
        <img src={logoipsum4} alt="logo4" />


        
      </div>
    </div>
  );
}

export default Logoipsum;
