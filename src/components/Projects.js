import React from 'react';
import { useInView } from 'react-intersection-observer';

// css
import '../css/Projects.css';

const ProjectCard = ({ href, className, projectRef, children }) => (
    <a 
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
        ref={projectRef}
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

    const [project1Ref, project1InView] = useInView({
        triggerOnce: false,
        threshold: 0.1, 
    });

    const [project2Ref, project2InView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [project3Ref, project3InView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const projects = [
       
        {
            href: "https://github.com/kaisenye/traffic-light-detection-faster-rcnn",
            className: `project-primary project1 move-up ${project2InView ? 'move-up-visible' : ''}`,
            ref: project2Ref,
            tags: ["Python", "PyTorch", "Computer Vision", "Machine Learning"],
            title: "Traffic Light Detection using Faster R-CNN"
        },
        {
            href: "https://brickisland.net/DDGSpring2020/",
            className: `project-primary project2 move-up ${project3InView ? 'move-up-visible' : ''}`,
            ref: project3Ref,
            tags: ["C++", "Geometry Central", "Polyscope", "GoogleTest"],
            title: "Discrete Differential Geometry Research"
        },
        {
            href: "https://github.com/kaisenye/video-sharing-platform-template",
            className: `project-primary project3 move-up ${project1InView ? 'move-up-visible' : ''}`,
            ref: project1Ref,
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
                        projectRef={project.ref}
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