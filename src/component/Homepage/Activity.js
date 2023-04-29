import React from 'react';
import { Box, Typography } from "@mui/material";
import Banana from '../../images/Monkes Logo 1.png';
import Sui from '../../images/sui-logo8d3c44e 4.png';

export default function Activity(){
    
    return(
        <Box sx={{display: 'flex', background : "#F5F5F5",
         justifyContent: 'space-between', alignItems : 'center', borderRadius: '12px', p: "10px 6px", m:0 }} >
            <Box variant="subtitle1" sx={{width:{xs: "60%", sm: "40%", md:"20%"}, display: 'flex', justifyContent: 'space-evenly', alignItems : 'center'}}>
                <img style={{borderRadius : '12px', height: "40px"}} src={Banana}  alt={Banana} />
                <Typography sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', fontSize:'10px' }}>
                    <Typography sx={{fontSize: 'inherit'}}>GenZ Monkes</Typography>
                    <Typography sx={{fontSize:'inherit' }}>Floor <img src={Sui} alt={Sui} /> 133</Typography>
                </Typography>
            </Box>
            <Box >
                <Typography>1 minute ago</Typography>
            </Box>
            <Box sx={{display:{sm: 'block', xs: 'none'}}}>
                <Typography>instant Sell</Typography>
            </Box>
            <Box sx={{display:{sm: 'none', xs: 'none', md: 'block'}}}>
                <Typography> 0.885</Typography>
            </Box>
            <Box sx={{display:{sm: 'none', xs: 'none', md: 'block'}}}>
                <Typography>qYrKo.......8dxa</Typography>
            </Box>

        </Box>
    )
    }