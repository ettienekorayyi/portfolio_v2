import './HoverSideNav.css';
import TelegramIcon from '@mui/icons-material/Telegram';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LaptopIcon from '@mui/icons-material/Laptop';
import { smoothScroll } from '../../utils/scroll';



export const HoverSideNav = ({target}) => {
    const onNavClick = (e) => {
        smoothScroll(target)
    }    

    return (
        <div className="sidenav">
            <a  id="home" onClick={onNavClick}>Home <HomeIcon id="homeIcon" /> </a>
            <a  id="about" onClick={onNavClick}>About <PersonIcon id="personIcon"/> </a>
            <a href="#" id="experience">Work <BusinessCenterIcon id="workIcon"/></a>
            <a href="#" id="projects">Projects <LaptopIcon id="projectsIcon"/></a>
            <a href="#" id="contact">Contact <TelegramIcon id="telegramIcon" /></a>
        </div>
    );
}

