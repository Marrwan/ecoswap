import { ExpandMore, FilterAltOutlined } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Image from "./Image";
import Monke1 from '../../images/GenZ Monke.png';
import Monke2 from '../../images/GenZ Monke(2).png';
import Monke3 from '../../images/GenZ Monke(3).png';
import Monke4 from '../../images/GenZ Monke(4).png';
import Monke5 from '../../images/GenZ Monke(5).png';


export default function Analtytics(props){
    let monkes = [Monke1, Monke2, Monke3, Monke3, Monke4, Monke5]
return( 
    <Box>

<Box sx={{
    display: 'flex',
    justifyContent: 'start',
}}>
            <Button   sx={{
                border: '1px solid black',
                color: 'black',
                fontWeight: 600,
                borderRadius : '6px',
                marginLeft: '10px',
                marginBottom: '10px',
            }} ><FilterAltOutlined /> Filter</Button>
        </Box>
        <hr/>
    <Box
    sx={{
        display : 'grid',
        gridTemplateColumns: '1.5fr 0.5fr 5fr',
        width : '100%',
    }}
    >
       
       <Box 
    sx={{
        display: 'flex',
        flexDirection: 'column',
    }}
>
    {['Description', 'Traits', 'Details', 'Item Activity', 'More'].map((text, index) => (
        <Button 
            key={index}
            sx={{
                border: '1px solid black',
                color: 'black',
                fontWeight: 600,
                borderRadius : '6px',
                marginBottom: index === 4 ? 0 : '10px',
            }}
        >
            {text} <ExpandMore/>
        </Button>
    ))}
</Box>
<Box></Box>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
            {monkes.map((monkey, i)=>{
                return <Image key={i} image={monkey} />
            })}
            {[1,2,3,4,5,6].map(()=>{
                
                return <Image />
            })}
        </Grid>
    </Box>
    </Box>
)
}