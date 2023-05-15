import React from 'react';

// css & assets
import '../css/Profile.css';
import profilePic from '../assets/profilePic.jpg';
import { SlSocialLinkedin } from 'react-icons/sl';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile-name">
                <h1>Kaisen Ye</h1>
            </div>
            <div className="profile-pic">
                <div className="profile-pic-overlay">
                    <img src={profilePic} alt="profile-pic" />
                </div>
            </div>
            <div className="profile-info">
                <p id='profile-email'>Comp Eng @USC</p>
                <p id='profile-location'>Base in Los Angeles, CA</p>
            </div>
            <div className="profile-social">
                <div className="profile-icon">
                    <SlSocialLinkedin />
                </div>
                <div className="profile-icon">
                    <AiFillGithub />
                </div>
                <div className="profile-icon">
                    <AiOutlineMail />
                </div>
            </div>
            <div className="profile-contact">
                <div className="contact-btn">
                    <AiOutlineMail className='icon-contact-email'/>
                    <p>Contact Me</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;