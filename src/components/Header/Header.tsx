import { useEffect, useState } from "react";
import { profile } from "../../data/profile";
import Contact from "../Contact/Contact";
import "./Header.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="header">
      <a className="header__brand" href="#home">
        {profile.name}
      </a>

      <button
        type="button"
        className="header__menu-toggle"
        aria-expanded={isOpen}
        aria-controls="header-nav"
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <line
              x1="5"
              y1="5"
              x2="19"
              y2="19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="19"
              y1="5"
              x2="5"
              y2="19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <line
              x1="4"
              y1="7"
              x2="20"
              y2="7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="4"
              y1="17"
              x2="20"
              y2="17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      <nav
        id="header-nav"
        className={`header__nav${isOpen ? " header__nav--open" : ""}`}
        aria-label="Main navigation"
      >
        <a className="header__link" href="#home" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a className="header__link" href="#skills" onClick={() => setIsOpen(false)}>
          Skills
        </a>
        <a className="header__link" href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </a>
        <a className="header__link" href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>

        {isOpen && (
          <div className="header__nav-contact">
            <Contact showHeading={false} />
          </div>
        )}
      </nav>
    </header>
  );
}
