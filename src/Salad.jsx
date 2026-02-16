import React from "react";
import "./Salad.css";
import saladImg from "./assets/salad.jpg";

function Salad() {
  return (
    <div className="salad">
      <div className="salad-overlay"></div>

      <div className="salad-text">
        <h2>
          Ready to Eat Healthier - Lets <span>Get Started</span> Today.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <button className="salad-button">
          Contact Us →
        </button>
      </div>
    </div>
  );
}

export default Salad;
