import React from 'react';

//css
import '../css/NavBar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { MdWorkOutline } from 'react-icons/md';
import { VscProject } from 'react-icons/vsc';
import { IoShapesOutline } from 'react-icons/io5';
import { AiOutlineMail } from 'react-icons/ai';


const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-bar-item'>
                <AiOutlineHome />
            </div>
            <div className='nav-bar-item'>
                <MdPersonOutline />
            </div>
            <div className='nav-bar-item'>
                <MdWorkOutline />
            </div>
            <div className='nav-bar-item'>
                <VscProject />
            </div>
            <div className='nav-bar-item'>
                <IoShapesOutline />
            </div>
            <div className='nav-bar-item'>
                <AiOutlineMail />
            </div>  
        </div>
    );
};

export default NavBar;