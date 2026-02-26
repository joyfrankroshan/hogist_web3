import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Client.css";

import clientbg from "./assets/clientbackground.jpg";
import healthymeals3 from "./assets/healthymeals3.jpg";
import nutriousmeals4 from "./assets/nutriousmeals4.jpg";
import clientImg from "./assets/client.jpg";
import clientlogo from "./assets/client-logo.jpg";

const testimonials = [
  {
    img: nutriousmeals4,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    name: "Mr. John Doe",
  },
  {
    img: healthymeals3,
    text:
      "Neque, ex, nam maxime eligendi blanditiis quis aperiam possimus praesentium distinctio.",
    name: "Mr. Alex Smith",
  },
  {
    img: clientImg,
    text:
      "Ullam veritatis assumenda explicabo autem consequuntur atque repellendus labore reprehenderit.",
    name: "Mr. David Lee",
  },
];

/* SLIDE VARIANTS */
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: { duration: 0.5, ease: "easeIn" },
  }),
};

function Client() {
  const [[index, direction], setIndex] = useState([0, 1]);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(([prev]) => [
        (prev + 1) % testimonials.length,
        1,
      ]);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setIndex(([prev]) => [
      (prev + 1) % testimonials.length,
      1,
    ]);

  const prevSlide = () =>
    setIndex(([prev]) => [
      (prev - 1 + testimonials.length) % testimonials.length,
      -1,
    ]);

  return (
    <div className="client">
      <div className="client-background">
        <img src={clientbg} alt="" />
      </div>

      <div className="client-overlay">
        {/* HEADER */}
        <div className="client-text">
          <div>
            <h5>CLIENT REVIEWS</h5>
            <h3>
              <span className="discover">Discover </span>What Our Clients Say{" "}
              <span>About Our Catering.</span>
            </h3>
          </div>

          <div className="client-buttons">
            <button  className="clientbutton"onClick={prevSlide}>←</button>
            <button className="clientbutton"onClick={nextSlide}>→</button>
          </div>
        </div>

        {/* SLIDER */}
        <div style={{ overflow: "hidden", maxWidth: "1400px", margin: "0 auto" }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              className="client-card-box"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="client-content">
                <img src={clientlogo} alt="" className="client-logo" />

                <p>{testimonials[index].text}</p>
                <span className="orange-line"></span>

                <h5>{testimonials[index].name}</h5>
                <h6>Client</h6>
              </div>

              <div className="client-image-box">
                <img src={testimonials[index].img} alt="" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DOTS */}
        <div className="card-dots">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`dot ${index === i ? "active" : ""}`}
              onClick={() =>
                setIndex([i, i > index ? 1 : -1])
              }
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
