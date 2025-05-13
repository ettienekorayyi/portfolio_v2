import React from 'react';
import Box from '@mui/material/Box';
import './_404Page.css';

export const _404Page = () => {
    return (
        <>
            <div className="_404Page">
                <Box sx={{ height: '100vh', overflowY: 'hidden' }}>
                    <div className="wrapper">
                        <div className="error_title ">
                            <h1 
                                className='error_style_title skew'
                                style={{ marginBottom: '0' }}
                            >
                                Coming Soon
                            </h1>
                            <h3 
                                className='error_style_subtitle skew'
                                style={{ marginTop: '0', fontSize: 'x-large' }}
                            >
                                Page Under Construction
                            </h3>
                        </div>
                    </div>
                </Box>
            </div>
        </>
    )
}