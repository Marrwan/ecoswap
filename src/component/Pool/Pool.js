import { Box, Typography } from '@mui/material';
import React from 'react';
import Monke from '../../images/genz background.png';
import MonkeLogo from '../../images/Monkes Logo 1.png';

export default function Pool(){
    return(
        <Box>
            <Typography component="img" src={Monke} sx={{
                height: '100%',
                width: '100vw'
            }} />
            <Box 
            sx={{
                marginLeft: '20vw',
                // width: '50vw'
            }}
            >
                <Typography component="img" src={MonkeLogo} sx={{
                    marginTop: '-50%',
                    // marginLeft: '-20%',
                }} />
                <Typography>GenZ Monkes</Typography>
                <Typography>GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. See More...</Typography>
                <Typography></Typography>
            </Box>
        </Box>
    )
}