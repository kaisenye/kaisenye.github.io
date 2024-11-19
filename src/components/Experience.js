import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

// css
import "../css/Experience.css";
import sosv from "../assets/sosv.png";
import hippsc from "../assets/hippsc.png";
import fluo from "../assets/fluo.png";
import { BsPaypal } from "react-icons/bs";

// modals
import VideoModal from "./Modals/VideoModal";

const Experience = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videos = {
        fluo: "https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/kaisenye/Fluo+Product+Demo+20240827+-+YCW24.mp4",
        hippsc: "https://hippsc-2023.s3.us-west-1.amazonaws.com/assets/kaisenye/hippsc-exgrip-selection-console-project.mp4"
    };

    const openVideoModal = (videoKey) => {
        setSelectedVideo(videos[videoKey]);
    };

    const closeVideoModal = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="experience">
            <div className="sub-title" >Experience</div>
            <div className="experience-item">
                <div className="experience-title">Founder / Software Engineer</div>
                <div className="experience-company">
                    <div className="experience-company-icon">
                        <img src={fluo} alt="FluoAI Logo" className="experience-img-logo"/>
                    </div>
                    <div className="experience-company-text">FluoAI</div>
                </div>
                <div className="experience-date">May 2024 - October 2024</div>
                <div className="experience-tags-container">
                    <div className="experience-tag">Computer Vision</div>
                    <div className="experience-tag">OpenAI CLIP</div>
                    <div className="experience-tag">Video Processing</div>
                    <div className="experience-tag">React</div>
                    <div className="experience-tag">AWS Suite</div>
                    <div className="experience-tag">GraphQL</div>
                </div>
                <div className="experience-demo-container">
                    <button 
                        className="experience-demo-button"
                        onClick={() => openVideoModal('fluo')}
                    >
                        <FaPlay className="demo-icon" />
                        <span>View Project Demo</span>
                    </button>
                </div>
                <div className="experience-details">
                    <ul>
                        <li>
                            Designed a scalable surveillance video management system using AWS Kinesis Video Streams for storage, retrieval, 
                            and streaming, with key frames stored in S3 for fast access, improving processing speed by 75%
                        </li>
                        <li>
                            Integrated OpenAI CLIP into the AI's video analysis system, enabling instant semantic search to identify individuals or 
                            events within specific time frames based on user-defined queries, reducing security investigation time by over 90%
                        </li>
                        <li>
                            Built a responsive frontend with React, integrating OIDC authentication flow via AWS Cognito and deploying on 
                            AWS Amplify to ensure fast, secure data transfer and a smooth user experience
                        </li>
                        <li>
                            Secured pilot testing agreements with 2 DTLA apartments for FluoAI's system, achieving over 50% time savings in 
                            security patrol and investigation workflows during a 2-month trial, as reported by user feedback
                        </li>
                    </ul>
                </div>
            </div>
            <div className="experience-item">
                <div className="experience-title">Software Engineer</div>
                <div className="experience-company">
                    <div className="experience-company-icon">
                        <img src={hippsc} alt="HIPPSC Logo" className="experience-img-logo"/>
                    </div>
                    <div className="experience-company-text">HIPPSC</div>
                </div>
                <div className="experience-date">August 2023 - May 2024</div>
                <div className="experience-tags-container">
                    <div className="experience-tag">Web Development</div>
                    <div className="experience-tag">RESTful APIs</div>
                    <div className="experience-tag">3D File Processing</div>
                    <div className="experience-tag">UI/UX Design</div>
                    <div className="experience-tag">Robotics Integration</div>
                    <div className="experience-tag">Product Development</div>
                </div>
                <div className="experience-demo-container">
                    <button 
                        className="experience-demo-button"
                        onClick={() => openVideoModal('hippsc')}
                    >
                        <FaPlay className="demo-icon" />
                        <span>View Project Demo</span>
                    </button>
                </div>
                <div className="experience-details">
                    <ul>
                        <li>
                            Developed a web application for HIPPSC's modular tooling series, automating 12,000+ tool combinations. Enabled
                            end-users to customize tools and download 3D files directly, reducing tooling querying and quoting time by 80%
                        </li>
                        <li>
                            Collaborated on the R&D of tool setup machines and robotic arm integration, contributing to the design of user-friendly
                            system interfaces and enhancing the customer onboarding process to ensure seamless adoption
                        </li>
                        <li>
                            Gathered feedback from machine shop end-users to design RESTful APIs and implement product variant tables,
                            ensuring accurate variant data display and enabling 3D file downloads for all product variants across product pages
                        </li>
                    </ul>
                </div>
            </div>
            <div className="experience-item">
                <div className="experience-title">Software Engineer Intern</div>
                <div className="experience-company">
                    <div className="experience-company-icon"><BsPaypal /></div>
                    <div className="experience-company-text">PayPal</div>
                </div>
                <div className="experience-date">Summer 2022</div>
                <div className="experience-tags-container">
                    <div className="experience-tag">Python</div>
                    <div className="experience-tag">Machine Learning</div>
                    <div className="experience-tag">CI/CD Pipeline</div>
                    <div className="experience-tag">SQL</div>
                    <div className="experience-tag">BigQuery</div>
                    <div className="experience-tag">AutoML</div>
                </div>
                <div className="experience-details">
                    <ul>
                        <li>
                            Performed thorough Exploratory Data Analysis using BigQuery, pandas, NumPy, and Plotly on over 36 million
                            records of online shopping event data to delve into how end users interact with different E-commerce websites
                        </li>
                        <li>
                            Built and trained machine learning models using TensorFlow and Google AutoML to analyze customer online shopping
                            behaviors and identify potential buying action, achieving an average accuracy score of over 98%
                        </li>
                        <li>
                            Deployed CircleCI validation with mypy and pylint for automated CI/CD workflow across team repos; enhanced
                            testing process visibility and resulted in a 50% reduction in time spent on identifying failed or unreliable tests
                        </li>
                        <li>
                            Monitored and tested Python scripts to proactively identify potential issues and prevent bugs from occurring
                        </li>
                    </ul>
                </div>
            </div>
            <div className="experience-item">
                <div className="experience-title">Data Analyst Intern</div>
                <div className="experience-company">
                    <div className="experience-company-icon">
                        <img src={sosv} alt="SOSV Logo" className="experience-img-logo"/>
                    </div>
                    <div className="experience-company-text">SOSV</div>
                </div>
                <div className="experience-date">Summer 2021</div>
                <div className="experience-tags-container">
                    <div className="experience-tag">Venture Capital</div>
                    <div className="experience-tag">Project Management</div>
                    <div className="experience-tag">Agile Development</div>
                    <div className="experience-tag">Financial Analysis</div>
                    <div className="experience-tag">ClickUp</div>
                </div>
                <div className="experience-details">
                    <ul>
                        <li>
                            Collaborated with portfolio managers and target companies to identify growth opportunities and used Python and data
                            analytic tools to provide data-driven insights on operational efficiency, financial profile, and customer/user behavior
                        </li>
                        <li>
                            Designed and implemented dashboards and reports on ClickUp to provide key stakeholders with real-time insights into
                            portfolio performance, KPIs (CMGR, CAC, growth profile, etc.), and growth opportunities
                        </li>
                    </ul>
                </div>
            </div>
            {selectedVideo && (
                <VideoModal
                    isOpen={!!selectedVideo}
                    onClose={closeVideoModal}
                    videoSrc={selectedVideo}
                />
            )}
        </div>
    );
};

export default Experience;
