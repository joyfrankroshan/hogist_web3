import React from "react";
import "./Healthymeals.css";
import img1 from "./assets/healthymeals1.jpg";
import img2 from "./assets/healthymeals2.jpg";
import img3 from "./assets/healthymeals3.jpg";
import img4 from "./assets/healthymeals4.jpg";

function Healthymeals() {
  return (
    <section className="healthymeals">
      {/* TEXT */}
      <div className="healthymeals-text">
        <h5>How Its Work</h5>
        <h2>
          Simple Steps To Enjoy Our <span>Healthy Clean</span> Meals.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* CARDS */}
      <div className="healthymeals-cards">

        <div className="healthy-card">
          <span className="step-badge">01.</span>
          <img src={img1} alt="" />
          <div className="card-content">
            <h3>First Choose Your Meals Plan</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="healthy-card">
          <span className="step-badge">02.</span>
          <img src={img2} alt="" />
          <div className="card-content">
            <h3>Customize Or Choose Your Menu</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="healthy-card active">
          <span className="step-badge active">03.</span>
          <img src={img3} alt="" />
          <div className="card-content">
            <h3>Place Your Order Choicing Menu</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className="healthy-card">
          <span className="step-badge">04.</span>
          <img src={img4} alt="" />
          <div className="card-content">
            <h3>Enjoy Our Fresh Delivery Food</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Healthymeals;
