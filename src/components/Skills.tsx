import React from 'react';
import { Code, Database, Brush, Server } from 'lucide-react';

interface Skill {
  name: string;
}

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  skills: Skill[];
}

const skillData: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code,
    skills: [
      { name: 'React & Next.js' },
      { name: 'TypeScript' },
      { name: 'JavaScript (ES6+)' },
      { name: 'HTML5 & CSS3' },
      { name: 'Tailwind CSS' },
      { name: 'Framer Motion' },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: Brush,
    skills: [
      { name: 'Figma' },
      { name: 'Wireframing' },
      { name: 'Prototyping' },
      { name: 'Responsive Design' },
      { name: 'Design Systems' },
      { name: 'User Research' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js & Express' },
      { name: 'REST APIs' },
      { name: 'GraphQL' },
      { name: 'Authentication' },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: Database,
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Vite & Webpack' },
      { name: 'Docker' },
      { name: 'Jest & RTL' },
      { name: 'PostgreSQL' },
      { name: 'MongoDB' },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Skills & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillData.map((category) => (
            <div key={category.title} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <category.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-4" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="text-gray-600 dark:text-gray-300">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
