import { profile } from "../../data/profile";
import contactEmailIcon from "../../assets/projects/mail.png";
import fileTextIcon from "../../assets/projects/file-text.svg";
import githubIcon from "../../assets/projects/github.png";
import linkedinIcon from "../../assets/projects/linkedin.png";
import mapPinIcon from "../../assets/projects/map-pin.png";
import "./Contact.css";

export default function Contact() {
  return (
    <nav className="contact" aria-label="Contact information">
      <h2 className="contact__title">Get in Touch</h2>

      <p className="contact__description">
        Have a project in mind, an open position, or just want to chat about
        development strategies? Drop a line here or contact me via my email
        below.
      </p>

      <ul className="contact__list">
        <li>
          <a href={`mailto:${profile.email}`}>
            <img src={contactEmailIcon} alt="" aria-hidden="true" />
            <span>{profile.email}</span>
          </a>
        </li>
        <li>
          <a href={profile.locationUrl} target="_blank" rel="noreferrer">
            <img src={mapPinIcon} alt="" aria-hidden="true" />
            <span>{profile.locationText}</span>
          </a>
        </li>
        <li>
          <a href={profile.resume} download>
            <img src={fileTextIcon} alt="" aria-hidden="true" />
            <span>Download my resume (PDF)</span>
          </a>
        </li>
      </ul>

      <ul className="contact__social-list">
        <li>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </li>
        <li>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
