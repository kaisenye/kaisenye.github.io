import React from "react";

//css
import "../css/NavBar.css";
import { AiOutlineHome } from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { IoShapesOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

const NavBar = () => {

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const yOffset = -100; // adjust this value according to your needs
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <div className="nav-bar">
      <div className="nav-bar-item" onClick={() => handleScroll("home")}>
        <AiOutlineHome />
      </div>
      <div className="nav-bar-item" onClick={() => handleScroll("education")}>
        <IoBookOutline />
      </div>
      <div className="nav-bar-item" onClick={() => handleScroll("work")}>
        <MdWorkOutline />
      </div>
      <div className="nav-bar-item" onClick={() => handleScroll("projects")}>
        <IoShapesOutline />
      </div>
      <div className="nav-bar-item" onClick={() => handleScroll("contact")}>
        <AiOutlineMail />
      </div>
    </div>
  );
};

export default NavBar;
