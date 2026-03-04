import { useState, useRef, useEffect } from "react";
import "../styles/businessCarousel.css";
import RightArrow from "../assets/icons/rightArrow.svg?react";
import LeftArrow from "../assets/icons/leftArrow.svg?react";
import BusinessPreview from "./BusinessPreview";

export default function BusinessCarousel({ businesses }) {
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
                businessTitle={business.title}
                price={business.price}
                price_discount={business.price_discount}
                isLastVisible={isLastVisible}
                highlights={business.highlights}
                imgSrc={business.coverImage}
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
