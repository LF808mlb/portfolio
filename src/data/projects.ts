import type { Project } from "../types";
import flashcardsProjectImage from "../assets/projects/flashcards-project.png";
import projectMeshAiImage from "../assets/projects/project-mesh-ai.jpg";
import workspaceHubImage from "../assets/projects/workspace-hub.png";

export const projects: Project[] = [
  {
    id: "flashcards-project",
    name: "Flashcards Project",
    description: [
      "This Flashcard App is a web application that allows users to create, practice, and manage custom decks of flashcards organized via a responsive layout and a carousel view.",
      "I engineered a responsive Flashcard App that empowers users to create customized, color-coded learning decks with real-time JSON formatting validation.",
      "Powered by a JavaScript frontend and backed by a remote API database, this app ensures a user's study progress is permanently saved, seamlessly adapting from desktop screens down to mobile devices for learning on the go.",
      "This was an independent project, the first for my studies with TripleTen and took eight weeks to complete.",
    ],
    image: flashcardsProjectImage,
    githubUrl: "https://github.com/LF808mlb/ai-se_project_flashcards.git",
    liveUrl: "https://lf808mlb.github.io/ai-se_project_flashcards/",
  },
  {
    id: "project-mesh-ai",
    name: "Project Mesh AI",
    description: [
      "This project is a TypeScript-based AI application designed to enable persistent, real-time message handling and interaction logging across a structured, mesh-like network environment.",
      "Engineered a backend application, Mesh-AI, using TypeScript and Express to eliminate data volatility in automated network environments.",
      "Attempting to solve communication tracking gaps by designing and implementing a persistent storage layer with MongoDB, and optimize the development lifecycle by configuring Postman API resource suites, ESLint code-quality guardrails, and secure environment variable workflows.",
      "This is an independent project, the second for my studies with TripleTen and took 10 weeks to complete.",
    ],
    image: projectMeshAiImage,
    githubUrl: "https://github.com/LF808mlb/ai-se_project_mesh-ai.git",
    liveUrl: "https://github.com/LF808mlb/ai-se_project_mesh-ai",
  },
  {
    id: "workspace-hub",
    name: "Workspace Hub",
    description: [
      "WorkspaceHub is a full-stack MERN SaaS project and team management web application designed for organizing work within companies. It enables users to create and manage projects, track individual tasks with comment discussions, schedule resource bookings, and control administrative permissions based on user roles. It is built with TypeScript on both the client and server.",
      "Built a collapsible task comment section showing total comment counts, supporting instant top-of-list rendering for new posts and role-based edit/delete permissions for authors, owners, and admins.",
      "Added a task count indicator to project tiles on the Projects page and integrated a compact team member preview area on the dashboard to highlight roles.",
      "Implemented pre-submission booking validation checks along with user-facing error alerts when actions fail.",
      "This is an independent project, the third for my studies with TripleTen and took four weeks to complete.",
    ],
    image: workspaceHubImage,
    githubUrl: "https://github.com/LF808mlb/ai-se_project_workspacehub.git",
    liveUrl: "https://ai-se-project-workspacehub-client-rho.vercel.app/",
  },
];
