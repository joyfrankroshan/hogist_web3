import React, { useState } from "react";
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

function Client() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="client">
      <div className="client-background">
        <img src={clientbg} alt="" />
      </div>

      <div className="client-overlay">
        {/* Header */}
        <div className="client-text">
          <div>
            <h5> CLIENT REVIEWS</h5>
            <h3>
              Discover What Our Clients Say{" "}
              <span>About Our Catering.</span>
            </h3>
          </div>

          <div className="client-buttons">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>
        </div>

        {/* Card */}
        {/* Card */}
<div className="client-card-box">
  <div className="client-content">
    <img src={clientlogo} alt="" className="client-logo" />

    <p>{testimonials[index].text}</p>

    {/* Orange line below paragraph */}
    <span className="orange-line"></span>

    <h5>{testimonials[index].name}</h5>
    <h6>Clients</h6>
  </div>

  <div className="client-image-box">
    <img src={testimonials[index].img} alt="" />
  </div>
</div>

{/* ✅ DOTS AFTER CARD BOX */}
<div className="card-dots">
  {testimonials.map((_, i) => (
    <span
      key={i}
      className={`dot ${index === i ? "active" : ""}`}
      onClick={() => setIndex(i)}
    ></span>
  ))}

</div>


        </div>
      </div>
    
  );
}

export default Client;
