import React from "react";
import { motion } from "framer-motion";
import "./GetVoucher.css";

import heroround1 from "./assets/heroround1.jpg";
import heroround2 from "./assets/heroround2.jpg";
import heroround3 from "./assets/heroround3.jpg";
import img2 from "./assets/healthymeals2.jpg";

/* ANIMATION */
const leftAnim = {
  hidden: { x: -80, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
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
      {/* TEXT CONTENT – ANIMATED */}
      <motion.div
        className="getVoucher-text"
        variants={leftAnim}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        {/* ROUND IMAGES */}
        <div className="getVoucher-round">
          <img src={heroround1} alt="user" />
          <img src={heroround2} alt="user" />
          <img src={heroround3} alt="user" />
        </div>

        <h2>
          Get Your First Meal – Claim Your{" "}
          <span>20% Off Voucher.</span>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div className="getVoucher-email">
          <input type="email" placeholder="Enter your email address" />
          <button>Get Voucher →</button>
        </div>
      </motion.div>
    </div>
  );
}

export default GetVoucher;
