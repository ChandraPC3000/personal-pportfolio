import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-blue-600 dark:text-blue-400">DA</a>
        
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 font-medium">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2">
            <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800">
          <div className="px-6 pt-2 pb-4 flex flex-col space-y-2">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-2 text-center">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
