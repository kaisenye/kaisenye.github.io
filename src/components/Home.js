import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="flex flex-col mt-14 p-8" 
    >
      <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
        <h1 className="text-xl md:text-xl font-bold text-gray-800 mb-4">
          hey, i'm <span className="text-accent">kaisen.</span>
        </h1>
        <h2 className="text-base md:text-base text-secondary mb-4 font-500">
          Developer | Designer | AI Enthusiast
        </h2>
        <p className="text-base text-gray max-w-2xl mb-2 leading-relaxed">
          Welcome to my portfolio website. I specialize in building exceptional digital experiences 
          with a focus on performance, usability, and elegant code architecture.
        </p>
        <p className="text-base text-gray max-w-2xl mb-8 leading-relaxed">
          Beyond coding, I'm an avid basketball player, hiker, and golf enthusiast with a deep appreciation for aesthetics and film. 
          My creative pursuits have led me to win a state-level 2D art competition in high school. I'm also passionate about entrepreneurship –
          I founded a startup focused on video security AI and have experience working with two other startups.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <Link to="/projects">
            <button className="w-full md:w-auto px-6 py-2 bg-secondary text-white text-sm rounded-md hover:bg-accent transition-colors duration-300">
              View My Projects
            </button>
          </Link>
          <a href="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/kaisenye/Kaisen+Ye+Resume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="w-full md:w-auto px-6 py-2 bg-secondary text-white text-sm rounded-md hover:bg-accent transition-all duration-300">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className={`mt-8 flex space-x-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <a href="https://github.com/kaisenye" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent flex items-center justify-center transition-colors duration-300">
          <span className="sr-only">GitHub</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a href="https://linkedin.com/in/kaisenye" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent flex items-center justify-center transition-colors duration-300">
          <span className="sr-only">LinkedIn</span>
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="mailto:kaisenye20@gmail.com" className="text-gray-600 hover:text-accent flex items-center justify-center transition-colors duration-300">
          <span className="sr-only">Email</span>
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home; 