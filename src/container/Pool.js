import { Box, Button, Icon, Typography } from '@mui/material';
import React, { useState } from 'react';
import Monke from '../images/genz background.png';
import MonkeLogo from '../images/Monkes Logo 1.png';
import { Language, Twitter } from '@mui/icons-material';
import Discord from '../images/discord-computer-icons-logo-computer-software-avatar-5dcd8a759521fd6bde97d48d4d0e161f (2).png';
import Item from '../component/Pool/Item';
import Activity from '../component/Pool/Activity';

export default function Pool(){
    const [selectedTab, setSelectedTab] = useState(null);
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
        }}
        >
            <Typography component="img" src={Monke} sx={{
                height: '100%',
                width: '100%'
            }} />
            <Box 
            sx={{
                maxWidth: '100%',
                width: '100%'
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
                <Typography>GenZ Monkesby Softchain Labs is an utility collection with the best in class art. We’re  building a suite of NFT dApps that are scalable, useful and easy to use for Sui Network. See More...</Typography>
                <Typography></Typography>
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
                >
                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        
                    }}
                    >
                        2,3345 Sui
                        <Typography>Total volume</Typography>
                    </Typography>

                    
                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        
                    }}
                    >
                        45 Sui
                        <Typography>Floor price</Typography>
                    </Typography>

                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        
                    }}
                    >
                        50 Sui
                        <Typography>Avg Price</Typography>
                    </Typography>

                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        
                    }}
                    >
                        43 Sui
                        <Typography>Best Offer </Typography>
                    </Typography>

                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        
                    }}
                    >
                        67 Sui
                        <Typography>Offer TVL</Typography>
                    </Typography>

                    <Typography
                    sx={{
                        fontWeight : '600',
                        display : 'flex',
                        flexDirection : 'column',
                        
                    }}
                    >
                        125
                        <Typography>Total Listed</Typography>
                    </Typography>


                </Box>

                <Box
                sx={{
                   
                }}
                >
                    <Button 
                    sx={{
                        border: '1px solid transparent',
                        borderRadius: '5px',
                        background: "#B9D5F6",
                        boxShadow: "0px 4px 20px 0px #0000001F",
                         color: 'black',
                         fontWeight: 600,
                         width: '380px'

                    }}>Create Pool</Button>
                    <Button
                    sx={{
                        // background: "linear-gradient(0deg, #368DF2, #368DF2), linear-gradient(0deg, rgba(218, 79, 212, 0.06), rgba(218, 79, 212, 0.06))",
                        background : '#DA4FD40F',
                         color: 'black',
                         fontWeight: 600,
                         width: '380px'

                    }}
                    >Buy</Button>
                </Box>

                <Box
                sx={{
                    display: 'flex',
                    width: '40vw',
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
        {selectedTab === 'items'? <Item/> : selectedTab === 'activity' ? <Activity /> : null }

        </Box>
    )
}