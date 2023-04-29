import React from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';


export default function NFT(props){
    return (
      <Box  sx={{width:"max-content", background: '#F3F3F3', m: '10px', height: 'min-content', borderRadius: 5    }}>
        <Card sx={{ maxWidth: '100%',  borderRadius: 5 }} >
      <CardMedia
      component="img"
      sx={{ width: 191, borderRadius: 5, m: 0.5, height:{md : "10%", xs:"120px", sm: "170px"} }}
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
    </Box>
    )
}