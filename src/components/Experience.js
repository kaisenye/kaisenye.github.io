import React, { useState, useEffect } from 'react';

// icons
import { FiExternalLink } from "react-icons/fi";
import { LuEye } from "react-icons/lu";

// logos
import fluo from '../assets/logos/fluo.png';
import sosv from '../assets/logos/sosv.png';
import hippsc from '../assets/logos/hippsc.png';
import paypal from '../assets/logos/paypal.png';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);


  const experiences = [
    {
      company: 'Fluo AI',
      logo: fluo,
      title: 'Founder / Engineer',
      period: '2024',
      skills: ['Computer Vision', 'Full Stack Development', 'React', 'Node.js', 'AWS', 'Docker', 'CI/CD'],
      description: 'Created a real-time AI surveillance platform piloted in DTLA, processing 20TB+ footage to detect break-ins and cut security workflow time by 90%.', 
      bgColor: 'bg-fluo',
      positionColor: 'text-white',
      link: '',
      demo: 'https://www.youtube.com/watch?v=UapMxbgU91I'
    },
    {
      company: 'HIPPSC',
      logo: hippsc,
      title: 'Software Engineer',
      period: '2023 - 2024',
      skills: ['Python', 'Flask', 'Web 3D Visualization', 'RESTful APIs'],
      description: 'Engineered a full-stack app that automated 12,000+ tool queries, slashing manual inquiry time by 80% and streamlining product variant access.',
      bgColor: 'bg-hippsc',
      positionColor: 'text-white',
      link: 'https://www.hippsc.com/',
      demo: 'https://www.youtube.com/watch?v=mfOlCTJbx18'
    },
    {
      company: 'University of Southern California',
      logo: "",
      title: 'MS in Computer Engineering',
      period: '2023 - 2025',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Data Mining'],
      description: 'Learned a ton about computer vision, machine learning, and data analysis.',
      bgColor: 'bg-usc',
      positionColor: 'text-white',
      link: 'https://www.usc.edu/',
      demo: ''
    },
    {
      company: 'PayPal',
      logo: paypal,
      title: 'Software Engineer Intern',
      period: 'Summer 2022',
      skills: ['Big Data', 'Data Analysis', 'Machine Learning', 'CI/CD'],
      description: 'Analyzed 36M+ e-commerce records and built ML models with 98%+ accuracy to predict consumer eCommerce shopping behavior, while optimizing CI/CD to halve test debug time.',
      bgColor: 'bg-paypal',
      positionColor: 'text-white',
      link: 'https://www.paypal.com/',
      demo: ''
    },
    {
      company: 'SOSV',
      logo: sosv,
      title: 'Data Analyst Intern',
      period: 'Summer 2021',
      skills: ['Venture Capital', 'Data Analysis', 'Financial Modeling', 'Due Diligence'],
      description: 'Startup performance analysis and due diligence for potential investments.',
      bgColor: 'bg-sosv',
      positionColor: 'text-white',
      link: 'https://www.sosv.com/',
      demo: ''
    },
    {
      company: 'Indiana University',
      logo: "",
      title: 'BS in Math | Teaching Assistant',
      period: '2019 - 2023',
      skills: ['Real Analysis', 'Machine Learning', 'Calculus', 'Linear Algebra'],
      description: 'Learned a ton about math and helped teach it to others!',
      bgColor: 'bg-iu',
      positionColor: 'text-white',
      link: 'https://www.indiana.edu/',
      demo: ''
    },
  ];

  return (
    <div className={`min-h-screen py-8 px-8 mt-14 bg-gradient-to-b from-white to-gray-50 transition-all duration-[500ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-xl ml-5 font-bold mb-12 text-gray-800 relative">
        <span className="relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-1/3 after:h-1 after:bg-blue-500"></span>
          where I've <span className="text-blue-500">been</span>
      </h1>
      
      {/* Vertical Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Timeline line - made thinner and gray */}
        <div className="absolute left-8 h-full w-0.5 bg-lightgray"></div>
        
        {/* Experience items */}
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="relative mb-16 pl-20"
          >
            {/* Timeline dot - made smaller and gray */}
            <div className="absolute left-8 transform -translate-x-1/2 -translate-y-1/4 w-3 h-3 rounded-full bg-lightgray z-10 border-2 border-lightgray"></div>
            
            {/* Content box - removed shadow/hover effects, added unique colors, white text */}
            <div className={`py-6 px-8 rounded-lg ${exp.bgColor} max-w-2xl`}>
              <div className="flex flex-col items-left mb-2">
                {/* Company logo - kept white background for logo visibility */}
                <div className="h-5 flex items-center justify-between mb-4">
                  {exp.logo ? (
                    <img src={exp.logo} alt={exp.company} className="h-full object-contain" />
                  ) : (
                    <p className="text-lg text-white font-600">{exp.company}</p>
                  )}
                  <div className="flex items-center gap-2">
                    {exp.demo && (
                      <a href={exp.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-white text-sm bg-white/10 opacity-60 hover:opacity-100 hover:bg-white/20 rounded-md px-2 py-1 transition-opacity duration-300">
                        <LuEye /> 
                        <span className="text-xs">Demo</span>
                      </a>
                    )}
                    {exp.link && (
                      <a href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-white text-sm opacity-60 hover:opacity-100 hover:bg-white/10 rounded-md px-2 py-1 transition-opacity duration-300">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Title and period */}
                <div>
                  <p className={`text-white text-base font-600 ${exp.positionColor} opacity-60` }>{exp.title}</p>
                  <p className="text-white text-sm opacity-60">{exp.period}</p>
                </div>
              </div>
              
              {/* Description - white text */}
              <p className="mb-4 text-base text-white leading-relaxed">
                {exp.description}
              </p>
              
              {/* Skills - updated for better contrast on colored backgrounds */}
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-xs bg-white/20 text-white rounded-full border border-white/30"
                  >
                    {skill}
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

export default Experience; 