import React, { useEffect, useRef, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import photo from "../../img/stephen.jpg";
import csharp from "../../img/icons-csharp.png";
import css3 from "../../img/icons-css3.png";
import html from "../../img/icons-html.png";
import js from "../../img/icons-js.png";
import python from "../../img/icons-python.png";
import react from "../../img/icons-react.png";
import redux from "../../img/icons-redux.png";
import ubuntu from "../../img/icons-ubuntu.png";
import wave from "../../img/wave.png";

import './About.css';
import { HoverSideNav } from "../navigation/HoverSideNav";
import { BriefSummaryTitleLabels, BriefSummaryContentLabels } from '../../common/Labels';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';;


const AboutContent = ({matches}) => {
    const classType = `font_style content ${matches === true ? 'summary_mobile' : 'summary_desktop'}`;
    return (
        <div className="AboutContent">
            <div className={classType}>
                <div className="title" style={{  width: matches === true ? '19rem' : '29rem' }} >
                    <BriefSummaryTitleLabels />
                </div>
                <div className="description text-content" style={{ width: matches === true ? '19rem' : '28rem', letterSpacing: '4px' }}>
                    <BriefSummaryContentLabels />
                </div>
            </div>
            <div className={classType}>
                <div className="title" style={{ width: matches === true ? '19rem' : '29rem'}} >
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

// Declare and Assign a useRef in a ref variable
// Declare local state
// Assign the ref variable as a prop
// Set a useEffect 
//    - use console to display the current ref value: TEMPORARY 
//    - set the current ref to state
// Pass the state as a props to navigation

export const About = () => {
    const aboutRef = useRef()
    const [target, setTarget] = useState('');

    const theme = useTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 412,
            },
        },
    });

    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        setTarget(aboutRef.current)
        //console.log(aboutRef.current)
    }, [])

    return (
        <div ref={aboutRef} className="About" id="about">
            <CssBaseline />
            <HoverSideNav target={target} />
            <Box sx={{ height: '100%', overflowY: 'hidden' }} className="row">
                <div className="column item1">
                    <div id="wrapper">
                        <div id="curve1"><img className={matches === true ? 'wave_mobile' : 'wave_desktop'} src={wave} /></div>
                    </div>
                    <AboutContent matches={matches} />
                </div>
                <div className="column item2" style={{ backgroundColor: "black" }}>
                    <div className={matches === true ? 'wrapper_mobile' : 'wrapper_desktop'}>
                        <img id='me' src={photo} />
                    </div>
                </div>

            </Box>
        </div>

    );
}