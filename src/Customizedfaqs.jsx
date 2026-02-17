import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Customizedfaqs.css";
import herobackground1 from "./assets/herobackground1.jpg";
import Customized from "./assets/customized.jpg";

/* ANIMATIONS */
const leftAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const rightAnim = {
  hidden: { x: 80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const pillAnim = {
  hidden: { y: 40, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageUp = {
  hidden: { y: 60, opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

function Customizedfaqs() {
  const [activeIndex, setActiveIndex] = useState(2);

  const faqs = [
    {
      q: "What is the healthy foods ?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      q: "Vegetarian ready for ordering ?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      q: "This is 24 hours food ?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <section className="Customizedfaqs">
      <div className="customized-pills">

        {/* LEFT COLUMN */}
        <motion.div
          variants={leftAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="Customizedfaqs-text">
            <h5>Customized FAQs</h5>
            <h2>
              Common <span>questions and answers</span> about services.
            </h2>
          </div>

          {/* FAQ PILLS */}
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              className={`faq-pill ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              variants={pillAnim}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="faq-question">
                {item.q}
                <span>{activeIndex === index ? "↑" : "↓"}</span>
              </div>

              {activeIndex === index && (
                <p className="faq-answer">{item.a}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          className="faq-right"
          variants={rightAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="faq-right-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
            tellus.
          </p>

          <button className="faq-btn">Get Answered →</button>

          <div className="customized-img">
            <motion.img
              src={Customized}
              alt="Customized food"
              variants={imageUp}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            />
            <motion.img
              src={herobackground1}
              alt="Healthy background"
              variants={imageUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Customizedfaqs;
