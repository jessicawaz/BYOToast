/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav
      className="navbar is-spaced is-dark"
      id="my-nav"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a
          href="/"
          className="navbar-item"
          style={{ "font-weight": "bold", color: "#8db4ad" }}
        >
          keep it toasty.
        </a>

        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          role="button"
          id="burger"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          is-active
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicEx"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <a href="/" className="navbar-item">
            Home
          </a>
          <a href="/about" className="navbar-item">
            About
          </a>
          <a href="/order" className="navbar-item">
            Order
          </a>
          <a href="/contact" className="navbar-item">
            Contact
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">Menu</a>
            <div className="navbar-dropdown is-boxed">
              <a href="/drinks" className="navbar-item">
                Drinks
              </a>
              <hr class="navbar-divider"></hr>
              <a href="/toasts" className="navbar-item">
                Toasts
              </a>
              <hr class="navbar-divider"></hr>
              <a href="/bowls" className="navbar-item">
                Bowls
              </a>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <a href="/">
              <i className="fab fa-instagram social-link" />
            </a>
            <a href="/">
              <i className="fab fa-twitter social-link" />
            </a>
            <a href="/">
              <i className="fab fa-yelp social-link" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
