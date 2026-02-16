import React, { useState } from "react";
import "./Customizedfaqs.css";
import herobackground1 from "./assets/herobackground1.jpg";
import Customized from "./assets/customized.jpg";

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
    <div className="Customizedfaqs">
      <div className="customized-pills">

        {/* LEFT COLUMN */}
        <div>
          <div className="Customizedfaqs-text">
            <h5>Customized FAQs</h5>
            <h2>
              Common <span>questions and answers</span> about services.
            </h2>
          </div>

          {/* FAQ Pills */}
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq-pill ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="faq-question">
                {item.q}
                <span>{activeIndex === index ? "↑" : "↓"}</span>
              </div>

              {activeIndex === index && (
                <p className="faq-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="faq-right">
          <p className="faq-right-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit
            tellus.
          </p>

          <button className="faq-btn">Get Answered →</button>

          <div className="customized-img">
            <img src={Customized} alt="Customized food" />
            <img src={herobackground1} alt="Healthy background" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Customizedfaqs;
