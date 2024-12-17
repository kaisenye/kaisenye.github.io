import React, { useState } from 'react';

// css
import '../css/Projects.css';

// modals
import VideoModal from './Modals/VideoModal';

// icons
import { FaPlay } from 'react-icons/fa';

const ProjectCard = ({ href, className, children }) => (
    <a 
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
    >
        {children}
    </a>
);

const ProjectTags = ({ tags }) => (
    <div className="project-primary-inner">
        {tags.map((tag, index) => (
            <div key={index} className="project-primary-tag">{tag}</div>
        ))}
    </div>
);

const Projects = () => {

    const projects = [
        {
            href: "https://main.dv93zam2h6wfe.amplifyapp.com/",
            className: `project-primary project0`,
            tags: ["React", "Express", "Node.js", "RESTful API", "Google Maps API"],
            title: "Travel Journal Web App",
            videoUrl: "https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/kaisenye/where-have-you-been-demo.mp4"
        },

        {
            href: "https://github.com/kaisenye/shopping-wishlist-chrome-extension",
            className: `project-primary project1`,
            tags: ["React", "Amplify", "Node.js", "Web Scraping", "GraphQL"],
            title: "Shopping Wishlist Chrome Extension"
        },
       
        {
            href: "https://github.com/kaisenye/traffic-light-detection-faster-rcnn",
            className: `project-primary project2`,
            tags: ["Python", "PyTorch", "Computer Vision", "Machine Learning"],
            title: "Traffic Light Detection using Faster R-CNN"
        },
        {
            href: "https://brickisland.net/DDGSpring2020/",
            className: `project-primary project3`,
            tags: ["C++", "Geometry Central", "Polyscope", "GoogleTest"],
            title: "Discrete Differential Geometry Research"
        },
        {
            href: "https://github.com/kaisenye/video-sharing-platform-template",
            className: `project-primary project4`,
            tags: ["React", "Express", "Node.js", "Firebase"],
            title: "Video Sharing Web App"
        }
        
    ];

    const [selectedVideo, setSelectedVideo] = useState(null);

    const openVideoModal = (videoUrl) => {
        setSelectedVideo(videoUrl);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <div className='projects'>
            <div className="sub-title highlight-container">
                Featured<div className="highlight">Projects</div>
            </div>

            {projects.map((project, index) => (
                <div key={index} className="project-primary-container">
                    <ProjectCard 
                        href={project.href}
                        className={project.className}
                    >
                        <ProjectTags tags={project.tags} />
                    </ProjectCard>
                    <div className="project-primary-title">
                        {project.title}
                    </div>
                    {project.videoUrl && (
                        <div className="experience-demo-container">
                            <button 
                                className="experience-demo-button"
                                onClick={() => openVideoModal(project.videoUrl)}
                            >
                                <FaPlay className="demo-icon" />
                                <span>View Project Demo</span>
                            </button>
                        </div>
                    )}
                    <div className="project-primary-video">
                        <VideoModal 
                            isOpen={selectedVideo !== null}
                            onClose={closeVideoModal}
                            videoSrc={selectedVideo}
                        />
                    </div>
                </div>
            ))}

            {/* <div className='project-secondary'>
                <div className="project-secondary-left">
                </div>
                <div className="project-secondary-right">
                </div>
            </div> */}
        </div>
    );
};

export default Projects;