import React from "react";
import './Home.css';
import { HoverSideNav } from "../navigation/HoverSideNav";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';;


export const Home = () => {
  return (
    <React.Fragment>
      <div className="Home" id='home'>
        <CssBaseline />
        <HoverSideNav />
        <Container maxWidth="lg">
          <Box sx={{ height: '100vh' }}>
            <div className="content">
              <div className="hero_header">
                <h1>Stephen Melben Corral</h1>
              </div>
              <div className="text">
                <h1>A Fullstack Software Engineer.</h1>
              </div>
            </div>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
}