import { ProjectCard } from "../ProjectCard/ProjectCard";
import { projects } from "../../data/projects";
import "./Projects.css";

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <p className="projects__eyebrow">Projects</p>
        <h2 className="projects__title">Featured Work</h2>
      </div>

      <ul className="projects__list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
