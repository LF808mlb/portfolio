import type { Project } from "../types";
import flashcardsProjectImage from "../assets/projects/flashcards-project.png";
import projectMeshAiImage from "../assets/projects/project-mesh-ai.jpg";
import workspaceHubImage from "../assets/projects/workspace-hub.png";

export const projects: Project[] = [
  {
    id: "flashcards-project",
    name: "Flashcards Project",
    description: [
      "A responsive learning web app for creating, managing, and practicing custom study decks with JSON validation and persistent storage. Built with JavaScript, REST APIs, and a remote database.",
    ],
    image: flashcardsProjectImage,
    githubUrl: "https://github.com/LF808mlb/ai-se_project_flashcards.git",
    liveUrl: "https://lf808mlb.github.io/ai-se_project_flashcards/",
  },
  {
    id: "project-mesh-ai",
    name: "Project Mesh AI",
    description: [
      "A backend application for real-time message tracking and persistent interaction logging across a structured network environment. Built with TypeScript, Express, and MongoDB.",
    ],
    image: projectMeshAiImage,
    githubUrl: "https://github.com/LF808mlb/ai-se_project_mesh-ai.git",
    liveUrl: "https://mytodoappLF808.100mountain.com",
  },
  {
    id: "workspace-hub",
    name: "Workspace Hub",
    description: [
      "A full-stack SaaS team management app for organizing projects, tracking task discussions, and managing resource bookings with role-based permissions. Built with React, Express, TypeScript, and MongoDB.",
    ],
    image: workspaceHubImage,
    githubUrl: "https://github.com/LF808mlb/ai-se_project_workspacehub.git",
    liveUrl: "https://ai-se-project-workspacehub-client-rho.vercel.app/",
  },
];
