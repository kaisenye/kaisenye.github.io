import React from 'react';

// css
import '../css/Education.css';
import usc from '../assets/usc.png';
import iu from '../assets/iu.png';


const Education = () => {

    return (
        <div className='education'>
             <div className="sub-title">Education</div>

             <a className="education-item"
                href="https://viterbischool.usc.edu/" 
                target="_blank" 
                rel="noopener noreferrer">
                <div className="education-item-left">
                    <div className="education-title">University of Southern California</div>
                    <div className="education-subtitle">M.S. Electrical & Computer Engineering - Machine Learning</div>
                    <div className="education-date">May 2025</div>
                </div>
                <div className="education-item-right">
                    <div className="education-logo"><img src={usc} alt="USC Logo" className='education-img-logo'/></div>
                </div>
            </a>
            <a  className="education-item"
                target="_blank"
                href="https://bloomington.iu.edu/index.html" 
                rel="noopener noreferrer">
                <div className="education-item-left">
                    <div className="education-title">Indiana University at Bloomington</div>
                    <div className="education-subtitle">B.S. Applied Mathematics | B.S. Information Systems</div>
                    <div className="education-date">May 2023</div>
                </div>
                <div className="education-item-right">
                    <div className="education-logo"><img src={iu} alt="USC Logo" className='education-img-logo'/></div>
                </div>
            </a>
        </div>
    );
};

export default Education;