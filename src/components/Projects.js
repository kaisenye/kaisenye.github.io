import React, { useState, useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Project images
import wyb from "../assets/images/projects/wyb.webp";
import tryfluo from "../assets/images/projects/tryfluo.webp";
import puffybooth from "../assets/images/projects/puffybooth.webp";
import project2Cover from "../assets/images/projects/project2-cover.webp";
import project3Cover from "../assets/images/projects/project3-cover.webp";
import romoVideo from "../assets/images/projects/romo.mp4";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "Romo",
      description: "LLM-powered AI dication assistant for MacOS",
      video: romoVideo,
      tags: ["Electron", "React", "Whisper", "Llama.cpp", "MacOS"],
      demo: "https://www.tryromo.com/",
      bgColor: "bg-neutral-900",
    },
    {
      title: "Fluo",
      description: "Shopping Wishlist Extension",
      image: tryfluo,
      tags: ["React", "AWS", "GraphQL APIs"],
      github: "",
      demo: "https://chromewebstore.google.com/detail/fluo-universal-shopping-w/hiiojmheiffnbbaaaibedbmgdpdmcfki",
      bgColor: "bg-orange-600",
    },
    {
      title: "Where Have You Been?",
      description: "Smart travel journal for all your trips.",
      image: wyb,
      tags: ["React", "Express.js", "AWS", "Docker", "Tailwind CSS"],
      demo: "https://main.dv93zam2h6wfe.amplifyapp.com/",
      bgColor: "bg-blue-600",
    },
    {
      title: "Puffy Photo Booth",
      description: "Photo booth anywhere, any time, any device!",
      image: puffybooth,
      tags: ["React", "JavaScript", "Responsive Design"],
      github: "https://github.com/kaisenye/puffy-booth/tree/main",
      demo: "https://puffybooth.netlify.app/",
      bgColor: "bg-pink-600",
    },
    {
      title: "Traffic Light Detection Research",
      description:
        "Research on traffic light detection using machine learning models.",
      image: project2Cover,
      tags: ["Big Data", "Machine Learning", "Data Visualization", "Python"],
      github: "https://github.com/kaisenye/traffic-light-detection-faster-rcnn",
      demo: "",
      bgColor: "bg-purple-700",
    },
    {
      title: "Discrete Geometry Research",
      description:
        "Research on discrete geometry using machine learning models.",
      image: project3Cover,
      tags: ["C++", "Discrete Geometry", "Academic Research"],
      github: "",
      demo: "",
      bgColor: "bg-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-8 mt-14 pb-32 bg-gradient-to-b from-white to-gray-50">
      <h1 className="text-xl ml-5 font-bold mb-12 text-gray-800 relative">
        <span className="relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-1/3 after:h-1 after:bg-blue-500"></span>
        things I've <span className="text-blue-500">built</span>
      </h1>

      {/* Project grid - responsive with 1 card per row */}
      <div
        className={`grid grid-cols-1 gap-8 w-full max-w-2xl mx-auto transition-all duration-[500ms] ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden ${project.bgColor} flex flex-col w-full`}
          >
            {/* Project Content */}
            <div className="p-6 sm:p-8 flex flex-col w-full">
              <div className="flex justify-between items-center mb-2">
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
                      <FiGithub className="text-lg" />{" "}
                      <span className="text-sm hidden sm:inline">Code</span>
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

              {/* Description - Second row */}
              <div className="mb-4 opacity-60">
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Image/Video - Centered and taking more space */}
              <div className="w-full h-78 lg:h-96 overflow-hidden my-6 flex items-center justify-center rounded-lg">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full max-w-full object-contain px-6 rounded-lg"
                  />
                )}
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
