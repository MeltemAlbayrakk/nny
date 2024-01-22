import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import backgroundImage from "../../images/homepageBackground.jpg"

const drawerWidth = 240;
const navItems = [ 'SIGN IN', 'SIGN UP'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const backgroundImageUrl = backgroundImage;

  const containerStyle = {
    backgroundSize:"auto",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow:"hidden"
  };


  const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundPosition: '0 0',
  
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden",
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    zIndex: -1,
    filter:"blur(7px)"
  };

  const textStyle = {
    backgroundColor:"red",
   top:"300px",
    color: 'white',
    fontSize:"40px",
    justifyContent:"center",
    textAlign: 'center',
    zIndex: 1,
  };

  const mainStyle ={
    
    zIndex:1,
    backgroundColor:"yellow"
  };

  const InputStyle ={
    zIndex:1,
    backgroundColor:"green"
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
     
      <CssBaseline />
      
      <AppBar component="nav" sx={{ backgroundColor: '#FC7A1E' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "30px", fontFamily: "", marginLeft: "50px", display: { xs: 'none', sm: 'block' } }}
          >
            NEREDE NE YENİR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3  }}>
        <Toolbar />
        <Container style={containerStyle}>
          <div style={backgroundStyle}></div>
          <div style={mainStyle}>


         
          <Typography variant="h3" style={textStyle}>
          Buraya adım attığın için teşekkür ederiz! Türkiye'nin zengin mutfak kültürünü keşfetmeye hazır mısın? Yöresel yemekler, keşfedilmeyi bekleyen restoranlar ve birbirinden özel lezzetlerle dolu bir maceraya hoş geldin!
          </Typography>
          </div>
          {/* İsterseniz başka yazılar ekleyebilirsiniz */}
        </Container>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
