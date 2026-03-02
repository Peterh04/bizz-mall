import "../styles/businnessPreview.css";
import TickIcon from "../assets/icons/tick.svg?react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BusinessPreview({
  imgSrc = "https://media.istockphoto.com/id/2228764569/photo/hispanic-female-software-developer-coding-at-night-in-office.jpg?s=1024x1024&w=is&k=20&c=OogqujZ77_B7xSI07frHAHCFw-O3IcjeyHLYLNLsrlw=",
  businessTitle = "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
  price = 2000,
  price_discount = 3000,
  isLastVisible = false,
}) {
  let highlights = [
    "Master prompt writing science",
    "Identify stages of AI application",
    "Deal with AI hallucination",
  ];

  const navigate = useNavigate();
  return (
    <div className="business-preview-wrapper">
      <div className="business-preview">
        <div className="business-meta">
          <div className="img-container">
            <img src={imgSrc} alt="business_preview" />
          </div>
          <div className="business-tilte">{businessTitle}</div>
        </div>

        <div className="business-price">
          <span className="current-price">{price} Ugx</span>
          <span className="prev-price">
            <del>{price_discount} Ugx</del>
          </span>
        </div>
      </div>

      <div
        className={`business-description-modal ${
          isLastVisible ? "left-side" : "right-side"
        }`}
      >
        <a href="">{businessTitle}</a>

        <div className="business-description">
          Complete AI Engineer Training: Python, NLP, Transformers, LLMs
        </div>

        <div className="business-highlights">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="individual-highlight"
              aria-label="individual business highlights"
            >
              <TickIcon className="fa" />
              <p>{highlight}</p>
            </div>
          ))}
        </div>

        <button onClick={() => navigate("contact-us")}>Contact us</button>
      </div>
    </div>
  );
}
