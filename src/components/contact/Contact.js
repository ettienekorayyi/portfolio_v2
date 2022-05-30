import * as React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Contact.css';
import wave from "../../img/wave.png";

export const Contact = () => {
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
        <div className="Contact">
            <div className='grid-container'>
                <div id='col-form'>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '35ch' },
                            margin: '10% 30%'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div >
                            <h1 style={{ textAlign: 'center', fontSize: '50px' }}>Contact Me</h1>
                            <TextField
                                id="filled-basic"
                                label="Name"
                                variant="filled"
                                style={{ width: '25vw', marginTop: '5%', marginLeft: '6%' }}
                            />
                            <TextField
                                id="filled-basic"
                                label="Email"
                                variant="filled"
                                style={{ width: '25vw', marginTop: '5%', marginLeft: '6%' }}
                            />
                            <TextField
                                id="filled-basic"
                                label="Subject"
                                variant="filled"
                                style={{ width: '25vw', marginTop: '5%', marginLeft: '6%' }}
                            />

                            <TextField
                                id="filled-multiline-static"
                                label="Your Message"
                                multiline
                                rows={4}
                                variant="filled"
                                style={{ width: '25vw', marginTop: '5%', marginLeft: '6%' }}
                            />

                            <Button
                                variant="outlined"
                                style={{
                                    color: 'black',
                                    borderColor: 'black',
                                    margin: '5% 0',
                                    height: '7vh', 
                                    marginLeft: '6%'
                                }}
                            >Outlined</Button>
                        </div>
                    </Box>
                </div>
                <div id='col-div'>
                    <div id="curve1">
                        <img className={classType} style={{ left: '42rem' }} src={wave} />
                    </div>
                </div>
            </div>
        </div>
    );
}
