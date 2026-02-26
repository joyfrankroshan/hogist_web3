import React from "react";
import { motion } from "framer-motion";
import "./Catering.css";

import catering1 from "./assets/catering1.jpg";
import catering2 from "./assets/catering2.jpg";
import catering3 from "./assets/catering3.jpg";
import catering4 from "./assets/catering4.jpg";
import arrowImg from "./assets/catering.jpg";
import thundericon from "./assets/thunder.jpg";



/* TEXT ANIMATION (FROM LEFT) */
const textAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

/* CARD ANIMATION (FROM BOTTOM + STAGGER) */
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

function Catering() {
  const [activeCard, setActiveCard] = React.useState(null);
  const cards = [
    {
      img: catering1,
      title: "Corporate Catering",
      color: "green",
    },
    {
      img: catering2,
      title: "Private Events",
      color: "orange",
    },
    {
      img: catering3,
      title: "Meal Prep Plans",
      color: "green",
    },
    {
      img: catering4,
      title: "Special Diet Menus",
      color: "black",
    },
  ];

  return (
    
    


    <section className="catering">
      {/* TEXT */}
<motion.div
  className="catering-text"
  variants={textAnim}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}
>
  <img src={arrowImg} alt="arrow" className="catering-arrow" />

  <h5 className="catering-subtitle">What We Do</h5>

  {/* ✅ THUNDER ICON */}
  <img src={thundericon} alt="thunder" className="catering-thunder" />

  <h2 className="catering-main">
    <span className="delicious">Deliciously</span>{" "}
    <span>Healthy Catering</span> for Every Occasion
  </h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
  </p>
</motion.div>

      {/* CARDS */}
      <div className="catering-cards">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`catering-card ${card.color}`}
            variants={cardAnim}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={card.img} alt={card.title} />

            <div className="card-overlay">
              <h3>{card.title}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <span className="arrow-icon">↗</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Catering;
