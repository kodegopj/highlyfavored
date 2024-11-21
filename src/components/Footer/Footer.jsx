import React from "react";
import "../../Styles/Footer.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">HighVision Media</h1>

        <ul className="footer__list">
          <li>
          <Link to="/"> <b>Home</b></Link>
          
          </li>

          <li>
          <Link to="/about"> <b>About</b></Link>
          </li>

          <li>
          <Link to="/portfolio"> <b>Portfolio</b></Link>
          </li>

          <li>
          <Link to="/contact"> <b>Contacts</b></Link>
          </li>
        </ul>
        

        <div className="footer__social">
          {/* <a
            href="https://github.com/kodegopj"
            className="footer__social-link"
            target="_blank"
          >
            <SiMessenger/>
          </a>
          <a href="https://www.linkedin.com/in/paul-john-cunanan-b91176297" className="footer__social-link" target="_blank">
            <FaLinkedin />
          </a> */}
          {/* <a
            href="https://www.facebook.com/pauljohn.cunanan.14"
            className="footer__social-link"
            target="_blank"
          >
            <FaFacebook />
          </a> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
