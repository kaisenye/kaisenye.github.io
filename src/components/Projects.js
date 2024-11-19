import React from 'react';

// css
import '../css/Projects.css';

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
            href: "https://github.com/kaisenye/shopping-wishlist-chrome-extension",
            className: `project-primary project0`,
            tags: ["React", "Amplify", "Node.js", "Web Scraping", "GraphQL"],
            title: "Shopping Wishlist Chrome Extension"
        },
       
        {
            href: "https://github.com/kaisenye/traffic-light-detection-faster-rcnn",
            className: `project-primary project1`,
            tags: ["Python", "PyTorch", "Computer Vision", "Machine Learning"],
            title: "Traffic Light Detection using Faster R-CNN"
        },
        {
            href: "https://brickisland.net/DDGSpring2020/",
            className: `project-primary project2`,
            tags: ["C++", "Geometry Central", "Polyscope", "GoogleTest"],
            title: "Discrete Differential Geometry Research"
        },
        {
            href: "https://github.com/kaisenye/video-sharing-platform-template",
            className: `project-primary project3`,
            tags: ["React", "Express", "Node.js", "Firebase"],
            title: "Video Sharing Web App"
        }
        
    ];

    return (
        <div className='projects'>
            <div className="sub-title highlight-container">
                Featured<div className="highlight">Projects</div>
            </div>

            {projects.map((project, index) => (
                <React.Fragment key={index}>
                    <ProjectCard 
                        href={project.href}
                        className={project.className}
                    >
                        <ProjectTags tags={project.tags} />
                    </ProjectCard>
                    <div className="project-primary-title">
                        {project.title}
                    </div>
                </React.Fragment>
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