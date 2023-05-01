import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';


export default function NFT(props){
    return (
      <Grid item lg={1.6} md={2.7} sm={3} xs={8} sx={{width:"100%", background: '#F3F3F3', m: '10px', height: 'min-content', borderRadius: 5 ,   }}>
        <Card sx={{ maxWidth: '100%',  borderRadius: 5 }} >
      <CardMedia
      component="img"
      sx={{ width: '100%', borderRadius: 5, m: 0.5, height:{md : "10%", xs:"20%", sm: "15%"} }}
        image={props.monke} 
        loading='lazy'
      />
      <CardContent
      sx={{height : ''}}
      >
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        
      </CardContent>
    </Card>
    </Grid>
    )
}