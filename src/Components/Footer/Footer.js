import React from "react";
import "./Footer.scss";
import LOGO from "../../Assets/Images/logo-footer.png";

import { FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer__wrapper">
        <div className="f__lt">
          <img src={LOGO} alt="Logo" />
          <div className="socials">
            <a href="/" className="icon" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="/" className="icon" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="/" className="icon" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
          <div className="footer_copyright">
            <span>
              {" "}
              <FontAwesomeIcon icon={faCopyright} className="iconnnnn" />{" "}
            </span>
            Copy Right 2023 <br></br>
            <span style={{ marginLeft: "12px" }}>
              &nbsp; All rights reserved
            </span>
          </div>
        </div>
        <div className="ft-rtt">
          <div className="f__md">
            <h1>Services</h1>
            <br></br>
            <ul>
              <li className="f-links">
                <a href="/">Design</a>
              </li>
              <li className="f-links">
                <a href="/">Coding</a>
              </li>
              <li className="f-links">
                <a href="/">Development</a>
              </li>
              <li className="f-links">
                <a href="/">Marketing</a>
              </li>
              <li className="f-links">
                <a href="/">Digital Marketing</a>
              </li>
            </ul>
          </div>
          <div className="f__md">
            <h1>Product</h1>
            <br></br>
            <ul>
              <li className="f-links">
                <a href="/">Hotel Marnagement</a>
              </li>
              <li className="f-links">
                <a href="/">Rent Management</a>
              </li>
              <li className="f-links">
                <a href="/">Micro-Finance</a>
              </li>
              <li className="f-links">
                <a href="/">Industry</a>
              </li>
              <li className="f-links">
                <a href="/">Dhoko</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
