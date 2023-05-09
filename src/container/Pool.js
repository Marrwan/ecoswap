import { Box, Button, Icon, Typography } from '@mui/material';
import React, { useState } from 'react';
import Monke from '../images/genz background.png';
import MonkeLogo from '../images/Monkes Logo 1.png';
import { Language, Twitter } from '@mui/icons-material';
import Discord from '../images/discord-computer-icons-logo-computer-software-avatar-5dcd8a759521fd6bde97d48d4d0e161f (2).png';
import Item from '../component/Pool/Item';
import Activity from '../component/Pool/Activity';
import Analtytics from '../component/Pool/Analytics';
import Offer from '../component/Pool/Offer';

export default function Pool(){
    const [selectedTab, setSelectedTab] = useState('items');
    const underlineStyle = {
        borderBottom : '1px solid black'
    }
    const handleTabChange = (e) => {
        setSelectedTab(e);
    }
    return(
        <Box 
        sx={{
            width: '100vw',
             paddingBottom: {lg: '20vh', md:'17vh', sm:'15vh' },

            // height: '100vh',
        }}
        >
            <Typography component="img" src={Monke} sx={{
                height: '100%',
                width: '100vw'
            }} />
            <Box 
            sx={{
                maxWidth: '95%',
                width: '100%', 
            }}
            >
                <Typography component="img" src={MonkeLogo} sx={{
                     marginTop: '-50%',
                }} />
                <Box
                sx={{
                   
                    maxWidth: '100%',
                    textAlign: 'start',
                    display: 'flex',
                    justifyContent : 'space-between'
                }}
                >
                    
                <Typography>

                GenZ Monkes
                </Typography>
                <Typography>
                <Twitter onClick={() => window.location = "/"} sx={{color: 'black'}}/>
        <Language sx={{color: 'black'}} />
        <Icon >
        <img src={Discord} alt={Discord} style={{height: 'inherit', width:'inherit'}} />
        </Icon>
                     </Typography>
                </Box>
                <Typography sx={{display:'flex', alignItems: 'start'}}>GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. See More...</Typography>
                <Typography></Typography>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    fontSize: {xs: '8px', sm: '11px', md:'13px'},
                    marginBottom:'20px'
                }}
                >
                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        fontSize:'inherit'
                        
                    }}
                    >
                        2,3345 Sui
                        <Typography sx={{fontSize: 'inherit'}}>Total volume</Typography>
                    </Typography>

                    
                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        fontSize:'inherit'
                        
                    }}
                    >
                        45 Sui
                        <Typography sx={{fontSize: 'inherit'}}>Floor price</Typography>
                    </Typography>

                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        fontSize:'inherit'
                        
                    }}
                    >
                        50 Sui
                        <Typography sx={{fontSize: 'inherit'}}>Avg Price</Typography>
                    </Typography>

                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        fontSize:'inherit'
                        
                    }}
                    >
                        43 Sui
                        <Typography sx={{fontSize: 'inherit'}}>Best Offer </Typography>
                    </Typography>

                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        fontSize:'inherit'
                        
                    }}
                    >
                        67 Sui
                        <Typography sx={{fontSize: 'inherit'}}>Offer TVL</Typography>
                    </Typography>

                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        fontSize:'inherit'
                
                        
                    }}
                    >
                        125
                        <Typography sx={{fontSize: 'inherit'}}>Total Listed</Typography>
                    </Typography>


                </Box>

                <Box
                sx={{
                   display: 'flex',
                   justifyContent: 'space-around',
                   padding: '0 10px', 
                //    mariginTop: '200px',
                }}
                >
                    <Button 
                    sx={{
                        border: '1px solid transparent',
                        borderRadius: '5px',
                        background: {md: "#B9D5F6", xs: "rgba(218, 79, 212, 0.36)"},
                        boxShadow: "0px 4px 20px 0px #0000001F",
                         color: 'black',
                         fontWeight: 600,
                         width: '38vw'

                    }}>Create Pool</Button>
                    <Button
                    sx={{
                        // background: "linear-gradient(0deg, #368DF2, #368DF2), linear-gradient(0deg, rgba(218, 79, 212, 0.06), rgba(218, 79, 212, 0.06))",
                        background : 'rgba(218, 79, 212, 0.06)',
                        border: '2px solid rgba(54, 141, 242, 1)',
                        borderRadius: '12px',
                        
                         color: 'black',
                         fontWeight: 600,
                         width: '38vw'

                    }}
                    >Buy</Button>
                </Box>

                <Box
                sx={{
                    display: 'flex',
                    width: {xs: "85vw", sm: '45vw',  md: '40vw'},
                    pl: '10vw',
                    pt: '5vh',
                    justifyContent: 'space-between',
                }}
                >

{['items', 'offers', 'analytics', 'activity'].map((tabName) => (
<Typography
key={tabName}
sx={{ cursor: 'pointer', }}
style = {selectedTab === tabName ? underlineStyle : null}
onClick={() => handleTabChange(tabName)}
component="a"

>
{tabName.charAt(0).toUpperCase() + tabName.slice(1)}
</Typography>
))}
                
                </Box>
                <hr/>
            </Box>
        {selectedTab === 'items'? <Item/> : selectedTab === 'activity' ? <Activity /> : selectedTab === 'analytics' ? <Analtytics /> : selectedTab === 'offers' ? <Offer/> : null}

        </Box>
    )
}