import React, { useEffect, useState } from "react";
import "./nav.scss";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const menu = [
  {
    id: 1,
    path: "#",
    icon: <AiOutlineHome />,
    title: "Home",
  },
  {
    id: 2,
    path: "#about",
    icon: <AiOutlineUser />,
    title: "About",
  },
  {
    id: 3,
    path: "#experience",
    icon: <BiBook />,
    title: "Experience",
  },
  {
    id: 4,
    path: "#portfolio",
    icon: <RiServiceLine />,
    title: "Portfolio",
  },

  {
    id: 5,
    path: "#contact",
    icon: <BiMessageSquareDetail />,
    title: "Contact",
  },
];

const Nav = () => {
  const [navActive, setNavActive] = useState("#");
  const handleNavActive = (path) => {
    setNavActive(path);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position <= 579) {
      setNavActive("#");
    } else if (position >= 580 && position <= 1299) {
      setNavActive("#about");
    } else if (position >= 1300 && position <= 1899) {
      setNavActive("#experience");
    } else if (position >= 1900 && position <= 2500) {
      setNavActive("#portfolio");
    } else if (position >= 3600 && position < 4000) {
      setNavActive("#contact");
    } else {
      setNavActive(null);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navActive]);

  return (
    <nav className="nav">
      {console.log(scrollPosition)}
      {menu.length &&
        menu.map((item) => (
          <a
            key={item.id}
            href={item.path}
            className={navActive === item.path ? "active" : ""}
            onClick={() => handleNavActive(item.path)}
            title={item.title}
          >
            {item.icon}
          </a>
        ))}
    </nav>
  );
};

export default Nav;
