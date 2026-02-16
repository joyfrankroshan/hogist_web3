import React, { useEffect, useState } from "react";
import herologo from "./assets/herologo.jpg";
import herobackground from "./assets/herobackground.jpg";
import herobackground1 from "./assets/herobackground1.jpg";
import herobackground2 from "./assets/herobackground2.jpg";
import heroround1 from "./assets/heroround1.jpg";
import heroround2 from "./assets/heroround2.jpg";
import heroround3 from "./assets/heroround3.jpg";
import "./Hero.css";

function Hero() {
  const backgrounds = [
    herobackground,
    herobackground1,
    herobackground2,
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${backgrounds[currentBg]})`,
      }}
    >
      {/* LOGO */}
      <div className="herologo">
        <img src={herologo} alt="logo" />
      </div>

      {/* NAVBAR (DESKTOP) */}
      <div className="heronav">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Menus</a>
        <a href="#">Pages</a>
        <button className="heronav-button">Get A Quotation</button>
      </div>

      {/* HAMBURGER (MOBILE) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a onClick={() => setMenuOpen(false)}>Home</a>
        <a onClick={() => setMenuOpen(false)}>About</a>
        <a onClick={() => setMenuOpen(false)}>Services</a>
        <a onClick={() => setMenuOpen(false)}>Menus</a>
        <a onClick={() => setMenuOpen(false)}>Pages</a>
        <button>Get A Quotation</button>
      </div>

      {/* HERO TEXT */}
      <div className="herotext">
        <h4>Gourca Catering</h4>
        <h2>Your Trusted Healthy Catering And Clean Food.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
      </div>

      {/* CTA + TRUST */}
      <div className="herobutton">
        <button>Get Started</button>

        <div className="heroround">
          <img src={heroround1} alt="" />
          <img src={heroround2} alt="" />
          <img src={heroround3} alt="" />
          <p>
            <strong>890+</strong> People Trust Us.
            <br />
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="herostats">
        <div className="stat dark">
          <h3>250+</h3>
          <p>Unique Menus</p>
        </div>
        <div className="stat light">
          <h3>375+</h3>
          <p>Corporate Clients</p>
        </div>
        <div className="stat light">
          <h3>98%</h3>
          <p>Customer Rate</p>
        </div>
        <div className="stat dark">
          <h3>75+</h3>
          <p>City Branch</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
