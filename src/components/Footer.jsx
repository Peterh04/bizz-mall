import "../styles/footer.css";

import logoWhite from "../assets/oneLoveClubLogo.png";
import MailIcon from "../assets/icons/mail.svg?react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import LocationIcon from "../assets/icons/location.svg?react";
import DoubleArrow from "../assets/icons/double-arrow.svg?react";
import { useNavigate } from "react-router-dom";
useNavigate;

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer
      aria-label="footer navbar"
      role="navigation"
      className="footer-navbar"
    >
      <div className="footer-content" aria-label="footer content">
        <div className="contact-info" aria-label="contact-info">
          <div className="logo-container">
            <img src={logoWhite} alt="logo" className="logo" />
          </div>
          <div className="info-container" aria-label="info container">
            <PhoneIcon className="fa" />
            <a href="tel:+256756120312">+256-756-120-312</a>
          </div>
          <div className="info-container" aria-label="info container">
            <MailIcon className="fa" />
            <a href="mailto:someone@example.com">kalema@gmail.com</a>
          </div>
          <div className="info-container" aria-label="info container">
            <LocationIcon className="fa" />
            <a>Kampala, Uganda</a>
          </div>
        </div>
        <div className="quick-links" aria-label="quick links">
          <h4>Quick Link</h4>
          <div className="info-container" aria-label="info container">
            <DoubleArrow className="fa" />
            <a>Home</a>
          </div>
          <div className="info-container" aria-label="info container">
            <DoubleArrow className="fa" />
            <a>Shop</a>
          </div>
          <div className="info-container" aria-label="info container">
            <DoubleArrow className="fa" />
            <a>About Us</a>
          </div>

          <div className="info-container" aria-label="info container">
            <DoubleArrow className="fa" />
            <a
              onClick={() => {
                navigate("/contact-us");
              }}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="map" aria-label="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7590318177454!2d32.58188397502408!3d0.3123538996845828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbc7e7b71d8e9%3A0x7565c3a0e37a217c!2s16%20Kampala%20Road%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2ske!4v1771050439228!5m2!1sen!2ske"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kampala Location Map"
            className="map"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
