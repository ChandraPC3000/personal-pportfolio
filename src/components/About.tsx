import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="https://img-wrapper.vercel.app/image?url=https://placehold.co/400x400/2563eb/FFFFFF/png?text=DA" 
              alt="Dualite Alpha" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-blue-500"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Crafting Digital Experiences</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              As a seasoned Frontend Engineer with a passion for design, I bridge the gap between aesthetics and functionality. My journey in web development is driven by a commitment to creating interfaces that are not only visually appealing but also intuitive and accessible to all users.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I specialize in the React ecosystem, leveraging TypeScript for robust, scalable applications and Tailwind CSS for rapid, maintainable styling. I believe in writing clean code, following best practices, and continuously learning to stay at the forefront of web technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy exploring new design trends, contributing to open-source projects, and mentoring aspiring developers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
