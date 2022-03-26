import React, { useEffect, useRef } from "react";
import { init } from "ityped";

import CTA from "./CTA";
import "./header.scss";

import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const textRef = useRef(null);

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Wellcom to DNS portfolio", "Frontend Developer"],
    });
  }, []);

  return (
    <header>
      <div className="container header__container" data-aos="fade-up">
        <h5>Hello I'm</h5>
        <h1>Sang Dang</h1>
        <div className="text-light header__text" ref={textRef}></div>
        <CTA />
        <HeaderSocials />

        <div className="header__me">
          <img src={Me} alt="me" />
        </div>

        <a href="#about" className="header__scroll">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
