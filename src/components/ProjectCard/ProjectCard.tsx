import type { Project } from "../../types";
import githubIcon from "../../assets/projects/github.png";
import liveSiteIcon from "../../assets/projects/Card-Link.png";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li
      className={`project-card${project.id === "project-mesh-ai" ? " project-card--mesh-ai" : ""}`}
    >
      <img
        className="project-card__image"
        src={project.image}
        alt={`Screenshot of ${project.name}`}
      />

      <div className="project-card__content">
        <h3 className="project-card__title">{project.name}</h3>

        {project.description.map((paragraph) => (
          <p
            key={`${project.id}-${paragraph}`}
            className="project-card__description"
          >
            {paragraph}
          </p>
        ))}

        <div className="project-card__links">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--icon"
          >
            <img
              src={githubIcon}
              alt="GitHub icon"
              className="project-card__icon"
            />
            <span>Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="project-card__link project-card__link--icon"
          >
            <img
              src={liveSiteIcon}
              alt="Live site icon"
              className="project-card__icon"
            />
            <span>Live</span>
          </a>
        </div>
      </div>
    </li>
  );
}
