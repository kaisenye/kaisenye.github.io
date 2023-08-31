import React from "react";
import { useInView } from 'react-intersection-observer';

// css
import "../css/About.css";


const About = () => {
  const [contentRef, contentInView] = useInView({
    triggerOnce: false, // Change this to false if you want the animation to trigger again whenever it comes in view.
    threshold: 0.4,    // Percentage of the element that is in view before the callback triggers.
  });

  return (
    <div className="about">
      <div className="sub-title">
        <p>Kaisen Ye</p>
      </div>
      <div className={`content fade-up ${contentInView ? 'fade-up-visible' : ''}`} ref={contentRef}>
        <p>
          Intrigued by ceaseless learning, 
          I liken myself to an intellectual sponge—absorbing wisdom and refining my craft daily. 
          In a collaborative tableau, I'm not just a participant, but a strategic maestro, 
          orchestrating our collective success. My ethos? Each day is a new canvas, 
          an opportunity to outdo yesterday's masterpiece.
        </p>
      </div>
    </div>
  );
};

export default About;
