import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
function Footer() {
  return (
    <footer id="info">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 footer__info">
            <h2>PHONE NUMBER :</h2>
            <p className="footer__text">+90501234567</p>
            <h2>ADRESS :</h2>
            <p className="footer__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
              expedita corporis animi magnam alias consequatur itaque maiores
              perspiciatis vel. Sapiente!
            </p>
          </div>
          <div className="col-12 col-sm-6 footer__links">
            <ul className="footer__ul">
              <li>
                <a href="">
                  Instagram <FaInstagram />
                </a>{" "}
              </li>
              <li>
                <a href="">
                  Twitter <FiTwitter />
                </a>{" "}
              </li>
              <li>
                <a href="">
                  Facebook <FaFacebookSquare />
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
