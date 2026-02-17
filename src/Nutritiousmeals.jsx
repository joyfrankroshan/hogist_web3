import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Nutritious-meals.css";

import img1 from "./assets/nutriousmeals1.jpg";
import img2 from "./assets/nutriousmeals2.jpg";
import img3 from "./assets/nutriousmeals3.jpg";
import img4 from "./assets/nutriousmeals4.jpg";
import img5 from "./assets/nutriousmeals5.jpg";

/* LEFT TEXT ANIMATION */
const leftAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* RIGHT IMAGE ANIMATION */
const rightAnim = {
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

function NutritiousMeals() {
  const [activeImages, setActiveImages] = useState([img4]);
  const [activeIndex, setActiveIndex] = useState(3);

  const handleClick = (index, images) => {
    setActiveIndex(index);
    setActiveImages(images);
  };

  return (
    <section className="nutritiousmeals">
      <div className="nm-container">

        {/* LEFT */}
        <motion.div
          className="nm-left"
          variants={leftAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h5 className="nm-subtitle">Who We Are</h5>

          <h2 className="nm-title">
            We Committed To <span>Healthy Living</span> And Providing
            Nutritious Meals.
          </h2>

          <p className="nm-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ut elit tellus, luctus nec ullamcorper mattis.
          </p>

          <div className="nm-features">
            <button
              className={`nm-pill ${activeIndex === 0 ? "selected" : ""}`}
              onClick={() => handleClick(0, [img1])}
            >
              Healthy And Clean Food
            </button>

            <button
              className={`nm-pill ${activeIndex === 1 ? "selected" : ""}`}
              onClick={() => handleClick(1, [img2, img5])}
            >
              Good For Any People
            </button>

            <button
              className={`nm-pill ${activeIndex === 2 ? "selected" : ""}`}
              onClick={() => handleClick(2, [img3])}
            >
              Delivery Catering Ready
            </button>

            <button
              className={`nm-pill primary ${activeIndex === 3 ? "selected" : ""}`}
              onClick={() => handleClick(3, [img4])}
            >
              Clean Food Grade Certification
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className={`nm-right ${activeImages.length === 2 ? "double" : ""}`}>
          {activeImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt="Nutritious meals"
              variants={rightAnim}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default NutritiousMeals;
