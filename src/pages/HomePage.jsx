import "../styles/homePage.css";
import HeroVideo from "../components/HeroVideo.jsx";
import Navbar from "../components/Navbar.jsx";
import BusinessCarousel from "../components/BusinessCarousel.jsx";
import CiscoLogo from "../assets/icons/citi_logo.svg?react";
import VimeoLogo from "../assets/icons/vimeo_logo_resized-2.svg?react";
import VolkswagenLogo from "../assets/icons/volkswagen_logo.svg?react";
import SamsungLogo from "../assets/icons/samsung_logo.svg?react";
import ProcterGamblelogo from "../assets/icons/procter_gamble_logo.svg?react";
import HewlettLogo from "../assets/icons/hewlett_packard_enterprise_logo.svg?react";
import EricssonLogo from "../assets/icons/ericsson_logo.svg?react";
import CitiLogo from "../assets/icons/citi_logo.svg?react";

import { useEffect, useState } from "react";
import StatsSelection from "../components/StatsSelection.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("New Listing");
  const [selectedOpportunity, setSelectedOpportunity] = useState("Featured");
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        window.instgrm.Embeds.process();
      };
      document.body.appendChild(script);
    }
  }, []);
  return (
    <main className="home-page" aria-label="Home page">
      <Navbar />

      <HeroVideo />

      <section
        className="introduction-section"
        aria-label="introduction section"
      >
        <div
          className="introduction-section-cotent"
          aria-label="introduction section content"
        >
          <div
            className="introduction-text-contet"
            aria-label="introduction text content"
          >
            <h3>Your Mall for Ready to Launch Business Ideas</h3>
            <p>
              Discover curated business ideas that are fully prepared for
              launch. A marketplace where businesses connect with businesses and
              customers making it easy to buy, sell, and grow ideas in one
              place.
            </p>
          </div>

          <div className="instagram-feed" aria-label="instagram feed preview">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DUiUi6kjPkB/"
              data-instgrm-version="14"
            />
          </div>
        </div>
      </section>
      <section
        className="business-preview-section"
        aria-label="business preview"
      >
        <div
          className="business-section-cotent"
          aria-label="business section content"
        >
          <div
            className="business-text-contet"
            aria-label="business text content"
          >
            <h2>Business on sale</h2>
            <div>
              Discover carefully selected businesses available for sale, each
              offering strong potential for growth and long-term success.
            </div>
          </div>
        </div>

        <section className="business-category" aria-label="business-category">
          <div className="business-selection" aria-label="business selection">
            <button
              className={`business-btn ${selected == "New Listing" ? "selected" : ""}`}
              aria-label="business button"
              onClick={() => setSelected("New Listing")}
            >
              New Listings
            </button>
            <button
              className={`business-btn ${selected == "Featured" ? "selected" : ""}`}
              aria-label="business button"
              onClick={() => setSelected("Featured")}
            >
              Featured
            </button>
          </div>

          <BusinessCarousel />
        </section>

        <section
          className="opportunities-category"
          aria-label="opportunities category"
        >
          <h3>Investment Opportunities</h3>
          <div>
            Discover carefully selected businesses opportunities available for
            you to venture into, each offering good returns.
          </div>

          <BusinessCarousel />
        </section>
        <section className="our-businesses" aria-label="our businesses">
          <h3>Our Businesses</h3>
          <div>
            Explore our diverse range of ventures, each built on strong
            foundations and designed for growth and success.
          </div>
          <BusinessCarousel />
        </section>
        <section className="clients" aria-label="clients">
          <div className="clients-showcase" aria-label="clients showcase">
            <h2>Trusted by 10,000+ companies and investors around the world</h2>
            <ul>
              <li className="logos">
                <CiscoLogo />
              </li>
              <li className="logos">
                <VimeoLogo />
              </li>
              <li className="logos">
                <VolkswagenLogo />
              </li>
              <li className="logos">
                <SamsungLogo />
              </li>
              <li className="logos">
                <ProcterGamblelogo />
              </li>
              <li className="logos">
                <HewlettLogo />
              </li>
              <li className="logos">
                <EricssonLogo />
              </li>
              <li className="logos">
                <CitiLogo />
              </li>
            </ul>
          </div>
        </section>

        <StatsSelection />
      </section>

      <section className="contact" aria-label="contact">
        <div className="contact-content" aria-label="contact content">
          <h2>Ready to turn dreams into reality? Let's get started now!</h2>
          <div>
            We help turn your dreams of becoming a businness manger and an
            investor.
          </div>
          <button onClick={() => navigate("/contact-us")}>CONTACT US</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
