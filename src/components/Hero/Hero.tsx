import { profile } from "../../data/profile";
import "./Hero.css";

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">HI, I&apos;M</p>
        <h1 className="hero__name">{profile.name}</h1>
        <h2 className="hero__title">{profile.title}</h2>
        <p className="hero__bio">{profile.blurb}</p>

        <div className="hero__actions">
          <a className="hero__button hero__button--primary" href="#projects">
            View my work
          </a>
          <a className="hero__button hero__button--secondary" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
