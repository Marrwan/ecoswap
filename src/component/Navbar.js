import * as React from 'react';
import {AppBar, InputBase,Box, Toolbar, IconButton, Typography, Menu, Container ,Avatar ,Button, MenuItem, Drawer, Icon, Modal, Fade, Backdrop, Grid } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { Language, Twitter } from '@mui/icons-material';
import Logo from '../images/Ecoswap logo 4 1.png';
import SearchIcon from '@mui/icons-material/Search';
import Discord from '../images/discord-computer-icons-logo-computer-software-avatar-5dcd8a759521fd6bde97d48d4d0e161f (2).png';
import Profile from '../images/profile.png'

const pages = ['Products', 'Pricing', 'Blog'];

function Navbar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const walletConnectStyle = {
    borderBottom: '1px solid black',
     cursor: 'pointer',
    padding: '10px 0',
  paddingRight: '30%'}
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:'75vw', sm: '50vw', md: '40vw'},
    bgcolor: '#fff',
    border: '1px solid transparent',
    borderRadius : '15px',
    boxShadow: 24,
    textAlign: 'center',
    p: 4,
  };
  const wallets = ['WalletConnect', 'MetaMask', 'Coinbase Wallet', 'Phantom', 'BitKeep', 'Core'];
  const blockchains = ['.', 'Popular', '.', 'SOLANA', 'BNB CHAIN', 'AVALANCHE'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

 
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#E2E2E2",
    '&:hover': {
      backgroundColor: "#E2E2E2",
    },
    marginLeft: "8px",
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#000',
      },
    },
  });
  return (
      <ThemeProvider theme={darkTheme} >
    <AppBar position="static" style={{ background: '#fff', color: '#000' }} >
      <Container maxWidth="xl" >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
           <Box
           sx={{
            borderBottom: '1px solid #000000',

           }} 
           >
            <Typography>Connect your wallet</Typography>
            <Typography>If you don’t have a wallet, you can select a provider and create one now. Learn more</Typography> 
           </Box >

           <Box 
           sx={{display: 'flex'}}
           >
            <Grid container direction='column'>
            {wallets.map((wallet) => (
              <Grid item key={wallet}>
                <Typography sx={{fontWeight: '600'}}> {wallet} </Typography>
                </Grid>
            ))}
            </Grid>
            <Grid container direction='column' gap="2" gridTemplateRows='1fr 1fr 1fr 1fr 1fr 1fr'>
           {blockchains.map((blockchain)=>(
            <Grid item key={blockchain}>
              <Typography sx={{opacity: blockchain == '.' ? 0 : 1}}>{blockchain}</Typography>
              </Grid>
           ))}
            </Grid>
           </Box>
           
           <Box
           sx={{borderTop: '1px solid black'}}
           >
            <Typography
            sx={{ textAlign: 'center', p: 'auto 0'}}
            >
            Show More
            </Typography>
           </Box>
          </Box>
        </Fade>
      </Modal>
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
              cursor: 'pointer',
              textDecoration: 'none',
            }}

            onClick = {()=>{window.location = '/'}}
          >
            ECOSWAP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 0, marginLeft : 8}}>
              <IconButton 
              onClick={toggleDrawer('right', true)} 
              sx={{ p: 0, border: "2px solid  #CDCDCD",  }}>
          
                <Avatar alt={Profile} src={Profile} />
              </IconButton>
            <Menu
              sx={{ mt: '45px', width: '20px', bgcolor:'#FFFFFF' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
               
                 <MenuItem onClick={handleCloseUserMenu}>
                   <Drawer 
                
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                >
                   <Box
      sx={{ pt:'20px', pb: '50px', width: 250, background: '#F3F3F3',  color:'#8C8B8B', maxHeight: '100vh', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
    >
      <Box>
      <Avatar alt="Remy Sharp" src={Profile}  sx={{m: '0 auto'}}/> 

      <Box
      sx={{mt: '50px'}}
      >
      
        <Typography 
        onClick={handleOpen}
        sx={walletConnectStyle}
        >Connect Wallet</Typography>
        <Typography
        sx={walletConnectStyle}
        onClick = {() => {window.location = '/collection'}}
        >My Collections</Typography>
        <Typography 
        onClick={()=> {window.location = '/pool'}}
        sx={walletConnectStyle}
        >Pool</Typography>
      </Box>
      </Box>
      <Box 
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        m: '0 auto',
        width: '70%'
      }}>
      <Twitter onClick={() => window.location = "https://twitter.com/ecoswapfi"} sx={{color: 'black'}}/>
        <Language sx={{color: 'black'}} />
        <Icon >

        <img src={Discord} alt={Discord} onClick={()=> window.location = "https://discord.gg/monkes"}  style={{height: 'inherit', width:'inherit'}} />
        </Icon>
      </Box>

</Box>
                </Drawer>
                 </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
