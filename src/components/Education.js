import React from 'react';
import { useInView } from 'react-intersection-observer';

// css
import '../css/Education.css';
import usc from '../assets/usc.png';
import iu from '../assets/iu.png';


const Education = () => {
    const [titleRef, titleInView] = useInView({
        triggerOnce: false, 
        threshold: 0.2,
    });

    const [education1Ref, education1InView] = useInView({
        triggerOnce: false, 
        threshold: 0.2,
    });

    const [education2Ref, education2InView] = useInView({
        triggerOnce: false, 
        threshold: 0.4,
    });

    return (
        <div className='education'>
             <div className={`sub-title fade-up ${titleInView ? 'fade-up-visible' : ''}`} ref={titleRef}>Education</div>
             <div className={`education-item fade-up ${education1InView ? 'fade-up-visible' : ''}`} ref={education1Ref}>
                <div className="education-item-left">
                    <div className="education-title">University of Southern California</div>
                    <div className="education-subtitle">M.S. Electrical & Computer Engineering</div>
                    <div className="education-date">Dec 2024</div>
                </div>
                <div className="education-item-right">
                    <div className="education-logo"><img src={usc} alt="USC Logo" className='education-img-logo'/></div>
                </div>
            </div>
            <div className={`education-item fade-up ${education2InView ? 'fade-up-visible' : ''}`} ref={education2Ref}>
                <div className="education-item-left">
                    <div className="education-title">Indiana University at Bloomington</div>
                    <div className="education-subtitle">B.S. Applied Mathematics | B.S. Information Systems</div>
                    <div className="education-date">May 2023</div>
                </div>
                <div className="education-item-right">
                    <div className="education-logo"><img src={iu} alt="USC Logo" className='education-img-logo'/></div>
                </div>
            </div>
        </div>
    );
};

export default Education;