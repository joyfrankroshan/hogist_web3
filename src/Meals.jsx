import React from "react";
import "./Meals.css";

function Meals() {
  return (
    <div className="meals">
      <div className="meals-text">
        <h5>Meals Package</h5>
        <h3>
          Flexible Pricing Options For <span>Healthy food</span> package.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div className="meals-card">
        {/* Basic */}
        <div className="meals-card1">
          <h4>Basic Plan</h4>
          <p>A small river named Duden flows by their place and supplies</p>
          <h2>$ 59.29 / Month</h2>
          <a href="#">3 meals/week</a>
          <a href="#">Customized Meals</a>
          <a href="#">Essential Food</a>
          <a href="#">Moneyback Guarantee</a>
          <a href="#">Customer Support</a>
          <button>Get A Quote</button>
        </div>

        {/* Standard */}
        <div className="meals-card2">
          <span className="popular-badge">Most Popular</span>
          <h4>Standard Plan</h4>
          <p>A small river named Duden flows by their place and supplies</p>
          <h2>$ 89.49 / Month</h2>
          <a href="#">5 meals/week</a>
          <a href="#">Advanced Meals</a>
          <a href="#">Priority Delivery</a>
          <a href="#">Customized Meals</a>
          <a href="#">Healthy Guarantee</a>
          <button>Get A Quote</button>
        </div>

        {/* Premium */}
        <div className="meals-card3">
          <h4>Premium Plan</h4>
          <p>A small river named Duden flows by their place and supplies</p>
          <h2>$ 149 / Month</h2>
          <a href="#">10 meals/week</a>
          <a href="#">Personalized Meals</a>
          <a href="#">Diet Food Optimization</a>
          <a href="#">Food Savings Guarantee</a>
          <a href="#">Smart Delivery</a>
          <button>Get A Quote</button>
        </div>
      </div>
    </div>
  );
}

export default Meals;
