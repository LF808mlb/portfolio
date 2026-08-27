import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'portfolio-site',
    name: 'Portfolio Site',
    description: [
      'Built a modern portfolio experience with React and TypeScript.',
      'Focused on responsive layouts, performance, and clear storytelling.',
    ],
    image: '/images/portfolio-site.png',
    githubUrl: 'https://github.com/yourusername/portfolio-site',
    liveUrl: 'https://yourportfolio.dev',
  },
  {
    id: 'task-dashboard',
    name: 'Task Dashboard',
    description: [
      'Created a productivity dashboard with task tracking and status views.',
      'Implemented reusable components and data-driven UI patterns.',
    ],
    image: '/images/task-dashboard.png',
    githubUrl: 'https://github.com/yourusername/task-dashboard',
    liveUrl: 'https://task-dashboard-demo.dev',
  },
  {
    id: 'weather-app',
    name: 'Weather App',
    description: [
      'Built a small weather app with location-based data and clean visual summaries.',
      'Used a simple API-driven architecture with a responsive interface.',
    ],
    image: '/images/weather-app.png',
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weather-demo.dev',
  },
]
