import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Activity from './Activity';

export default function ActivityList(){
    let number = [1,2,3,4,5];

let App = number.map((index)=>( 
<Grid item key={index} gridColumn="span 4"  sm={12} xs={12} sx={{width:{md:"100vh", sm:"100%"}}}>
     <Activity />
</Grid>))
    return(
        <Box sx={{width:"100%", marginBottom:'20px', marginTop: '100px'}}>
            <Typography sx={{display: {xs: 'flex', md: 'none'}, justifyContent: 'space-between', alignItems: 'center'}}>
                <Typography>Assets</Typography>
                <Typography>Time</Typography>
                <Typography>Action</Typography>
                <Typography>Price</Typography>
                <Typography>Transaction</Typography>
            </Typography>
            <Grid container  spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:0, lg:1 }} sx={{width: '100%', display:{lg:'flex', md:"grid"}, justifyContent:{lg:'space-between'}}}>
                {App}
            </Grid>           
        </Box>
        
    )
}