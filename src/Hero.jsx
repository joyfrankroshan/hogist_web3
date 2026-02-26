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
import notepenicon from "./assets/notepen.png";
import handshakeicon from "./assets/handshake.png";
import smileicon from "./assets/smile.png";
import homeicon from "./assets/home.png";





import "./Hero.css";

/* ================= ANIMATIONS ================= */

/* TEXT FROM LEFT */
const textAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* STATS FROM BOTTOM */
const cardAnim = {
  hidden: { y: 80, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

/* ================= COUNTER ================= */
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
const bgSlideAnim = {
  initial: {
    x: "100%",
    scale: 1.1,
  },
  animate: {
    x: "0%",
    scale: 1.25,
    transition: {
      x: { duration: 1.4, ease: "easeInOut" },
      scale: { duration: 7, ease: "linear" }, // slow zoom
    },
  },
};

const bgVariants = {
  initial: {
    x: "100%",
    scale: 1.15,
  },
  animate: {
    x: "0%",
    scale: 1.25,
    transition: {
      x: { duration: 1.2, ease: "easeInOut" },
      scale: { duration: 7, ease: "linear" },
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};


function Hero() {
  const [loading, setLoading] = useState(true);
  const [startCount, setStartCount] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [bg1, bg2, bg3];
  useEffect(() => {
  backgrounds.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBg((prev) => (prev + 1) % backgrounds.length);
  }, 5000); // change bg every 5s

  return () => clearInterval(interval);
}, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => setStartCount(true), 500);
      return () => clearTimeout(t);
    }
  }, [loading]);

  if (loading) return <div className="page-loader"></div>;

  return (
    <div className="hero">
      {/* ===== STATIC BACKGROUND ===== */}
<motion.div
  key={currentBg}
  className="hero-bg-motion"
  style={{
    backgroundImage: `url(${backgrounds[currentBg]})`,
  }}
  initial={{
    scale: 1.15,
    backgroundPosition: "0% 50%",
  }}
  animate={{
    scale: 1.3,
    backgroundPosition: "100% 50%",
  }}
  transition={{
    duration: 12,
    ease: "linear",
  }}
/>
      <div className="hero-overlay"></div>

      {/* ===== TOP BAR ===== */}
      <div className="hero-top">
        <div className="herologo">
          <img src={herologo} alt="logo" />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="heronav">
          <a className="nav-home">Home</a>

          <div className="nav-dropdown">
            <span className="nav-home nav-link">About</span>
            <div className="dropdown-menu">
              <a>About Us</a>
              <a>Our Team</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-home nav-link">Service</span>
            <div className="dropdown-menu">
              <a>Our Service</a>
              <a>Detail Service</a>
              <a>Our Package</a>
            </div>
          </div>

          <div className="nav-dropdown">
            <span className="nav-home nav-link">Menus</span>
            <div className="dropdown-menu">
              <a>Our Menus</a>
              <a>Detail Menu</a>
            </div>
          </div>

          <button className="heronav-button">Get A Quotation</button>
        </div>
      </div>

      {/* ===== MOBILE OFFCANVAS MENU ===== */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-header">
          <img src={herologoMobile} alt="mobile logo" />
          <button
            onClick={() => {
              setMenuOpen(false);
              setOpenSubmenu(null);
            }}
          >
            ✕
          </button>
        </div>

        <nav className="mobile-nav">
          <a className="mobile-link active">Home</a>

          {/* ABOUT */}
          <div className="mobile-item">
            <div
              className="mobile-parent"
              onClick={() =>
                setOpenSubmenu(openSubmenu === "about" ? null : "about")
              }
            >
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
            <div
              className="mobile-parent"
              onClick={() =>
                setOpenSubmenu(openSubmenu === "service" ? null : "service")
              }
            >
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
            <div
              className="mobile-parent"
              onClick={() =>
                setOpenSubmenu(openSubmenu === "menus" ? null : "menus")
              }
            >
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
            <div
              className="mobile-parent"
              onClick={() =>
                setOpenSubmenu(openSubmenu === "pages" ? null : "pages")
              }
            >
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

          <button className="heronav-button mobile-btn">
            Get A Quotation
          </button>
        </nav>
      </div>

      {/* ===== TEXT ===== */}
      <motion.div className="herotext" variants={textAnim} initial="hidden" animate="show">
        <h4>Gourca Catering</h4>
        <h2>
          <span className="highlight">Your Trusted</span>{" "}
          <span>Healthy Catering</span> And Clean Food.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
      </motion.div>

      {/* ===== BUTTON + TRUST ===== */}
      <motion.div className="herobutton" variants={textAnim} initial="hidden" animate="show">
        <button className="getstarted-btn">Get Started →</button>
        <div className="heroround">
  <img src={heroround1} />
  <img src={heroround2} />
  <img src={heroround3} />

  <div className="heroround-text">
    <strong><p>890+ People Trust Us.</p></strong> 
    <p>Lorem ipsum dolor sit amet</p>
  </div>
</div>
      </motion.div>

      {/* ===== STATS ===== */}
      {/* ===== STATS ===== */}
<div className="herostats">
  {[
    {
      end: 250,
      label: "Unique Menus",
      type: "dark",
      suffix: "+",
      icon: notepenicon,
    },
    {
      end: 375,
      label: "Corporate Clients",
      type: "light",
      suffix: "+",
      icon: handshakeicon,
    },
    {
      end: 98,
      label: "Customer Rate",
      type: "light",
      suffix: "%",
      icon: smileicon,
    },
    {
      end: 75,
      label: "City Branch",
      type: "dark",
      suffix: "+",
      icon: homeicon,
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      className={`stat ${item.type}`}
      variants={cardAnim}
      custom={i}
      initial="hidden"
      animate="show"
    >
      {/* ICON */}
      <img src={item.icon} alt="" className="stat-icon" />

      <h3>
        <Counter end={item.end} start={startCount} />
        {item.suffix}
      </h3>
      <p>{item.label}</p>
    </motion.div>
  ))}
</div>

    
    </div>
  );
}

export default Hero;