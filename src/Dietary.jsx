import React from "react";
import "./Dietary.css";
import dietary from "./assets/dietary.jpg";
import catering3 from "./assets/catering3.jpg";

function Dietary() {
  return (
    <section className="dietary">

      {/* HEADER */}
      <div className="dietary-text">
        <h6 className="dietary-subtitle">Why Choice Us</h6>

        <h2>
          We <span>Give Clean Food</span> And Tailored To Your Dietary Needs.
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* CONTENT */}
      <div className="dietary-content">

        {/* LEFT IMAGE CARD */}
        <div className="dietary-image-card">
          <img src={dietary} alt="Dietary" />

          <div className="dietary-overlay">
            <h4>Join Our Healthy Community</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
              tellus.
            </p>
            <button className="dietary-btn">Join Now</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="dietary-right">

          {/* FEATURE BOXES */}
          <div className="dietary-features">
            <div className="feature-box dark">
              <span className="feature-icon">🍃</span>
              <h6>Fresh Ingredients</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className="feature-box light">
              <span className="feature-icon">⚙️</span>
              <h6>Customized Plans</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          {/* VIDEO IMAGE */}
          <div className="dietary-video">
            <img src={catering3} alt="Video" />
            <div className="play-btn">▶</div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Dietary;
