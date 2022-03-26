import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">
      <a href="#" className="footer__logo">
        DN SANG
      </a>
      <ul className="footer__list" data-aos="fade-up">
        <li className="footer__list__item">
          <a href="#" className="footer__list__link">
            Home
          </a>
        </li>
        <li className="footer__list__item">
          <a href="#about" className="footer__list__link">
            About
          </a>
        </li>
        <li className="footer__list__item">
          <a href="#experience" className="footer__list__link">
            Experience
          </a>
        </li>
        <li className="footer__list__item">
          <a href="#portfolio" className="footer__list__link">
            Portfolio
          </a>
        </li>
        <li className="footer__list__item">
          <a href="#testimonials" className="footer__list__link">
            Testimonials
          </a>
        </li>
        <li className="footer__list__item">
          <a href="#contact" className="footer__list__link">
            Contact
          </a>
        </li>
      </ul>
      <div className="footer__socials" data-aos="fade-up">
        <a href="https://www.facebook.com/sangfanreal/" target="_blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/dn.sang_/" target="_blank">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/sang-%C4%91%E1%BA%B7ng-ng%E1%BB%8Dc-888220232/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__copyright" data-aos="fade-up">
        <small>&copy; DN SANG. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
