import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">Get In Touch</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Feel free to send me a message. I'm always open to discussing new opportunities and collaborations.
        </p>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="Your Email" required />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full p-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition" placeholder="Your Message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
