import React, { useEffect, useState } from "react";
import herologo from "./assets/herologo.jpg";
import herobackground from "./assets/herobackground.jpg";
import herobackground1 from "./assets/herobackground1.jpg";
import herobackground2 from "./assets/herobackground2.jpg";
import heroround1 from "./assets/heroround1.jpg";
import heroround2 from "./assets/heroround2.jpg";
import heroround3 from "./assets/heroround3.jpg";
import "./Hero.css";

/* COUNTER (STARTS ONLY WHEN TRIGGERED) */
function Counter({ end, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 900;
    const increment = end / (duration / 16);

    const animate = () => {
      current += increment;
      if (current < end) {
        setCount(Math.ceil(current));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [end, start]);

  return <>{count}</>;
}

function Hero() {
  const backgrounds = [
    herobackground,
    herobackground1,
    herobackground2,
  ];

  const [currentBg, setCurrentBg] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [startCount, setStartCount] = useState(false);

  /* WHITE SCREEN */
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  /* START COUNTER AFTER BOX ANIMATION */
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setStartCount(true), 800);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  /* BACKGROUND SLIDER */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className="page-loader"></div>;
  }

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
    >
      {/* HERO TOP BAR */}
      <div className="hero-top">
        <div className="herologo">
          <img src={herologo} alt="logo" />
        </div>

        <div className="heronav">
          <a href="#" className="nav-home">Home</a>

          <div className="nav-dropdown">
            <span className="nav-link">About</span>
            <div className="dropdown-menu">
              <a href="#">About Us</a>
              <a href="#">Our Team</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-link">Services</span>
            <div className="dropdown-menu">
              <a href="#">Our Services</a>
              <a href="#">Detail Service</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-link">Menus</span>
            <div className="dropdown-menu">
              <a href="#">Our Menu</a>
              <a href="#">Detailed Menu</a>
            </div>
          </div>

          <button className="heronav-button">Get A Quotation</button>
        </div>
      </div>

      {/* HERO TEXT */}
      <div className="herotext">
        <h4>Gourca Catering</h4>
        <h2>
          Your Trusted <span>Healthy Catering</span> And Clean Food.
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* CTA */}
      <div className="herobutton">
<button className="getstarted-btn">Get Started</button>

        <div className="heroround">
          <img src={heroround1} alt="" />
          <img src={heroround2} alt="" />
          <img src={heroround3} alt="" />
          <p>
            <strong>890+</strong> People Trust Us.
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="herostats">
        <div className="stat dark">
          <h3><Counter end={250} start={startCount} />+</h3>
          <p>Unique Menus</p>
        </div>

        <div className="stat light">
          <h3><Counter end={375} start={startCount} />+</h3>
          <p>Corporate Clients</p>
        </div>

        <div className="stat light">
          <h3><Counter end={98} start={startCount} />%</h3>
          <p>Customer Rate</p>
        </div>

        <div className="stat dark">
          <h3><Counter end={75} start={startCount} />+</h3>
          <p>City Branch</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
