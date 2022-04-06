import React from "react";
import toasty from "../res/toasty.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a href="/home" className="navbar-brand">
          <img src={toasty} height="208px" alt="Logo" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
