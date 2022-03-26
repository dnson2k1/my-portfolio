import React from "react";
import "./about.scss";

import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import Me from "../../assets/me-about.jpg";

const about = [
  {
    id: 1,
    title: "Experience",
    sub: "0+ Years Working",
    icon: <FaAward />,
  },
  {
    id: 2,
    title: "Client",
    sub: "0+ Worldwide",
    icon: <FiUser />,
  },
  {
    id: 3,
    title: "Projects",
    sub: "8+ Completed",
    icon: <VscFolderLibrary />,
  },
];

const About = () => {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__left" data-aos="fade-right">
          <div className="about__left__img">
            <img src={Me} alt="me" />
          </div>
        </div>
        <div className="about__right" data-aos="fade-left">
          <div className="about__right__list">
            {about.length &&
              about.map((item) => (
                <article className="about__right__list__card" key={item.id}>
                  <div className="about__right__list__card__icon">
                    {item.icon}
                  </div>
                  <h5 className="about__right__list__card__title">
                    {item.title}
                  </h5>
                  <small className="about__right__list__card__sub">
                    {item.sub}
                  </small>
                </article>
              ))}
          </div>
          <div className="about__right__content">
            <p>
              I am a cheerful person who gets along with everyone. Always give
              my best to work and sports are indispensable to me. Although I
              have no experience in Frontend field, I am trying to develop
              myself to the best.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
