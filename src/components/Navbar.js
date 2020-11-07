import React from "react";
import logowhite from "../images/logowhite.gif";
import "./Navbar.css";

function Navbar() {
  const hideNav = () => {
    document.getElementsByClassName("navbar-collapse")[0].classList =
      "collapse navbar-collapse hide";
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a
          onClick={() => {
            hideNav();
          }}
          className="navbar-brand"
          href="#"
        >
          <img className="logo" src={logowhite} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a
                onClick={() => {
                  hideNav();
                }}
                className="nav-link"
                href="#home"
              >
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  hideNav();
                }}
                className="nav-link"
                href="#gallery"
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  hideNav();
                }}
                className="nav-link"
                href="#aboutus"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  hideNav();
                }}
                className="nav-link"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  hideNav();
                }}
                className="nav-link"
                href="#info"
              >
                Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
