import { ExpandMore } from "@mui/icons-material";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Image from "./Image";

export default function Item(props){
return(
    <Box
    sx={{
        display : 'grid',
        gridTemplateColumns: '1fr 4fr',
        width : '100%',
    }}
    >
        <Box 
        sx={{
            display: 'flex',
            flexDirection : 'column',

        }}>
            <Button 
            sx={{
                border: '1px solid black',
                color: 'black',
                fontWeight: 600,
                borderRadius : '6px',
                marginBottom: '10px',
            }}>Sort By <ExpandMore/></Button>
            <Button 
            sx={{
                border: '1px solid black',
                color: 'black',
                fontWeight: 600,
                borderRadius : '6px'
            }}>Activity <ExpandMore/></Button>
        </Box>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
            {[1,2,3,4,5,6].map(()=>{
                
                return <Image />
            })}
        </Grid>
    </Box>
)
}