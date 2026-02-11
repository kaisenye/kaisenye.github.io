import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col mt-14 p-8">
      <div
        className={`transform transition-all duration-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <h1 className="text-xl md:text-xl font-bold text-gray-800 mb-4">
          hey, i'm <span className="text-accent">kaisen.</span>
        </h1>
        <h2 className="text-base md:text-base text-secondary mb-4 font-500">
          developer • designer • ai
        </h2>
        <p className="text-base text-gray max-w-2xl mb-8 leading-relaxed">
          I specialize in building exceptional digital experiences with a focus
          on performance, usability, and elegant code architecture. Beyond
          coding, I'm an avid basketball player, hiker, and golf enthusiast with
          a deep appreciation for aesthetics and film. My creative pursuits have
          led me to win a state-level 2D art competition in high school. I'm
          also passionate about entrepreneurship – I founded a startup focused
          on video security AI and have experience working with two other
          startups.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <a
            href="https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/kaisenye/Kaisen+Ye+Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <span className="text-gray hover:text-accent transition-colors duration-300 relative text-sm pb-1">
              resume.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </span>
          </a>
          <Link to="/projects" className="group relative">
            <span className="text-gray hover:text-accent transition-colors duration-300 relative text-sm pb-1">
              projects.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </span>
          </Link>
          <a
            href="https://github.com/kaisenye"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <span className="text-gray hover:text-accent transition-colors duration-300 relative text-sm pb-1">
              github.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </span>
          </a>
          <a
            href="https://linkedin.com/in/kaisenye"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <span className="text-gray hover:text-accent transition-colors duration-300 relative text-sm pb-1">
              linkedin.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </span>
          </a>
          <a href="mailto:kaisenye20@gmail.com" className="group relative">
            <span className="text-gray hover:text-accent transition-colors duration-300 relative text-sm pb-1">
              email.
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
