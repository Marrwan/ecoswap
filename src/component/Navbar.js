import * as React from 'react';
import {AppBar, InputBase,Box, Toolbar, IconButton, Typography, Menu, Container ,Avatar ,Button ,Tooltip , MenuItem } from '@mui/material';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import Logo from '../images/Ecoswap logo 4 1.png';
import SearchIcon from '@mui/icons-material/Search';
import Profile from '../images/profile.png'

const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

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
      mode: 'light',
      primary: {
        main: '#000',
      },
    },
  });
  return (
      <ThemeProvider theme={darkTheme} >
    <AppBar position="static" style={{ background: '#fff', color: '#000' }} >
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
            <img src={Logo} alt={Logo} style={{height: '5em', marginRight : '10px'}                                                                                                             } />
          <Typography
            variant="h6"
            // noWrap
            // component="a"
            // href="/"
            sx={{
              mr: 2,
              display: 'flex' ,
              fontFamily: 'Roboto',
              fontWeight: 800,
              color: 'inherit',
              // fontSize:{xs:'10px'},
              textDecoration: 'none',
            }}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
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
            //   onClick={handleOpenUserMenu} 
              sx={{ p: 0 }}>
          
                <Avatar alt="Remy Sharp" src={Profile} />
              </IconButton>
            <Menu
              sx={{ mt: '45px' }}
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
              {
            //   settings.map((setting) => (
            //     <MenuItem key={setting} onClick={handleCloseUserMenu}>
            //       <Typography textAlign="center">{setting}</Typography>
            //     </MenuItem>
            //   ))
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
