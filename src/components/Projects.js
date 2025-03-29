import React, { useState, useEffect } from 'react';
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Project images
import wyb from '../assets/wyb.png';
import tryfluo from '../assets/tryfluo.png';
import puffybooth from '../assets/puffybooth.png';
import project2Cover from '../assets/project2-cover.png';
import project3Cover from '../assets/project3-cover.png';
import project4Cover from '../assets/project4-cover.png';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
        title: "Shopping Wishlist Extension",
        description: "A web platform that automates 12,000+ tool queries for bioprinting, visualizing 3D models and streamlining product variant access for researchers.",
        image: tryfluo,
        tags: ["React", "AWS", "GraphQL APIs"],
        github: "",
        demo: "https://www.tryfluo.com/",
        bgColor: "bg-orange-600"
    },
    {
      title: "Travel Journey",
      description: "A real-time AI surveillance system that uses computer vision to detect break-ins and security threats, processing over 20TB of footage and cutting security workflow time by 90%.",
      image: wyb,
      tags: ["React", "Express.js", "AWS", "Docker", "Tailwind CSS"],
      demo: "https://main.dv93zam2h6wfe.amplifyapp.com/",
      bgColor: "bg-blue-600"
    },
    {
        title: "Puffy Photo Booth",
        description: "A responsive personal portfolio website built with React and Tailwind CSS, showcasing projects, experience, and skills with smooth animations and modern design.",
        image: puffybooth,
        tags: ["React", "JavaScript", "Responsive Design"],
        github: "https://github.com/kaisenye/puffy-booth/tree/main",
        demo: "https://puffybooth.netlify.app/",
        bgColor: "bg-pink-600"
      },
    {
      title: "Traffic Light Detection Research",
      description: "An analytics dashboard that processes millions of e-commerce records, predicting consumer shopping behavior with 98%+ accuracy using machine learning models.",
      image: project2Cover,
      tags: ["Big Data", "Machine Learning", "Data Visualization", "Python"],
      github: "https://github.com/kaisenye/traffic-light-detection-faster-rcnn",
      demo: "",
      bgColor: "bg-purple-700"
    },
    {
      title: "Discrete Geometry Research",
      description: "A responsive personal portfolio website built with React and Tailwind CSS, showcasing projects, experience, and skills with smooth animations and modern design.",
      image: project3Cover,
      tags: ["C++", "Discrete Geometry", "Academic Research"],
      github: "",
      demo: "",
      bgColor: "bg-yellow-600"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-8 mt-14 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-xl ml-5 font-bold mb-12 text-gray-800 relative">
        <span className="relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-1/3 after:h-1 after:bg-blue-500"></span>
        things I've <span className="text-blue-500">built</span>
      </h1>
      
      {/* Project grid - responsive with 1 card per row */}
      <div className={`grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto transition-all duration-[500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`rounded-lg overflow-hidden ${project.bgColor} flex flex-col w-full`}
          >
            {/* Project Content */}
            <div className="p-6 sm:p-8 flex flex-col w-full">
              <div className="flex justify-between items-center mb-6">
                {/* Title on top left */}
                <h3 className="text-lg font-600 text-white">{project.title}</h3>
                
                {/* Links on top right */}
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white hover:text-blue-100 transition-colors"
                    >
                      <FiGithub className="text-lg" /> <span className="text-sm hidden sm:inline">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-white hover:text-blue-100 transition-colors"
                    >
                      <FiExternalLink className="text-lg" /> 
                      <span className="text-sm hidden sm:inline">Link</span>
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Image - Centered and taking more space */}
              <div className="w-[46rem] h-56 sm:h-56 md:h-72 w-full overflow-hidden my-6 flex items-center justify-center rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full max-w-full object-contain px-6 rounded-lg"
                />
              </div>
              
              {/* Tags on bottom left */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1 text-sm bg-white/20 text-white rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 