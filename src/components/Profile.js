import React from "react";

// css & assets
import "../css/Profile.css";
import profilePic from "../assets/profilePic.jpg";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Profile = () => {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const yOffset = -100; // adjust this value according to your needs
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };


  return (
    <div className="profile">
      <div className="profile-name">
        <h1>Kaisen Ye</h1>
      </div>
      <div className="profile-pic">
        <div className="profile-pic-overlay">
          <img src={profilePic} alt="profile-pic" />
        </div>
      </div>
      <div className="profile-info">
        <p id="profile-email">Comp Eng @USC</p>
        <p id="profile-location">Based in Los Angeles, CA</p>
      </div>
      <div className="profile-social">
        <div className="profile-icon">
          <a href="https://www.linkedin.com/in/kaisenye" target="_blank" rel="noreferrer" >
            <SlSocialLinkedin />
          </a>
        </div>
        <div className="profile-icon">
          <a href="https://github.com/kaisenye" target="_blank" rel="noreferrer" >
            <AiFillGithub />
          </a>
        </div>
        <div className="profile-icon">
          <a href="mailto:kaisenye20@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
      <div className="profile-contact">
        <div className="contact-btn" onClick={() => handleScroll("contact")}>
          <AiOutlineMail className="icon-contact-email" />
          <p>Contact Me</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
