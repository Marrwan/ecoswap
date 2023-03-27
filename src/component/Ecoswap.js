import React from 'react';
import {Container, Typography, Box} from '@mui/material';


export default function Ecoswap(){
    return(
        <Container sx={{display: 'grid',  gridTemplateColumns : '3fr 1fr', columnGap : '10px' , fontFamily: 'Poppins', color: '#E7E7E7', textAlign:'center'}}>
            <Box
            sx={{
                    background: 'linear-gradient(94.15deg, rgba(218, 79, 212, 0.73) -5.1% , #368DF2 131.63%)' ,
                    width: '100%',
                    border: '1px transparent',
                    borderRadius: '12px',
                    height: 'auto',
                    textAlign: 'start'
                    
                    
                }}
            >
                <Typography
                variant='h1'
                sx={{
                    fontWeight: 600,

                }}
                
                >Ecoswap</Typography>
             <Typography
             
             sx={{
                 fontWeight: 400
             }}>Swap, earn and build on the leading decentralized 
cryptocurrency protocol. Best NFTxDEFI on SUI</Typography>
            </Box>
            <Box
            sx={{
                background: 'linear-gradient(97.68deg, #6A85EB 4.26%, #1D348B 97.07%)',
                border: '1px transparent',
                    borderRadius: '12px',

            }}>   
</Box>
                
        </Container>
    )
}