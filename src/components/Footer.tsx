import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Dualite Alpha. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="GitHub Profile" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="#" aria-label="LinkedIn Profile" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="#" aria-label="Twitter Profile" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
