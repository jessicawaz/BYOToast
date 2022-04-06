import React from "react";
import toasty from "../res/toasty.png";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src={toasty} alt="Logo" height={208} />
        </a>
        <button
          type="button"
          class="navbar-toggler bg-light"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="collapsibleNavbar"
        >
          <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Order
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                About
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                data-toggle="dropdown"
                aria-haspopup="true"
                role="button"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="/">
                    Drinks
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Toasts
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="/">
                    Bowls
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <button className="btn">Sign Up</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
