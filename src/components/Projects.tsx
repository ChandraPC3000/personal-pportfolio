import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with a modern UI, product filtering, and a secure checkout process.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/3b82f6/ffffff/png?text=Project+1',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality and real-time collaboration.',
    tags: ['Next.js', 'Firebase', 'Framer Motion', 'Zustand'],
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/10b981/ffffff/png?text=Project+2',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a focus on performance and aesthetics.',
    tags: ['Vite', 'React', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/8b5cf6/ffffff/png?text=Project+3',
    liveUrl: '#',
    repoUrl: '#',
  },
];

const ProjectCard: React.FC<Project> = ({ title, description, tags, imageUrl, liveUrl, repoUrl }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      <div className="mb-4">
        {tags.map(tag => (
          <span key={tag} className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-end items-center space-x-4">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${title}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <ExternalLink size={24} />
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${title}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
          )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
