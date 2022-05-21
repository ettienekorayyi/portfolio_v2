import React, { useEffect, useRef, useState } from "react";

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
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';;

const AboutContent = () => {
    
    
    return (
        <>
            <div className="content summary">
                <div className="title">
                    <h1>A Brief Summary of Myself</h1>
                </div>
                <div className="description text-content">
                    <p>
                        Hi folks, I'm Stephen, I love building, breaking, and rebuilding stuff.
                        I enjoy software development and I'm currently engaged in IT volunteer at
                        Code.Sydney where I assisted them with web development with 3 of their
                        projects in which, two of those projects I lead.
                    </p>
                </div>
            </div>
            <div className="content summary">
                <div className="title">
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
        </>
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
                        <div id="curve1">
                            <img src={wave} />
                        </div>

                        <AboutContent />
                    </div>
                    <div className="column item2" style={{ backgroundColor: "black" }}>
                        <img src={photo} />
                    </div>
                </Box>
            </div>
        
    );
}