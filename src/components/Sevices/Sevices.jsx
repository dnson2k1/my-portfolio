import React from "react";
import { BiCheck } from "react-icons/bi";

import "./services.scss";

const Sevices = () => {
  return (
    <section id="services" className="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <div className="services__card">
          <div className="services__card__head">UX/UI Design</div>
          <ul className="services__card__list">
            <li>
              <BiCheck className="services__card__list__icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sevices;
