import { Box, Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../images/sui-logo8d3c44e 4.png";
import Monke from '../../images/GenZ Monke(2).png';

export default function Image(props){
    return(
      <Grid item lg={3} md={3} sm={3} xs={5} sx={{margin: '0 1px',}}>
        <Card sx={{  
          borderRadius: "35px 35px 15px", 

         
         }}>
  <Box sx={{ position: 'relative' }}>
    <CardMedia
      component="img"
    //   height="200"
      image={props.image ? props.image : Monke}
    //   image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
    />
    
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        bgcolor: 'transparent',
        color: 'rgba(238, 238, 238, 1)',
        padding: '10px',

      }}
    >
        <Box
        sx={{
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: {xs: '5px', sm: '10px', md: '13px'},

        }}
        >

      <Typography sx={{fontSize: 'inherit'}} variant="h5">Genz Monke
      <Typography sx={{fontSize: 'inherit'}}>#02937</Typography>
      </Typography>
      <Typography sx={{fontSize: 'inherit'}} variant="body2"><img src={Logo} alt={Logo}/> 23899</Typography>
        </Box>
    </Box>
  </Box>
  
</Card>
</Grid>
    )
}