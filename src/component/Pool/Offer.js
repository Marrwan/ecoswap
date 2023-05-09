import {  FilterAltOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(offer_price, total_volume, total_offers, bidders) {
    return {  offer_price, total_volume, total_offers, bidders };
  }
 let vol = ["3562SUI",
"2SUI",
"82SUI",
"62SUI",
"3562SUI",
"3562SUI",
"3562SUI"];

  const rows = [
  
    createData('2467SUI',vol[0],12,3),
    createData('578SUI', vol[1],7,2 ),
    createData('467SUI', vol[2],9, 12),
    createData('7SUI', vol[3],1,1),
    createData('267SUI', vol[4],12,3),
    createData('2467SUI',vol[5],12,3),
    createData('2467SUI',vol[6],12,3)
  ];

export default function Offer(props){
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
       padding: '10px',
       fontWeight: '600',
       fontFamily: 'Poppins',
        width : '95%',
    }}
    >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 'inherit'}}>OFFER PRICE</TableCell>
            <TableCell sx={{fontWeight: 'inherit'}} align="right">TOTAL VOLUME</TableCell>
            <TableCell sx={{fontWeight: 'inherit'}} align="right">TOTAL OFFERS</TableCell>
            <TableCell sx={{fontWeight: 'inherit'}} align="right">BIDDERS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.offer_price}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.offer_price}
              </TableCell>
              <TableCell align="right">{row.total_volume}</TableCell>
              <TableCell align="right">{row.total_offers}</TableCell>
              <TableCell align="right">{row.bidders}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    
    </Box>
)
}