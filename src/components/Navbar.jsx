import logo from "../assets/oneLoveClub.png";
import "../styles/navbar.css";
import SearchIcon from "../assets/icons/search.svg?react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link "
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/shop"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to={"/contact-us"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to={"/about-us"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About us
        </NavLink>
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
