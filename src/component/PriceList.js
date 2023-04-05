import React from 'react';
import PriceTable from './PriceTable';
import { Box, Grid, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

export default function PriceList(){
    let number = [1,2,3,4,5,6,7,8];

let App = number.map((index)=>( 
<Grid item key={index} gridColumn="span 4"  md={5} sm={12} xs={12} sx={{width:{md:"100vh", sm:"100%"},m: "11px 1px"}}>
     <PriceTable  no={index} />
</Grid>))
    return(
        <Box sx={{width:"100%", marginBottom:'20px'}}>
            <Typography sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography>Popular Collections</Typography>
                <Typography >Last 24 hours <ExpandMore /> </Typography>
            </Typography>
            <Grid container  spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:12 }} sx={{width: '100%', display:{lg:'flex', md:"grid"}, justifyContent:{lg:'space-between'}}}>
                {App}
            </Grid>           
        </Box>
        
    )
}