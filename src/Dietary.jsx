import React from "react";
import { motion } from "framer-motion";
import "./Dietary.css";
import dietary from "./assets/dietary.jpg";
import catering3 from "./assets/catering3.jpg";

/* TEXT FROM LEFT */
const textAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

/* FROM BOTTOM */
const upAnim = {
  hidden: { y: 80, opacity: 0 },
  show: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

function Dietary() {
  return (
    <section className="dietary">
      {/* HEADER */}
      <motion.div
        className="dietary-text"
        variants={textAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h6 className="dietary-subtitle">Why Choice Us</h6>

        <h2>
          We <span>Give Clean Food</span> And Tailored To Your Dietary Needs.
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="dietary-content">
        {/* LEFT IMAGE CARD */}
        <motion.div
          className="dietary-image-card"
          variants={upAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={dietary} alt="Dietary" />

          <div className="dietary-overlay">
            <h4>Join Our Healthy Community</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
              tellus.
            </p>
            <button className="dietary-btn">Join Now</button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="dietary-right">
          {/* FEATURES */}
          <div className="dietary-features">
            <motion.div
              className="feature-box dark"
              variants={upAnim}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="feature-icon">🍃</span>
              <h6>Fresh Ingredients</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>

            <motion.div
              className="feature-box light"
              variants={upAnim}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="feature-icon">⚙️</span>
              <h6>Customized Plans</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </motion.div>
          </div>

          {/* VIDEO */}
          <motion.div
            className="dietary-video"
            variants={upAnim}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src={catering3} alt="Video" />
            <div className="play-btn">▶</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Dietary;
