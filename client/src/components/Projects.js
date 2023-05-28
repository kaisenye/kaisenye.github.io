import React from 'react';
import { useInView } from 'react-intersection-observer';

// css
import '../css/Projects.css';


const Projects = () => {
    const [titleRef, titleInView] = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });

    const [project1Ref, project1InView] = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });

    return (
        <div className='projects'>
             <div className={`sub-title highlight-container fade-up ${titleInView ? 'fade-up-visible' : ''}`} ref={titleRef}>Featured<div className="highlight">Projects</div></div>
             <div className={`project-primary move-up ${project1InView ? 'move-up-visible' : ''}`} ref={project1Ref}>
                <div className="project-primary-inner">
                    <div className="project-primary-tag">React</div>
                    <div className="project-primary-tag">Express</div>
                    <div className="project-primary-tag">Node.js</div>
                    <div className="project-primary-tag">Firebase</div>
                </div>
            </div>
            <div className="project-primary-title">
                    Video Sharing Web App
                </div>
            <div className='project-secondary'>
                <div className="project-secondary-left">
                </div>
                <div className="project-secondary-right">
                </div>
            </div>
        </div>
    );
};

export default Projects;