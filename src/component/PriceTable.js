import { Box, Typography } from "@mui/material";
import React from "react";
import Banana from '../images/Monkes Logo 1.png';
import Sui from '../images/sui-logo8d3c44e 4.png';

export default function PriceTable(props){
return(
    <Box sx={{display: 'flex', justifyContent: 'space-between', background: "#F5F5F5", alignItems : 'center', borderRadius: '12px', p: "10px 15px" }} >
        <Box variant="subtitle1" sx={{width:{xs: "60%", sm: "40%", md:"20%"}, display: 'flex', justifyContent: 'space-evenly', alignItems : 'center'}}>
            <Typography>{props?.no || 2}</Typography>
            <img style={{borderRadius : '12px', height: "40px"}} src={Banana}  alt={Banana} />
            <Typography sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', fontSize:'10px' }}>
                <Typography sx={{fontSize: 'inherit'}}>GenZ Monkes</Typography>
                <Typography sx={{fontSize:'inherit' }}>Floor <img src={Sui} alt={Sui} /> 133</Typography>
            </Typography>
        </Box>
        <Box variant="subtitle2" sx={{fontSize:'10px' }}>
            <Typography sx={{fontSize:'inherit'}}>+105.36</Typography>
            <Typography sx={{fontSize: 'inherit'}}><img src={Sui} alt={Sui} /> 43K</Typography>
        </Box>
    </Box>
)
}