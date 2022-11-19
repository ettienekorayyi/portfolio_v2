import React, { forwardRef, useState } from "react";
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import contact from "../../api/contact";
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
    const [name, setName] = useState('');
    const [toEmail, setToEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const classType = matches === true ? 'wave_mobile' : 'wave_desktop';

    const clickHandler = async () => {
       
        await contact.post("/email", {
            "Name": name,
            "ToEmail": toEmail,
            "Subject": subject,
            "Message": message
        }).then((response) => {
            console.log(response)
        });
        clearHandler();
    };

    const clearHandler = () => {
        setName('');
        setToEmail('');
        setSubject('');
        setMessage('');
    };

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
                                value={name}
                                variant="filled"
                                onChange={e => setName(e.target.value)}
                            />
                            <TextField
                                id="filled-basic"
                                className={matches === true ? 'mobile_field' : 'desktop_field'}
                                label="Email"
                                value={toEmail}
                                variant="filled"
                                onChange={e => setToEmail(e.target.value)}
                            />
                            <TextField
                                id="filled-basic"
                                className={matches === true ? 'mobile_field' : 'desktop_field'}
                                label="Subject"
                                value={subject}
                                variant="filled"
                                onChange={e => setSubject(e.target.value)}
                            />

                            <TextField
                                id="filled-multiline-static"
                                className={matches === true ? 'mobile_field' : 'desktop_field'}
                                label="Your Message"
                                value={message}
                                multiline
                                rows={4}
                                variant="filled"
                                onChange={e => setMessage(e.target.value)}
                            />

                            <Button
                                variant="outlined"
                                className={matches ? 'mobile_contact_btn' : 'desktop_contact_btn'}
                                onClick={clickHandler}
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

