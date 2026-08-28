import { profile } from "../../data/profile";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <a className="header__brand" href="#home">
        {profile.name}
      </a>

      <nav className="header__nav" aria-label="Main navigation">
        <a className="header__link" href="#home">
          Home
        </a>
        <a className="header__link" href="#skills">
          Skills
        </a>
        <a className="header__link" href="#projects">
          Projects
        </a>
        <a className="header__link" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
