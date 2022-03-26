import React from "react";

import { BsPatchCheckFill } from "react-icons/bs";

import "./experience.scss";

const FE = [
  {
    id: 1,
    icon: <BsPatchCheckFill />,
    title: "HTML",
    sub: "Intermediate",
  },
  {
    id: 2,
    icon: <BsPatchCheckFill />,
    title: "Javascripts",
    sub: "Intermediate",
  },
  {
    id: 3,
    icon: <BsPatchCheckFill />,
    title: "Tailwind",
    sub: "Intermediate",
  },
  {
    id: 4,
    icon: <BsPatchCheckFill />,
    title: "CSS",
    sub: "Intermediate",
  },
  {
    id: 5,
    icon: <BsPatchCheckFill />,
    title: "Bootsraps",
    sub: "Intermediate",
  },
  {
    id: 6,
    icon: <BsPatchCheckFill />,
    title: "ReactJS",
    sub: "Intermediate",
  },
];

const Tools = [
  {
    id: 1,
    icon: <BsPatchCheckFill />,
    title: "VS Code",
    sub: "Intermediate",
  },
  {
    id: 2,
    icon: <BsPatchCheckFill />,
    title: "Github",
    sub: "Intermediate",
  },
  {
    id: 3,
    icon: <BsPatchCheckFill />,
    title: "Word",
    sub: "Intermediate",
  },
  {
    id: 4,
    icon: <BsPatchCheckFill />,
    title: "Postman",
    sub: "Intermediate",
  },
  {
    id: 5,
    icon: <BsPatchCheckFill />,
    title: "SQL Server",
    sub: "Intermediate",
  },
  {
    id: 6,
    icon: <BsPatchCheckFill />,
    title: "Xamp",
    sub: "Intermediate",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__cards" data-aos="fade-up-right">
          <h2>Frontend Development</h2>
          <div className="experience__skill">
            {FE.length &&
              FE.map((item) => (
                <div className="experience__skill__content" key={item.id}>
                  <div className="experience__skill__content__icon">
                    {item.icon}
                  </div>
                  <div className="experience__skill__content__info">
                    <h3>{item.title}</h3>
                    <small>{item.sub}</small>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="experience__cards" data-aos="fade-down-left">
          <h2>Frontend Tools</h2>
          <div className="experience__skill">
            {Tools.length &&
              Tools.map((item) => (
                <div className="experience__skill__content" key={item.id}>
                  <div className="experience__skill__content__icon">
                    {item.icon}
                  </div>
                  <div className="experience__skill__content__info">
                    <h3>{item.title}</h3>
                    <small>{item.sub}</small>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
