import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="w-full md:w-1/3 flex justify-center">
            <img 
              src="https://img-wrapper.vercel.app/image?url=https://placehold.co/400x400/2563eb/FFFFFF/png?text=Chandra+Putra+Ciptaningtyas" 
              alt="Chandra Putra Ciptaningtyas" 
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-blue-500"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Passionate Data Scientist & Developer</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I’m Chandra Putra Ciptaningtyas, an aspiring Data Scientist with a strong foundation in statistics, machine learning, and data analysis. My passion lies in harnessing the power of data to uncover insights, create predictive models, and help businesses make informed decisions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              Currently, I work as a Data Science Intern at Codveda Technologies, where I’m developing predictive models, cleaning and processing data, and building data visualizations to aid decision-making. I’ve previously interned at BRIN (National Research and Innovation Agency), where I worked on time series analysis for disease outbreak prediction.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              I specialize in Python and R for data analysis, with expertise in machine learning algorithms (such as XGBoost, Scikit-learn) and deep learning frameworks (TensorFlow, Keras). I also have hands-on experience in tools like Tableau and Power BI for data visualization.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Outside of work, I’m deeply involved in the data science community, contributing to open-source projects, and mentoring aspiring data scientists. I’m also passionate about lifelong learning, always seeking to improve my skills and stay up-to-date with the latest advancements in AI and machine learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
