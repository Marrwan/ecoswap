import * as React from 'react';
import { BottomNavigation, Box, Icon, Paper, Toolbar, Typography } from '@mui/material';
import Logo from '../images/Ecoswap logo 4 1.png';
import { Language, Twitter } from '@mui/icons-material';
import Discord from '../images/discord-computer-icons-logo-computer-software-avatar-5dcd8a759521fd6bde97d48d4d0e161f (2).png';


function Navbar() {
 
 
  return (
    <Paper
    sx={{ position: 'fixed', bottom: 0, left: 0, right: 0}}
    elevation={3}
    >
        
        <BottomNavigation 
        sx={{display: 'flex', justifyContent : 'space-between', alignItems: 'center', background: '#D9D9D9', height: {lg: '18vh', md:'14vh', sm:'15vh' }  }}
        >
            <Toolbar disableGutters>
            <img src={Logo} alt={Logo} style={{height: '5em', marginRight : '10px'}} />
          <Typography
            variant="h6"
            // noWrap
            // component="a"
            // href="/"
            sx={{
                mr: 2,
                display: {sm : 'flex', xs: 'none'} ,
                fontFamily: 'Roboto',
                fontWeight: 800,
                color: 'inherit',
                // fontSize:{xs:'10px'},
                textDecoration: 'none',
            }}
            >
            ECOSWAP
          </Typography>
              </Toolbar>
            <Box 
            sx={{textAlign: 'center'}}
            >
                <Typography
                sx={{textAlign: 'center', width: '45%', m: 'auto ', fontSize: {xs : '6px', sm: '7px', md: '15px', lg: '15px', xl: '30px'}}}
                >Swap, earn and build on the leading decentralized 
cryptocurrency protocol. Best NFTxDEFI on SUI.Swap, earn and build on the leading decentralized 
cryptocurrency protocol. Best NFTxDEFI on SUISwap, </Typography>
            </Box>
            <Box 
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        m: '0 auto',
        width: '20%'
      }}>
      <Twitter onClick={() => window.location = "https://twitter.com/ecoswapfi"} sx={{color: 'black'}}/>
        <Language sx={{color: 'black'}} />
        <Icon >
        <img src={Discord} onClick={()=> window.location = "https://discord.gg/monkes"} alt={Discord} style={{height: 'inherit', width:'inherit'}} />
        </Icon>
      </Box>
        </BottomNavigation>
        </Paper>
  );
}
export default Navbar;
