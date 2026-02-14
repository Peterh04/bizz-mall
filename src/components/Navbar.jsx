import logo from "../assets/oneLoveClub.png";
import "../styles/navbar.css";
import SearchIcon from "../assets/icons/search.svg?react";
import { useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`navbar ${show ? "nnavbar--visible" : "navbar--hidden"}`}
      role="navigation"
      aria-label="navbar"
    >
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <form
        action=""
        className="search-form"
        aria-label="search form"
        role="search"
      >
        <div className="search-bar" aria-label="search bar" role="searchbox">
          <div className="search-button" aria-label="search button">
            <SearchIcon className="fa" />
          </div>
          <input
            type="text"
            placeholder="Search for anything"
            className="search-input"
            aria-label="search "
          />
        </div>
      </form>

      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      <div className="nav-menu desktop">
        <a href="#" aria-label="Home" className="">
          Home
        </a>
        <a href="#" aria-label="Shop">
          Shop
        </a>
        <a href="" aria-label="Contact">
          Contact
        </a>
        <a href="about us" aria-label="About us">
          About us
        </a>
      </div>

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* Sliding Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✕
        </button>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
        <a href="#">About us</a>
      </div>
    </nav>
  );
}
