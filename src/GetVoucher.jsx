import React from "react";
import { motion } from "framer-motion";
import "./GetVoucher.css";

import heroround1 from "./assets/heroround1.jpg";
import heroround2 from "./assets/heroround2.jpg";
import heroround3 from "./assets/heroround3.jpg";
import img2 from "./assets/healthymeals2.jpg";


/* ROUND IMAGES */
const roundAnim = {
  hidden: { scale: 0.6, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const roundImg = {
  hidden: { scale: 0.6, opacity: 0 },
  show: { scale: 1, opacity: 1 },
};

/* TEXT */
const textAnim = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
/* ANIMATION */
const leftAnim = {
  hidden: { x: -60, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
function GetVoucher() {
  return (
    <div
  className="getVoucher"
  style={{
    backgroundImage: `url(${img2})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  {/* ANIMATED CONTENT */}
  <motion.div
    className="getVoucher-text"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.4 }}
  >
    {/* ROUND IMAGES */}
    <motion.div
      className="getVoucher-round"
      variants={roundAnim}
    >
      <motion.img variants={roundImg} src={heroround1} alt="user" />
      <motion.img variants={roundImg} src={heroround2} alt="user" />
      <motion.img variants={roundImg} src={heroround3} alt="user" />
    </motion.div>

    {/* TEXT */}
    <motion.h2 variants={textAnim}>
      Get <span className="your">Your</span> First Meal – Claim Your{" "}
      <span>20% Off Voucher.</span>
    </motion.h2>

    <motion.p variants={textAnim}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
      tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
    </motion.p>
  </motion.div>

  {/* STATIC EMAIL BOX */}
  <div className="getVoucher-email">
    <input type="email" placeholder="Enter your email address" />
    <button>Get Voucher →</button>
  </div>
</div>
  );
}

export default GetVoucher;
