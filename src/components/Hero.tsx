import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[calc(100vh-69px)] flex items-center bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
          Hi, I'm Dualite Alpha
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-8">
          A Senior Frontend Engineer & UI/UX Designer
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-10">
          I build beautiful, responsive, and user-friendly web applications. My expertise lies in React, TypeScript, and Tailwind CSS, with a keen eye for design and user experience.
        </p>
        <div className="flex justify-center items-center space-x-4 mb-10">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
            Get In Touch
          </a>
          <a href="#projects" className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
            View My Work
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" aria-label="GitHub Profile" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <Github size={28} />
          </a>
          <a href="#" aria-label="LinkedIn Profile" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <Linkedin size={28} />
          </a>
          <a href="#" aria-label="Twitter Profile" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <Twitter size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
