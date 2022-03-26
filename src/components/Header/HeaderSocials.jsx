import React from "react";

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/sang-%C4%91%E1%BA%B7ng-ng%E1%BB%8Dc-888220232/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/dnson2k1" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/sangfanreal/" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
