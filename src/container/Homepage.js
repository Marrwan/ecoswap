import { Box } from '@mui/material';
import React from 'react';
import Menu from '../component/Homepage/Menu';
import MonkeList from '../component/Homepage/MonkeList';
import Ecoswap from '../component/Homepage/Ecoswap';
import PriceList from '../component/Homepage/PriceList';
import ActivityList from '../component/Homepage/ActivityList';

export default function Homepage(){
    return (
        <Box sx={{padding : '0 40px', paddingBottom: {lg: '20vh', md:'17vh', sm:'15vh' } }}>
        <Menu/>
        <MonkeList />
        <Ecoswap />
        <PriceList />
        <ActivityList />
      </Box>
    )
}