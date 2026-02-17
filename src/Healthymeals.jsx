import React from "react";
import { motion } from "framer-motion";
import "./Healthymeals.css";

import img1 from "./assets/healthymeals1.jpg";
import img2 from "./assets/healthymeals2.jpg";
import img3 from "./assets/healthymeals3.jpg";
import img4 from "./assets/healthymeals4.jpg";

/* TEXT FROM LEFT */
const textAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* CARDS FROM BOTTOM (STAGGER) */
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

function Healthymeals() {
  const cards = [
    {
      img: img1,
      step: "01.",
      title: "First Choose Your Meals Plan",
      active: false,
    },
    {
      img: img2,
      step: "02.",
      title: "Customize Or Choose Your Menu",
      active: false,
    },
    {
      img: img3,
      step: "03.",
      title: "Place Your Order Choicing Menu",
      active: true,
    },
    {
      img: img4,
      step: "04.",
      title: "Enjoy Our Fresh Delivery Food",
      active: false,
    },
  ];

  return (
    <section className="healthymeals">
      {/* TEXT */}
      <motion.div
        className="healthymeals-text"
        variants={textAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h5>How Its Work</h5>

        <h2>
          Simple Steps To Enjoy Our <span>Healthy Clean</span> Meals.
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="healthymeals-cards">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className={`healthy-card ${card.active ? "active" : ""}`}
            variants={cardAnim}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className={`step-badge ${card.active ? "active" : ""}`}>
              {card.step}
            </span>

            <img src={card.img} alt={card.title} />

            <div className="card-content">
              <h3>{card.title}</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Healthymeals;
