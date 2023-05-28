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
        <p>Every great design begin with an even better story</p>
      </div>
      <div className={`content fade-up ${contentInView ? 'fade-up-visible' : ''}`} ref={contentRef}>
        <p>
          I am a full stack web developer with a background in mechanical
          engineering. I have a passion for learning and problem solving. I am a
          team player and I enjoy working with others to achieve a common goal.
          I am a quick learner and I am always looking for ways to improve my
          skills.
        </p>
      </div>
    </div>
  );
};

export default About;
