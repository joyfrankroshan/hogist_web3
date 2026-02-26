import React from "react";
import { motion } from "framer-motion";
import "./Salad.css";
import appleicon from "./assets/apple.png"

/* TEXT FROM LEFT ANIMATION */
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

function Salad() {
  return (
    <section className="salad">
      <div className="salad-overlay"></div>

      {/* TEXT ONLY ANIMATES */}
      <motion.div
  className="salad-text"
  variants={textAnim}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.4 }}
>
  {/* ✅ ICON ABOVE HEADING */}
  <img src={appleicon} alt="apple" className="salad-icon" />

  <h2>
    <span className="ready">Ready to Eat</span> Healthier – Lets{" "}
    <span>Get Started</span> Today.
  </h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
    tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
  </p>

  <button className="salad-button">Contact Us →</button>
</motion.div>
    </section>
  );
}

export default Salad;
