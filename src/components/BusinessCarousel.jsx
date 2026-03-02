import { useState, useRef, useEffect } from "react";
import "../styles/businessCarousel.css";
import RightArrow from "../assets/icons/rightArrow.svg?react";
import LeftArrow from "../assets/icons/leftArrow.svg?react";
import BusinessPreview from "./BusinessPreview";

export default function BusinessCarousel() {
  const [businesses] = useState([
    {
      imgSrc: "...",
      businessTitle: "Full Stack JavaScript Bootcamp",
      price: 180000,
      price_discount: 250000,
    },
    {
      imgSrc: "...",
      businessTitle: "React & Modern Frontend Mastery",
      price: 150000,
      price_discount: 220000,
    },
    {
      imgSrc: "...",
      businessTitle: "Node.js & Express Backend Course",
      price: 170000,
      price_discount: 240000,
    },
    {
      imgSrc: "...",
      businessTitle: "MongoDB & Database Design",
      price: 130000,
      price_discount: 200000,
    },
    {
      imgSrc: "...",
      businessTitle: "UI/UX Design for Developers",
      price: 120000,
      price_discount: 180000,
    },
    {
      imgSrc: "...",
      businessTitle: "REST APIs & Authentication with JWT",
      price: 160000,
      price_discount: 230000,
    },
    {
      imgSrc: "...",
      businessTitle: "Advanced CSS & Responsive Layouts",
      price: 110000,
      price_discount: 170000,
    },
    {
      imgSrc: "...",
      businessTitle: "Git, GitHub & Team Workflows",
      price: 90000,
      price_discount: 140000,
    },
    {
      imgSrc: "...",
      businessTitle: "Software Testing & Debugging Fundamentals",
      price: 100000,
      price_discount: 160000,
    },
    {
      imgSrc: "...",
      businessTitle: "Deploying Web Apps to Production",
      price: 140000,
      price_discount: 210000,
    },
  ]);

  const carouselRef = useRef(null);
  const [pageSize, setPageSize] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(309);

  const updateCarousel = () => {
    if (!carouselRef.current) return;

    const containerWidth = carouselRef.current.offsetWidth;
    const gap = 16;

    const minItemWidth = 250;

    const itemsFit = Math.floor((containerWidth + gap) / (minItemWidth + gap));

    const calculatedWidth = (containerWidth - gap * (itemsFit - 1)) / itemsFit;

    setPageSize(Math.max(1, itemsFit));
    setItemWidth(calculatedWidth);
  };

  useEffect(() => {
    updateCarousel();
    window.addEventListener("resize", updateCarousel);
    return () => window.removeEventListener("resize", updateCarousel);
  }, []);

  const showNextBusinesses = () => {
    setStartIndex((prev) =>
      Math.min(prev + pageSize, businesses.length - pageSize),
    );
  };

  const showPreviousBusinesses = () => {
    setStartIndex((prev) => Math.max(0, prev - pageSize));
  };

  return (
    <div
      className="business-carousel"
      ref={carouselRef}
      aria-label="business carousel"
      role="slider"
    >
      <div
        className="business-carousel-track"
        style={{
          transform: `translateX(-${startIndex * (itemWidth + 16)}px)`,
        }}
      >
        {businesses.map((business, index) => {
          const isLastVisible = index === startIndex + pageSize - 1;

          return (
            <div key={index} style={{ flex: `0 0 ${itemWidth}px` }}>
              <BusinessPreview
                businessTitle={business.businessTitle}
                price={business.price}
                price_discount={business.price_discount}
                isLastVisible={isLastVisible}
              />
            </div>
          );
        })}
      </div>

      {startIndex + pageSize < businesses.length && (
        <button
          onClick={showNextBusinesses}
          className="next-btn"
          aria-label="next button"
        >
          <RightArrow className="fa" />
        </button>
      )}
      {startIndex > 0 && (
        <button
          onClick={showPreviousBusinesses}
          className="previous-btn"
          aria-label="previous button"
        >
          <LeftArrow className="fa" />
        </button>
      )}
    </div>
  );
}
