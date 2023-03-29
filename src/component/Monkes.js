import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import  {Box,
    Card,
    CardContent,
    CardMedia,
    Typography, Button, Grid}from '@mui/material';

export default function Monkes(props) {
  const theme = useTheme();

  return (
<Grid item lg={6} md={6} sm={12} xs={12} sx={{width:"50%"}}>
    <Card sx={{ display: 'flex', boxShadow:0 }}>
       <CardMedia
        component="img"
        sx={{ width: 191, borderRadius: 5, m: 0.5 }}
        image={props.monke}
        alt={props.description}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         
<Button variant="contained" sx={{bgcolor:'#DA4FD45C', m: "0 auto"}}>Explore Collection</Button>
        </Box>
      </Box>
   
    </Card>
</Grid>
  );
}