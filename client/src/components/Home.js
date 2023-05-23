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
        <p>Framer Designer and Developer</p>
      </div>
      <div className="content">
        <p>
          Hi, I'm Kaisen Ye, a Framer Designer and Developer based in Los
          Angeles, CA.
        </p>
      </div>
      <div className="stats">
        <div className="stats-item">
          <p className="stats-number">10+</p>
          <p className="stats-text">Years of Experience</p>
        </div>
        <div className="stats-item">
          <p className="stats-number">52+</p>
          <p className="stats-text">Projects Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
