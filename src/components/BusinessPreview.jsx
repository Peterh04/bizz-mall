import "../styles/businnessPreview.css";

export default function BusinessPreview({
  imgSrc = "https://media.istockphoto.com/id/2228764569/photo/hispanic-female-software-developer-coding-at-night-in-office.jpg?s=1024x1024&w=is&k=20&c=OogqujZ77_B7xSI07frHAHCFw-O3IcjeyHLYLNLsrlw=",
  businessTitle = "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
  price = 2000,
  price_discount = 3000,
}) {
  return (
    <div className="business-preview" aria-label="business preview">
      <div className="business-meta" aria-label="business meta">
        <div className="img-container" aria-label="img container">
          <img src={imgSrc} alt="business_preview" />
        </div>
        <div className="business-tilte" aria-label="business title">
          {businessTitle}
        </div>
      </div>
      <div className="business-price" aria-label="business-price">
        <span className="current-price" aria-label="current price">
          {price} Ugx
        </span>
        <span className="prev-price" aria-label="previous price">
          <del>{price_discount} Ugx</del>
        </span>
      </div>
    </div>
  );
}
