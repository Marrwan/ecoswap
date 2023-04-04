import * as React from 'react';
import  {Box,
    Card,
    CardContent,
    CardMedia,
    Typography, Button, Grid}from '@mui/material';

export default function Monkes(props) {

  return (
<Grid item lg={6} md={6} sm={12} xs={12} sx={{width:"100%"}}>
    <Card sx={{ display: 'flex', maxWidth: "100%", m: "10px", borderRadius: 5 }}>
       <CardMedia
        component="img"
        sx={{ width: 191, borderRadius: 5, m: 0.5, height:{md : "1%", xs:"120px", sm: "170px"} }}
        image={props.monke}
      
        alt={props.description}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{marginTop: 0, fontSize:{md: "20px", xs:"15px"}}}>
            {props.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: {xs : "5px", sm: "10px", md: "14px"}}} color="text.secondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         
<Button variant="contained" sx={{bgcolor:'#DA4FD45C', m: "0 auto", fontSize:{md:"10px", xs: "6px"}}}>Explore Collection</Button>
        </Box>
      </Box>
   
    </Card>
</Grid>
  );
}