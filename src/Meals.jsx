import React from "react";
import { motion } from "framer-motion";
import "./Meals.css";

/* TEXT FROM LEFT */
const textLeft = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* CARD FROM BOTTOM (STAGGER) */
const cardUp = {
  hidden: { y: 80, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function Meals() {
  return (
    <section className="meals">
      {/* TEXT */}
      <motion.div
        className="meals-text"
        variants={textLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h5>Meals Package</h5>
        <h3>
          Flexible Pricing Options For <span>Healthy food</span> package.
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </motion.div>

      {/* CARDS */}
      <div className="meals-card">
        {/* BASIC */}
        <motion.div
          className="meals-card1"
          variants={cardUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4>Basic Plan</h4>
          <p>A small river named Duden flows by their place and supplies</p>
          <h2>$ 59.29 / Month</h2>
          <a href="#">3 meals/week</a>
          <a href="#">Customized Meals</a>
          <a href="#">Essential Food</a>
          <a href="#">Moneyback Guarantee</a>
          <a href="#">Customer Support</a>
          <button>Get A Quote</button>
        </motion.div>

        {/* STANDARD */}
        <motion.div
          className="meals-card2"
          variants={cardUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="popular-badge">Most Popular</span>
          <h4>Standard Plan</h4>
          <p>A small river named Duden flows by their place and supplies</p>
          <h2>$ 89.49 / Month</h2>
          <a href="#">5 meals/week</a>
          <a href="#">Advanced Meals</a>
          <a href="#">Priority Delivery</a>
          <a href="#">Customized Meals</a>
          <a href="#">Healthy Guarantee</a>
          <button>Get A Quote</button>
        </motion.div>

        {/* PREMIUM */}
        <motion.div
          className="meals-card3"
          variants={cardUp}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h4>Premium Plan</h4>
          <p>A small river named Duden flows by their place and supplies</p>
          <h2>$ 149 / Month</h2>
          <a href="#">10 meals/week</a>
          <a href="#">Personalized Meals</a>
          <a href="#">Diet Food Optimization</a>
          <a href="#">Food Savings Guarantee</a>
          <a href="#">Smart Delivery</a>
          <button>Get A Quote</button>
        </motion.div>
      </div>
    </section>
  );
}

export default Meals;
