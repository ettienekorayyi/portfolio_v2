import React from "react";
import './Home.css';
import { HoverSideNav } from "../navigation/HoverSideNav";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';;



export const Home = () => {
  return (
    <React.Fragment>
      <div className="Home">
        <CssBaseline />
        <HoverSideNav />
        <Container maxWidth="lg">


        </Container>
      </div>
    </React.Fragment>
  );
}