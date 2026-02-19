import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import herologo from "./assets/herologo.jpg";
import herologoMobile from "./assets/headernewlogo.jpg";

import bg1 from "./assets/herobackground.jpg";
import bg2 from "./assets/herobackground1.jpg";
import bg3 from "./assets/herobackground2.jpg";

import heroround1 from "./assets/heroround1.jpg";
import heroround2 from "./assets/heroround2.jpg";
import heroround3 from "./assets/heroround3.jpg";

import "./Hero.css";

/* COUNTER */
function Counter({ end, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const inc = end / 60;

    const animate = () => {
      current += inc;
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
  const backgrounds = [bg1, bg2, bg3];

  const [currentBg, setCurrentBg] = useState(0);
  const [loading, setLoading] = useState(true);
  const [startCount, setStartCount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setStartCount(true), 800);
      return () => clearTimeout(t);
    }
  }, [loading]);

  useEffect(() => {
    const i = setInterval(() => {
      setCurrentBg((p) => (p + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(i);
  }, []);

  if (loading) return <div className="page-loader"></div>;

  return (
    <div className="hero">
      {/* BACKGROUND */}
      <AnimatePresence>
        <motion.div
          key={currentBg}
          className="hero-bg-motion"
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.18 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2 }, scale: { duration: 6 } }}
        />
      </AnimatePresence>

      <div className="hero-overlay"></div>

      {/* TOP BAR */}
      <div className="hero-top">
        <div className="herologo">
          <img src={herologo} alt="logo" />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span><span></span><span></span>
        </div>

        {/* DESKTOP NAV */}
        <div className="heronav">
          <a href="#" className="nav-home">Home</a>

          <div className="nav-dropdown">
            <span className="nav-home nav-link">About</span>
            <div className="dropdown-menu">
              <a href="#">About Us</a>
              <a href="#">Our Team</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-home nav-link">Service</span>
            <div className="dropdown-menu">
              <a href="#">Our Service</a>
              <a href="#">Detail Service</a>
              <a href="#">Our Package</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-home nav-link">Menus</span>
            <div className="dropdown-menu">
              <a href="#">Our Menus</a>
              <a href="#">Detail Menu</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-home nav-link">Pages</span>
            <div className="dropdown-menu">
              <a href="#">Contact Us</a>
              <a href="#">Faqs</a>
              <a  href="#">Testimonials</a>
                                          <a  href="#">404</a>

                            <a  href="#">Blog</a>
                                                        <a  href="#">Single Blog</a>



            </div>
          </div>

          <button className="heronav-button">Get A Quotation</button>
        </div>
      </div>

      {/* MOBILE OFFCANVAS */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src={herologoMobile} alt="mobile logo" />
          <button onClick={() => { setMenuOpen(false); setOpenSubmenu(null); }}>✕</button>
        </div>

        <nav className="mobile-nav">
          <a className="mobile-link active">Home</a>

          {/* ABOUT */}
          <div className="mobile-item">
            <div className="mobile-parent" onClick={() => setOpenSubmenu(openSubmenu === "about" ? null : "about")}>
              About
              <span className={openSubmenu === "about" ? "rotate" : ""}>⌄</span>
            </div>
            {openSubmenu === "about" && (
              <div className="mobile-submenu">
                <a>About Us</a>
                <a>Our Team</a>
              </div>
            )}
          </div>

          {/* SERVICE */}
          <div className="mobile-item">
            <div className="mobile-parent" onClick={() => setOpenSubmenu(openSubmenu === "service" ? null : "service")}>
              Service
              <span className={openSubmenu === "service" ? "rotate" : ""}>⌄</span>
            </div>
            {openSubmenu === "service" && (
              <div className="mobile-submenu">
                <a>Our Service</a>
                <a>Detail Service</a>
                <a>Our Package</a>
              </div>
            )}
          </div>

          {/* MENUS */}
          <div className="mobile-item">
            <div className="mobile-parent" onClick={() => setOpenSubmenu(openSubmenu === "menus" ? null : "menus")}>
              Menus
              <span className={openSubmenu === "menus" ? "rotate" : ""}>⌄</span>
            </div>
            {openSubmenu === "menus" && (
              <div className="mobile-submenu">
                <a>Our Menus</a>
                <a>Detail Menu</a>
              </div>
            )}
          </div>

          {/* PAGES */}
          <div className="mobile-item">
            <div className="mobile-parent" onClick={() => setOpenSubmenu(openSubmenu === "pages" ? null : "pages")}>
              Pages
              <span className={openSubmenu === "pages" ? "rotate" : ""}>⌄</span>
            </div>
            {openSubmenu === "pages" && (
              <div className="mobile-submenu">
                <a>Contact Us</a>
                <a>Faqs</a>
                <a>Testimonials</a>
                <a>404</a>
                <a>Blog</a>
                <a>Single Blog</a>
              </div>
            )}
          </div>

          <button className="heronav-button mobile-btn">Get A Quotation</button>
        </nav>
      </div>

      {/* CONTENT */}
      <div className="herotext">
        <h4>Gourca Catering</h4>
        <h2>
          <span className="highlight">Your Trusted</span>{" "}
          <span>Healthy Catering</span> And Clean Food.
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
      </div>

      <div className="herobutton">
        <button className="getstarted-btn">Get Started</button>
        <div className="heroround">
          <img src={heroround1} />
          <img src={heroround2} />
          <img src={heroround3} />
          <p><strong>890+</strong> People Trust Us.</p>
        </div>

      </div>

      <div className="herostats">
        <div className="stat dark"><h3><Counter end={250} start={startCount} />+</h3><p>Unique Menus</p></div>
        <div className="stat light"><h3><Counter end={375} start={startCount} />+</h3><p>Corporate Clients</p></div>
        <div className="stat light"><h3><Counter end={98} start={startCount} />%</h3><p>Customer Rate</p></div>
        <div className="stat dark"><h3><Counter end={75} start={startCount} />+</h3><p>City Branch</p></div>
      </div>
    </div>
  );
}

export default Hero;
