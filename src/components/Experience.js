import React from "react";
import { useInView } from 'react-intersection-observer';

// css
import "../css/Experience.css";
import sosv from "../assets/sosv.png";
import { BsPaypal } from "react-icons/bs";

const Experience = () => {
    const [titleRef, titleInView] = useInView({
        triggerOnce: false, 
        threshold: 0.2,
    });

    const [experience1Ref, experience1InView] = useInView({
        triggerOnce: false, 
        threshold: 0.4,
    });

    const [experience2Ref, experience2InView] = useInView({
        triggerOnce: false, 
        threshold: 0.4,
    });


    return (
        <div className="experience">
            <div className={`sub-title fade-up ${titleInView ? 'fade-up-visible' : ''}`} ref={titleRef}>Experience</div>
            <div className={`experience-item fade-left ${experience1InView ? 'fade-left-visible' : ''}`} ref={experience1Ref}>
                <div className="experience-title">Software Engineer Intern</div>
                <div className="experience-company">
                    <div className="experience-company-icon"><BsPaypal /></div>
                    <div className="experience-company-text">PayPal</div>
                </div>
                <div className="experience-date">Summer 2022</div>
                <div className="experience-tags-container">
                    <div className="experience-tag">Data Science</div>
                    <div className="experience-tag">Machine Learning</div>
                    <div className="experience-tag">CI/CD Pipeline</div>
                    <div className="experience-tag">Python</div>
                    <div className="experience-tag">SQL</div>
                    <div className="experience-tag">BigQuery</div>
                    <div className="experience-tag">AutoML</div>
                </div>
            </div>
            <div className={`experience-item fade-left ${experience2InView ? 'fade-left-visible' : ''}`} ref={experience2Ref}>
                <div className="experience-title">Data Analyst Intern</div>
                <div className="experience-company">
                    <div className="experience-company-icon"><img src={sosv} alt="SOSV Logo" className="experience-img-logo"/></div>
                    <div className="experience-company-text">SOSV</div>
                </div>
                <div className="experience-date">Summer 2021</div>
                <div className="experience-tags-container">
                    <div className="experience-tag">Venture Capital</div>
                    <div className="experience-tag">Project Management</div>
                    <div className="experience-tag">Agile Development</div>
                    <div className="experience-tag">Python</div>
                    <div className="experience-tag">Data Analysis</div>
                    <div className="experience-tag">Financial Analysis</div>
                    <div className="experience-tag">ClickUp</div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
