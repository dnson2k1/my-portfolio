import React from "react";

import "./portfolio.scss";

import IMG4 from "../../assets/portfolio4.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const portfolio = [
  {
    id: 1,
    title: "Ecomerce website use React",
    img: "https://cdn.dribbble.com/userupload/809128/file/original-1319a8e31a0574fb9a569ceaad96333b.jpg?compress=1&resize=1200x900&vertical=top",
    github: "https://github.com/dnson2k1/e-commerce-store-dns-phone",
    demo: "https://e-commerce-store-dns.netlify.app/",
  },
  {
    id: 2,
    title: "Todo App use React",
    img: "https://cdn.dribbble.com/users/4532032/screenshots/16586781/media/c65cdf3b3e0dcb909122ee572de4df63.jpg?compress=1&resize=1200x900&vertical=top",
    github: "https://github.com/dnson2k1/todo-app",
    demo: "https://todo-app-dns.netlify.app/",
  },
  {
    id: 3,
    title: "Landing Page use Tailwind",
    img: "https://cdn.dribbble.com/users/6047818/screenshots/17081860/media/970c2375fb5bb26666f3ed5001b38f9e.png?compress=1&resize=1200x900&vertical=top",
    github: "https://github.com/dnson2k1/dns-tailwind-repons",
    demo: "https://dnson2k1.github.io/dns-tailwind-repons/",
  },
  {
    id: 4,
    title: "Ecomerce website use Js",
    img: IMG4,
    github: "https://github.com/dnson2k1/store-phone",
    demo: "https://dnson2k1.github.io/store-phone/",
  },
  {
    id: 5,
    title: "Landing Page use Html/Sass",
    img: "https://cdn.dribbble.com/users/6047818/screenshots/17445125/media/a6a251775c837ea77a0bdd91a5f574d2.png?compress=1&resize=1200x900&vertical=top",
    github: "https://github.com/dnson2k1/a-happy-day",
    demo: "https://dnson2k1.github.io/a-happy-day/",
  },
  {
    id: 6,
    title: "Quick-View use Js",
    img: IMG6,
    github: "https://github.com/dnson2k1/quickview",
    demo: "https://dnson2k1.github.io/quickview/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolio.length &&
          portfolio.map((item) => (
            <div className="portfolio__item" key={item.id} data-aos="slide-up">
              <div className="portfolio__item__img">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item__btn">
                <a href={item.github} target="_blank" className="btn">
                  Github
                </a>
                <a href={item.demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
