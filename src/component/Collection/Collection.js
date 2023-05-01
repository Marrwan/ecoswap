import React from 'react';
import NFT from './NFT';
import Monke1 from '../../images/GenZ Monke.png';
import Monke2 from '../../images/GenZ Monke(2).png';
import Monke3 from '../../images/GenZ Monke(3).png';
import Monke4 from '../../images/GenZ Monke(4).png';
import Monke5 from '../../images/GenZ Monke(5).png';
import { Box, Grid, Typography } from '@mui/material';



export default function Collection(){
    const monkes = [
        {monke: Monke1, title : "Gen Z Monke 1", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"},
    {monke: Monke2,  title : "Gen Z Monke 2", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"}
    ,{ monke: Monke3, title : "Gen Z Monke", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"},
    {monke: Monke4, title: "Gen Z Monke 4", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"}
  ,  {monke: Monke5, title: "Gen Z Monke 5", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"}
  ];

  const compmonke =  monkes.map((monkey)=>(
    <NFT title={monkey.title} monke={monkey.monke} key={monkey.monke} description={monkey.description} />
  ))

  return (
    <Box sx={{maxWidth: "100vw",
    background: 'rgba(218, 79, 212, 0.5)',
    height: {lg: '80vh', md:'83vh', sm:'85vh' },
    pt: '20px'


    }}>
      <Typography
      sx={{
        color: '#161616', 
        fontWeight: 600,
        m: '20px 10px',
      
        fontFamily: 'Poppins',
        textAlign: 'start',
      }}
      >My Collections</Typography>
   <Grid
   container
   sx={{
    width: "100vw",

   }}
    >
         {compmonke}
   </Grid>
   </Box>
  )
}