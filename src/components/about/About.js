import React from "react";
import './About.css';
import photo from "../../img/stephen.jpg";
import csharp from "../../img/icons-csharp.png";
import css3 from "../../img/icons-css3.png";
import html from "../../img/icons-html.png";
import js from "../../img/icons-js.png";
import python from "../../img/icons-python.png";
import react from "../../img/icons-react.png";
import redux from "../../img/icons-redux.png";
import ubuntu from "../../img/icons-ubuntu.png";
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

export const About = () => {
    return (
        <React.Fragment>
            <div className="About">
                <CssBaseline />
                <HoverSideNav />
                <Box sx={{ height: '100vh' }} className="row">
                    <div className="column item1">
                        <div id="curve1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f5c126" fill-opacity="1" d="M0,288L24,266.7C48,245,96,203,144,170.7C192,139,240,117,288,112C336,107,384,117,432,133.3C480,149,528,171,576,181.3C624,192,672,192,720,192C768,192,816,192,864,186.7C912,181,960,171,1008,138.7C1056,107,1104,53,1152,53.3C1200,53,1248,107,1296,117.3C1344,128,1392,96,1416,80L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path></svg>
                        </div>


                        <AboutContent />

                    </div>
                    <div className="column item2" style={{ backgroundColor: "black" }}>
                        <img src={photo} />
                    </div>
                </Box>
            </div>
        </React.Fragment>
    );
}