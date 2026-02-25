import React from "react";
import { motion } from "framer-motion";
import "./Recepe.css";

import recepe from "./assets/recepe.jpg";
import recepe1 from "./assets/recepe1.jpg";
import recepe2 from "./assets/recepe2.jpg";

/* ANIMATIONS */
const textLeft = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const cardUp = {
  hidden: { y: 60, opacity: 0 },
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

const buttonUp = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { delay: 1, duration: 0.6, ease: "easeOut" },
  },
};

function Recepe() {
  return (
    <section className="Receepe">
      {/* TEXT */}
      <motion.div
        className="recepe-text"
        variants={textLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h5>Blog Content</h5>
        <h2>
          Lets <span className="discover">Discover</span> Our Healthy Eating <span>Tips & Recipes.</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="recepe-card">
        {[recepe, recepe1, recepe2].map((img, i) => (
          <motion.div
            key={i}
            className={`recepe-card${i + 1}`}
            variants={cardUp}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
<motion.img
  src={img}
  alt=""
  className="recepe-img"
  whileHover={{ scale: 1.05, rotate: 3 }}
  transition={{ duration: 0.35, ease: "easeOut" }}
/>            <h3>
              {i === 0 &&
                "Our Commitment To Fresh and Clean Ingredients"}
              {i === 1 &&
                "How Healthy Catering can Boost your Team's"}
              {i === 2 &&
                "Top 7 Clean Food Catering Menu Ideas"}
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
          </motion.div>
        ))}
      </div>

      {/* BUTTON */}
      <motion.div
        className="recepe-button"
        variants={buttonUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <button>Discover Blog</button>
      </motion.div>
    </section>
  );
}

export default Recepe;
