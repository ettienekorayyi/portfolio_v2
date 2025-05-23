import React, { forwardRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import photo from "../../img/black dust particle.png";
import csharp from "../../img/icons-csharp.png";
import css3 from "../../img/icons-css3.png";
import html from "../../img/icons-html.png";
import js from "../../img/icons-js.png";
import python from "../../img/icons-python.png";
import react from "../../img/icons-react.png";
import redux from "../../img/icons-redux.png";
import ubuntu from "../../img/icons-ubuntu.png";

import './About.css';
import { BriefSummaryTitleLabels, BriefSummaryContentLabels } from '../../common/Labels';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';


const AboutContent = ({matches}) => {
    const classType = `font_style content ${matches === true ? 'summary_mobile' : 'summary_desktop'}`;
    return (
        <div className="AboutContent">
            <div className={classType}>
                <div className="title summary" >
                    <BriefSummaryTitleLabels />
                </div>
                <div className="description text-content">
                    <BriefSummaryContentLabels />
                </div>
            </div>
            <div className={classType}>
                <div className="title skills" >
                    <h1>Skills & Technologies</h1>
                </div>
                <div className="description text-content">
                    <div className="skills-row1">
                        <img className="tech" src={csharp} />
                        <img className="tech" src={css3} />
                        <img className="tech" src={html} />
                        <img className="tech" src={js} />
                    </div>
                    <div className="skills-row2">
                        <img className="tech" src={python} />
                        <img className="tech" src={react} />
                        <img className="tech" src={redux} />
                        <img className="tech" src={ubuntu} />
                    </div>
                </div>
            </div>
        </div>
    );
}



export const About = forwardRef((props, ref) => {
    
    const theme = useTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 412,
            },
        },
    });

   
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div ref={ref} className="About" id="about">
            <CssBaseline />
            
            <Box sx={{ height: '100%', overflowY: 'hidden' }} className="row">
                <div className="column item1">
                    <AboutContent matches={matches} />
                </div>
                <div className="column item2" style={{ backgroundColor: "#f5c126" }}>
                    <div className={matches === true ? 'wrapper_mobile' : 'wrapper_desktop'}>
                        <img id='me' src={photo} />
                    </div>
                </div>
            </Box>
        </div>
    );
});