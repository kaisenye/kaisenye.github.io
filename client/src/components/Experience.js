import React from "react";

// css
import "../css/Experience.css";
import { BsPaypal } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="experience">
        <div className="sub-title">Experience</div>
        <div className="experience-item">
            <div className="experience-title">Software Engineer Intern</div>
            <div className="experience-company">
                <div className="experience-company-icon"><BsPaypal /></div>
                <div className="experience-company-text">PayPal</div>
            </div>
            <div className="experience-date">Summer 2022</div>
            <div className="experience-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
                nisl eu ultricies fermentum, nunc nibh ultricies nunc, vitae aliquam
                nunc nisl vitae nunc. Donec auctor, nisl eu ultricies fermentum, nunc
                nibh ultricies nunc, vitae aliquam nunc nisl vitae nunc.
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-title">Data Analyst Intern</div>
            <div className="experience-company">
                <div className="experience-company-icon"><BsPaypal /></div>
                <div className="experience-company-text">SOSV</div>
            </div>
            <div className="experience-date">Summer 2022</div>
            <div className="experience-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor,
                nisl eu ultricies fermentum, nunc nibh ultricies nunc, vitae aliquam
                nunc nisl vitae nunc. Donec auctor, nisl eu ultricies fermentum, nunc
                nibh ultricies nunc, vitae aliquam nunc nisl vitae nunc.
            </div>
        </div>
    </div>
  );
};

export default Experience;
