import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Customizedfaqs.css";

import img1 from "./assets/customized.jpg";
import img2 from "./assets/herobackground1.jpg";
import img3 from "./assets/young.jpg";

function Customizedfaqs() {
  const [activeIndex, setActiveIndex] = useState(null);

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
      <div className="faq-wrapper">

        {/* LEFT */}
        <div>
          <h5 className="faq-sub">Customized FAQs</h5>
          <h2 className="faq-title">
           <span className="common">Common</span>  <span>Questions And Answers</span>
            <br /> About Services.
          </h2>

          <div className="faq-list">
            {faqs.map((item, i) => {
              const isOpen = activeIndex === i;

              return (
                <motion.div
                  key={i}
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  onClick={() =>
                    setActiveIndex(isOpen ? null : i)
                  }
                  layout
                >
                  {/* QUESTION */}
                  <div className="faq-question">
                    {item.q}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ↓
                    </motion.span>
                  </div>

                  {/* ANSWER */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT */}
        <div className="faq-right">
          <p className="faq-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus.
          </p>
          <button className="faq-btn">Get Answered →</button>

        <div className="faq-images">
  <AnimatePresence mode="sync">
    {[0, 1].map((slot) => {
      const imgIndex = (activeIndex + slot) % 3;
      const imgSrc = [img1, img2, img3][imgIndex];

      return (
        <motion.img
          key={`${slot}-${imgIndex}`}
          src={imgSrc}
          alt=""
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
      );
    })}
  </AnimatePresence>
</div>
        </div>

      </div>
    </section>
  );
}

export default Customizedfaqs;