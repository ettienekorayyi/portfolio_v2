import React, { forwardRef } from 'react'; 
import './Projects.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import ProjectCards from "./ProjectCards";
import { projects } from '../../api/projects';

const useStyles = makeStyles(() => ({
    root: { height: '51rem', overflowY: 'hidden' },
    mobileRoot: { height: '80rem', overflowY: 'hidden' },
    mobileContent: { margin: '0 auto', width: '70vw' }
  }));

export const Projects = forwardRef((props, ref) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:375px)');

    return (
        <div ref={ref} className={`${matches ? classes.mobileRoot : classes.root} Projects`} >
            <CssBaseline />
            <Container maxWidth="lg" >
                <Box style={{ margin: '2rem auto' }}>
                    <Grid sx={{ flexGrow: 1 }} container spacing={2} className={classes.mobileContent}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={2} className={classes.mobileContent}>
                                {
                                    projects.map(({ id,photo,url,title,description }) => (
                                        <Grid key={id} item>
                                            <ProjectCards
                                                photo={photo}
                                                url={url}
                                                title={title}
                                                description={description}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
});


