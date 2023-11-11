import { useRef } from "react";
import ThemeToggler from "../theme-toggler";
import "./index.css";
import { X, Menu } from "lucide-react";

const NAVLINKS = [
  { name: "home", href: "#home" },
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
  { name: "skills", href: "#skills" },
  { name: "project", href: "#project" },
  { name: "contact", href: "#contact" },
];

const Navbar = () => {
  const navLinkref = useRef<HTMLDivElement>(null);
  const handleMenu = () => {
    if (navLinkref.current) {
      navLinkref.current.classList.toggle("toggle");
    }
  };
  return (
    <header>
      <nav className="navbar">
        <a className="logo" href="/">
          <span className="plain__text">Ra</span>
          <span className="gradient__text">ma</span>
        </a>
        <div ref={navLinkref} className="nav__lists">
          <div className="close__btn">
            <button onClick={handleMenu}>
              <X />
            </button>
          </div>
          <ul className="nav__links">
            {NAVLINKS.map((navlink, index) => {
              return (
                <li
                  className="nav__link"
                  key={`${index}${navlink.name}`}
                  onClick={handleMenu}
                >
                  <a href={navlink.href}>{navlink.name}</a>
                  <div className="nav__hover-effect"></div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav__functionality_section">
          <ThemeToggler />
          <button className="menu" onClick={handleMenu}>
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
