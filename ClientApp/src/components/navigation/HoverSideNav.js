import React, { forwardRef } from "react";
import './HoverSideNav.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LaptopIcon from '@mui/icons-material/Laptop';
import { smoothScroll } from '../../utils/scroll';

export const HoverSideNav = ({about, contact, home}) => {
   
    //console.log(contact.current)

    return (
        <div className="sidenav">
            <a href="#" id="home" onClick={() => smoothScroll(home.current)}>Home <HomeIcon id="homeIcon" /></a>
            <a href="#" id="about" onClick={() => smoothScroll(about.current)}>About <PersonIcon id="personIcon" /></a>
            <a href="#" id="experience" >Work <BusinessCenterIcon id="workIcon" /></a>
            <a href="#" id="projects" >Projects <LaptopIcon id="projectsIcon" /></a>
            <a href="#" id="contact" onClick={() => smoothScroll(contact.current)}>Contact <TelegramIcon id="telegramIcon" /></a>
        </div>
    );
}

