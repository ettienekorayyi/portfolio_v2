import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './Home.css';
import { HoverSideNav } from "../navigation/HoverSideNav";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';;


export const Home = () => {
  const theme = useTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 412,
      },
    },
  });

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  
  const titleName = { fontSize: matches === true ? '60px' : '80px' };
  

  return (
    <React.Fragment>
      <div className="Home" id='home'>
        <CssBaseline />
        <HoverSideNav />
        <Container maxWidth="lg">
          <Box style={{ height: '100vh' }}>
            <div className="font_style content">
              <div className="hero_header" >
                <h1 style={titleName}>Stephen Melben Corral</h1>
                {/*<span>`(min-width:412px) matches: ${matches}`</span>*/}
              </div>
              <div className={matches === true ? 'text_mobile' : 'text_desktop'}>
                <h1 >A Fullstack Software Engineer.</h1>
              </div>
            </div>
          </Box>
        </Container>
      </div>
    </React.Fragment>
  );
}