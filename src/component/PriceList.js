import React from 'react';
import PriceTable from './PriceTable';
import { Box } from '@mui/material';
import Monke1 from '../images/GenZ Monke.png';
import Monke2 from '../images/GenZ Monke(2).png';
import Monke3 from '../images/GenZ Monke(3).png';
import Monke4 from '../images/GenZ Monke(4).png';
import Monke5 from '../images/GenZ Monke(5).png';


export default function PriceList(){
    const monkes = [
        {monke: Monke1, title : "Gen Z Monke 1", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"},
    {monke: Monke2,  title : "Gen Z Monke 2", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"}
    ,{ monke: Monke3, title : "Gen Z Monke", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"},
    {monke: Monke4, title: "Gen Z Monke 4", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"}
  ,  {monke: Monke5, title: "Gen Z Monke 5", description: "GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. With the extensive experience and success on Near Blockchain, we’re ready to take Sui NFTs to the Next Level"}
  ];
let App = monkes.map((item, index)=>( <Box key={index.title} sx={{m: "11px 1px"}}>
     <PriceTable  no={index} />
     </Box>))
    return(
        <Box>
            {App}            
        </Box>
    )
}