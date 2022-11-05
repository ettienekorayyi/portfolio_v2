import React, { forwardRef } from 'react'; // , { useEffect }
import './Projects.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import ProjectCards from "./ProjectCards";
import { projects } from '../../api/projects';

export const Projects = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='Projects' style={{ height: '51rem', overflowY: 'hidden' }}>
            <CssBaseline />
            <Container maxWidth="lg" >
                <Box style={{ margin: '2rem auto' }}>
                    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" spacing={2}>
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
