import React from "react";
import ThemeToggler from "../theme-toggler";
import "./index.css";

const NAVLINKS = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "skills", href: "#skills" },
  { name: "project", href: "#project" },
  { name: "contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        <span className="plain__text">Ra</span>
        <span className="gradient__text">ma</span>
      </a>
      <ul className="nav__links">
        {NAVLINKS.map((navlink, index) => {
          return (
            <li className="nav__link" key={`${index}${navlink.name}`}>
              <a href={navlink.href}>{navlink.name}</a>
              <div className="nav__hover-effect"></div>
            </li>
          );
        })}
      </ul>
      <ThemeToggler />
    </nav>
  );
};

export default Navbar;
