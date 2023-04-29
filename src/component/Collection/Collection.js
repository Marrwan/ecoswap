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
    background: '#DA4FD480',

    }}>
      <Typography
      sx={{
        color: '#161616', 
        fontWeight: 600
      }}
      >My Collections</Typography>
   <Box
   
   sx={{
    width: "100%",
    display: 'grid',
    // justifyContent: 'space-around',
    gridTemplateColumns: '1fr 1fr ',
    overflow : 'hidden'

   }}
    >
         {compmonke}
   </Box>
   </Box>
  )
}