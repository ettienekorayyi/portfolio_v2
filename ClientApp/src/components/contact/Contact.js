import React, { forwardRef } from "react";
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { HoverSideNav } from "../navigation/HoverSideNav";
import './Contact.css';
import wave from "../../img/wave.png";

export const Contact = forwardRef((props, ref) => {
    const theme = useTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 412,
            },
        },
    });
    
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const classType = matches === true ? 'wave_mobile' : 'wave_desktop';
    
    return (
        <div ref={ref} className="Contact" id='contact'>
            
            <div className='grid-container'>
                <div id='col-form'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '30ch' },
                            margin: '10% 30%'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='form_content'>
                            <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Contact Me</h1>
                            <TextField
                                id="filled-basic"
                                className={matches === true ? 'mobile_field' : 'desktop_field'}
                                label="Name"
                                variant="filled"
                                
                            />
                            <TextField
                                id="filled-basic"
                                className={matches === true ? 'mobile_field' : 'desktop_field'}
                                label="Email"
                                variant="filled"
                                
                            />
                            <TextField
                                id="filled-basic"
                                className={matches === true ? 'mobile_field' : 'desktop_field'}
                                label="Subject"
                                variant="filled"
                                
                            />

                            <TextField
                                id="filled-multiline-static"
                                className={matches === true ? 'mobile_field' : 'desktop_field'}
                                label="Your Message"
                                multiline
                                rows={4}
                                variant="filled"   
                            />

                            <Button
                                variant="outlined"
                                className={matches ? 'mobile_contact_btn' : 'desktop_contact_btn'}
                                
                            >Send</Button>
                        </div>
                    </Box>
                </div>
                <div id={matches === true ? 'mobile_col-div' : 'col-div'}>
                    <div id="curve1">
                        <img className={classType} style={{ left: '42rem' }} src={wave} />
                    </div>
                </div>
            </div>
        </div>
    );
});

