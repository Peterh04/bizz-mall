import "../styles/adminNavbar.css";
import logo from "../assets/oneLoveClub.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function AdminNavbar() {
  const [show, setShow] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`AdminNavbar ${show ? "AdminNavbar--visible" : "AdminNavbar--hidden"}`}
      role="navigation"
      aria-label="navbar"
    >
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      <div className="nav-menu desktop">
        <NavLink
          to={"/admin"}
          end
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link "
          }
        >
          Create
        </NavLink>
        <NavLink
          to={"/admin/manage-businesses"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Manage businesses
        </NavLink>
        <NavLink
          to={"/admin/feature"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Feature
        </NavLink>
        <NavLink
          to={"/admin/investments"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Investments
        </NavLink>
        <NavLink
          to={"/logout"}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Logout
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
