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

    const [project2Ref, project2InView] = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });

    const [project3Ref, project3View] = useInView({
        triggerOnce: false, 
        threshold: 0.1,
    });

    return (
        <div className='projects'>
             <div className={`sub-title highlight-container fade-up ${titleInView ? 'fade-up-visible' : ''}`} ref={titleRef}>Featured<div className="highlight">Projects</div>
             </div>

             <a href="https://github.com/kaisenye/video-sharing"
                target="_blank"
                className={`project-primary project1 move-up ${project1InView ? 'move-up-visible' : ''}`} 
                ref={project1Ref}>
                <div className="project-primary-inner">
                    <div className="project-primary-tag">React</div>
                    <div className="project-primary-tag">Express</div>
                    <div className="project-primary-tag">Node.js</div>
                    <div className="project-primary-tag">Firebase</div>
                </div>
            </a>
            <div className="project-primary-title">
                    Video Sharing Web App
            </div>

            <a href="https://yekai.pages.iu.edu/game/kingsCupGame/card.html"
                target="_blank"
                className={`project-primary project3 move-up ${project3View ? 'move-up-visible' : ''}`} 
                ref={project3Ref}>                
                <div className="project-primary-inner">
                    <div className="project-primary-tag">React</div>
                    <div className="project-primary-tag">Node.js</div>
                </div>
            </a>
            <div className="project-primary-title">
                    King's Cup Drinking Game
            </div>


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