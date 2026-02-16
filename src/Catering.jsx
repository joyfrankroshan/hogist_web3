import React from "react";
import "./Catering.css";

import catering1 from "./assets/catering1.jpg";
import catering2 from "./assets/catering2.jpg";
import catering3 from "./assets/catering3.jpg";
import catering4 from "./assets/catering4.jpg";
import arrowImg from "./assets/catering.jpg";

function Catering() {
  return (
    <div className="catering">
      {/* TEXT SECTION */}
      <div className="catering-text">
        <div className="arrow">
          <img src={arrowImg} alt="arrow" className="catering-arrow" />
        </div>

<h5 className="catering-subtitle">What We Do</h5>

        <h2 className="catering-main">
          Deliciously <span>Healthy Catering</span> for Every Occasion
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* CARDS */}
      <div className="catering-cards">
        <div className="catering-card green">
          <img src={catering1} alt="Corporate Catering" />
          <div className="card-overlay">
            <h3>Corporate Catering</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span className="arrow-icon">↗</span>
          </div>
        </div>

        <div className="catering-card orange">
          <img src={catering2} alt="Private Events" />
          <div className="card-overlay">
            <h3>Private Events</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span className="arrow-icon">↗</span>
          </div>
        </div>

        <div className="catering-card green">
          <img src={catering3} alt="Meal Prep Plans" />
          <div className="card-overlay">
            <h3>Meal Prep Plans</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span className="arrow-icon">↗</span>
          </div>
        </div>

        <div className="catering-card black">
          <img src={catering4} alt="Special Diet Menus" />
          <div className="card-overlay">
            <h3>Special Diet Menus</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span className="arrow-icon">↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catering;
