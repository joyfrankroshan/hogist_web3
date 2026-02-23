import React from "react";
import { motion } from "framer-motion";
import "./Popularmenu.css";

import popularimg1 from "./assets/Popularmenu1.jpg";
import popularimg2 from "./assets/popularmenu2.jpg";
import popularimg3 from "./assets/popularmenu3.jpg";
import heroround1 from "./assets/heroround1.jpg";
import heroround2 from "./assets/heroround2.jpg";
import heroround3 from "./assets/heroround3.jpg";

/* TEXT FROM LEFT */
const textAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* CARDS FROM BOTTOM */
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

function Popularmenu() {
  const cards = [
    { img: popularimg1, title: "Clean Health Smoothies" },
    { img: popularimg2, title: "Zucchini Noodles" },
    { img: popularimg3, title: "Grilled Chicken Quinoa" },
  ];

  return (
    <section className="popularmenu">
      {/* HEADER */}
      <motion.div
        className="popularmenu-text"
        variants={textAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div>
          <h5>Popular Menu</h5>
          <h2>
            Customer <span>Favorites Food</span> Based From Choicing.
          </h2>
        </div>

        {/* HERO-STYLE TRUST ROW */}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </motion.div>

      {/* CARDS */}
      <div className="popularmenu-cards">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="popular-card"
            variants={cardAnim}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
<div className="popular-image">
  <img src={card.img} alt={card.title} />
</div>            <h3>{card.title}</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
              tellus.
            </p>

           <div className="popular-checkbok">
  <div className="check-item">
    <span className="check-icon">✔</span>
    <span>Clean Food</span>
  </div>
  <div className="check-item">
    <span className="check-icon">✔</span>
    <span>Good Materials</span>
  </div>
</div>

<div className="popular-card-footer">
  <span className="see-detail">
    See Detail <span className="arrow">→</span>
  </span>
  <div className="playy-btn">▶</div>
</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Popularmenu;
