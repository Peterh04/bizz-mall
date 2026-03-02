import { useNavigate } from "react-router-dom";
import "../styles/business.css";
import { useState } from "react";

export default function Business({
  title,
  description,
  id,
  coverImageSrc = "https://media.istockphoto.com/id/1589593378/photo/filter-coffee.jpg?s=1024x1024&w=is&k=20&c=bsnRd194V6hK160gOoElY7fpq-QqidfEZgGlyowrR0g=",
}) {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);

  const MAX_WORDS = 25;

  const words = description.trim().split(/\s+/);
  const isLongText = words.length > MAX_WORDS;

  const displayText = isExpanded
    ? description
    : words.slice(0, MAX_WORDS).join(" ") + (isLongText ? "..." : "");

  return (
    <div
      className="business"
      aria-label="business"
      onClick={() => navigate(`/admin/manage-businesses/${id}`)}
    >
      <div
        className="business-image-container"
        aria-label="busines image container"
      >
        <img
          className="business-image-cover"
          aria-label="busines image cover"
          src={coverImageSrc}
        ></img>
      </div>
      <div className="business-content" aria-label="business content">
        <h3>{title}</h3>
        {displayText}{" "}
      </div>
    </div>
  );
}
