import React from "react";

// css
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <p>
          Say Hi from <p className="highlight-text">Kaisen</p>{" "}
        </p>
        <p>A Developer and Software Enthusiast</p>
      </div>
      <div className="content">
        <p>
          Hi, I’m Kaisen Ye! I’m passionate about solving meaningful problems through technology and bringing innovative ideas to life. With a background in Electrical and Computer Engineering from USC, I’ve been exploring how machine learning and AI can make everyday systems smarter and more efficient.

          I believe in the power of curiosity, adaptability, and teamwork, and I’m always looking for ways to make an impact through thoughtful innovation. Let’s build something incredible together!
        </p>
      </div>
      <div className="stats">
        <div className="stats-item">
          <p className="stats-number">5</p>
          <p className="stats-text">Job Experiences</p>
        </div>
        <div className="stats-item">
          <p className="stats-number">10+</p>
          <p className="stats-text">Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
