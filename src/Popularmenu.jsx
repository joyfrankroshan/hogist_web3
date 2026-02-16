import React from 'react'
import './Popularmenu.css'
import popularimg1 from './assets/popularmenu1.jpg'
import popularimg2 from './assets/popularmenu2.jpg'
import popularimg3 from './assets/popularmenu3.jpg'
import heroround1 from "./assets/heroround1.jpg";
import heroround2 from "./assets/heroround2.jpg";
import heroround3 from "./assets/heroround3.jpg";



function Popularmenu() {
  return (
    <div className='popularmenu'>
        <div className="popularmenu-text">
        <h5>Popular Menu
</h5>
<h2>Customer <span>Favorites Food</span> Based From Choicing.</h2>
<div className="customer-choice">
  <div className="customer-top">
    <div className="customer-images">
      <img src={heroround1} alt="" />
      <img src={heroround2} alt="" />
      <img src={heroround3} alt="" />
    </div>

    <div className="customer-rating">
      <div className="stars">★★★★★</div>
      <h3>250+ Customer Choice</h3>
    </div>
  </div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
    luctus nec ullamcorper mattis, pulvinar dapibus leo.
  </p>
</div>

        </div>

        <div className="popularmenu-cards">
            <div className="popular-card">
                <img src={popularimg1} alt="" />
                <h3>Clean Health Smoothies
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.

</p>
<div className="popular-checkbok">
    <p>cleanfood</p>
    <p>good materials</p>


</div>
</div>
<div className="popular-card">
                <img src={popularimg2} alt="" />
                <h3>Zucchini Noodles

</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.

</p>
<div className="popular-checkbok">
    <p>cleanfood</p>
    <p>good materials</p>


</div>
</div>

<div className="popular-card">
                <img src={popularimg3} alt="" />
                <h3>Grilled Chicken Quinoa


</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.

</p>
<div className="popular-checkbok">
    <p>cleanfood</p>
    <p>good materials</p>


</div>
</div>






</div>
    </div>
  )
}

export default Popularmenu