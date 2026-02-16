import React from "react";
import "./Footer.css";
import herologo from "./assets/herologo.jpg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">


        {/* BRAND */}
        <div className="footer-brand">
  {/* LOGO ON TOP */}
  <img
    src={herologo}
    alt="Gourca Logo"
    className="footer-logo-img"
  />

  {/* PARAGRAPH BELOW LOGO */}
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
  </p>

  {/* CONTACT */}
  <div className="footer-contact">
    <span>✉ Hello@email.co</span>
    <span>☎ +44 123 456 789</span>
  </div>
</div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="#">Homepage</a>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Our Menus</a>
          <a href="#">Our Package</a>
          <a href="#">Contact Us</a>
        </div>

        {/* FEATURED LINKS */}
        <div className="footer-links">
          <h4>Featured Links</h4>
          <a href="#">Customized Food</a>
          <a href="#">Fully Diet Menus</a>
          <a href="#">Healthy Clean Food</a>
          <a href="#">Food Certificate</a>
          <a href="#">Healthy Certificate</a>
          <a href="#">Refund Policy</a>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Subscribe Our Newsletter</h4>
          <p>Get Our Latest Update & New Offers Sales Discount</p>

          <div className="footer-socials">
            <span>f</span>
            <span>t</span>
            <span>▶</span>
            <span>P</span>
          </div>

          <div className="footer-input">
            <input type="email" placeholder="Email" />
            <button>→</button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>ALLRIGHT RESERVED - EIGHTHEME TEMPLATE KIT</p>
      </div>
    </footer>
  );
}

export default Footer;
