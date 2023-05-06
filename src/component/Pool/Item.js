import { ExpandMore } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";

export default function Item(props){
return(
    <Box>
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
                borderRadius : '6px'
            }}>Sort By <ExpandMore/></Button>
            <Button 
            sx={{
                border: '1px solid black',
                color: 'black',
                fontWeight: 600,
                borderRadius : '6px'
            }}>Activity <ExpandMore/></Button>
        </Box>
        <Box></Box>
    </Box>
)
}