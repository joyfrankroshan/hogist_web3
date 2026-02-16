import React from 'react'
import "./Recepe.css";
import recepe from "./assets/recepe.jpg";
import recepe1 from "./assets/recepe1.jpg";
import recepe2 from "./assets/recepe2.jpg";

function Recepe() {
  return (
    <div className='Receepe'>
        <div className='recepe-text'>
            <h5>Blog Content</h5>
            <h2>Lets Discover Our Healthy Eating <span>Tips & Recipes.</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Ut elit tellus, luctus nec ullamcorper mattis,
                  pulvinar dapibus leo.</p>

        </div>
        <div className='recepe-card'>
            <div className='recepe-card1'>
                <img src={recepe} alt=""  className='recepe-img'/>
                <h3>Our Commitment To Fresh and Clean Incredients</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                  </div>
            <div className='recepe-card2'>
              <img src={recepe1} alt="" className='recepe-img'/>
              <h3>How Healthy Catering can Boost your Team's</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
</div>
<div className='recepe-card3'>
  <img src={recepe2} alt="" className='recepe-img'/>
  <h3>Top 7 Clean Food Catering Menu Ideas</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
  </div>
  <div className='recepe-button'>
    <button>Discover Blog</button>
  </div>
  </div>





    </div>
  )
}

export default Recepe