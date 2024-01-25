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
import { Container, Select } from '@mui/material';
import backgroundImage from "../../images/loginBackground.jpg"
import logo from "../../images/logo.png"
import api from '../services/auth.js'
import { Link, useNavigate } from 'react-router-dom';


const drawerWidth = 240;
const navItems = [ 'GİRİŞ YAP', 'KAYIT OL'];

function Login(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 const [email,setEmail] = React.useState("")
 const [password,setPassword] = React.useState("")

  const backgroundImageUrl = backgroundImage;



  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const containerStyle = {
    justifyContent:"center",
    display:"flex",
    height:"650px",
    width:"80%",
    borderRadius:"10px",
    backgroundColor:"#474954",
    
 
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
  
  };
 

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',fontFamily:"Lora"}}>
      <Typography variant="h6" sx={{ my: 2 }}>
      NEREDE NE YENİR
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

const login= async()=>{
  try {
     const response= await api.v1.auth.login(email,password);
     if(response.success){
      
      const userToken = response.token;
      console.log("resp succes ici",);

      localStorage.setItem('userToken',userToken)
      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000; 
      localStorage.setItem('tokenExpiration', expirationTime);
      

  }else{
      if (response.message){
        alert(response.message);  
      }else{
      alert("Unexpected response from server")
  }}
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        alert(error.response.data.message);
      } else if (error.response.status===402) { 
        alert(error.response.data.message);
      }else{     
        alert("Server error. Please try again later.");
      }
    } else if (error.request) {
      alert("No response from server. Please try again later.");
    } else {
      alert("Request failed. Please check your internet connection and try again.");
    }
  }
 


}
  const goRegister =()=>{
    navigate("/register")
  }

  return (
    <Box sx={{ display: 'flex' }}>
     
      <CssBaseline />
      
      <AppBar component="nav" sx={{ backgroundColor: '#474954' }}>
        <Toolbar>

          <IconButton
          
            color="red"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <img style={{width:"3%",height:"3%",marginLeft:"40px"}}src={logo} alt="Logo" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "30px", fontFamily:"Lora", marginLeft: "20px", display: { xs: 'none', sm: 'block' } }}
          >
            NEREDE NE YENİR
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
           
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
     <Box component="main" sx={{ p: 10,  margin:"auto"}}>
     <Toolbar />
        <Container style={containerStyle}>
          <div style={backgroundStyle}></div>
         <Container >

         <Typography variant="h2"  fontFamily="Lora" style={{textAlign:"center",color:"white", margin:"50px"}}>
         GİRİŞ YAP 
          </Typography>

          <Typography variant="h6"  fontFamily="Lora" style={{color:"white", margin:"30px",textAlign:"center"}}>
         Buraya tekrar gelmen harika! Giriş yaparak, önceki mutfak serüvenine kaldığın yerden devam edebilirsin. Unutma, lezzetli bir dünyanın kapıları burada senin için açık! Hadi, lezzetli bir yola çıkalım!
          </Typography >
          <Container style={{backgroundColor:"#626470", width:"70%", height:"240px",borderRadius:"8px"}}>

              <Container style={{backgroundColor:"#626470",height:"30%"}}>
              <label
              style={{marginRight:"10px",fontFamily:"Lora",color:"white"}}
              >Email</label>
              <input
                style={{ marginTop:"20px",width:"80%",marginLeft:"10px",backgroundColor:"white",border:"None",borderRadius:"5px",height:"50%"}}
                type="email"
                placeholder="E-mail giriniz.."
                backgroundColor="white"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Container>

            <Container style={{backgroundColor:"#626470",height:"30%"}}> 
              <label
              style={{marginRight:"15px",fontFamily:"Lora",color:"white"}}>Şifre</label>
             <input
             style={{ marginTop:"20px",width:"80%",marginLeft:"10px",backgroundColor:"white",border:"None",borderRadius:"5px",height:"50%"}}
              type="password"
              placeholder="Şifre giriniz.."
              backgroundColor="white"
              onChange={(e) => setPassword(e.target.value)}
            />
            </Container>

            <Button onClick={login} style={{marginLeft:"15%",marginTop:"20px",color:"white", backgroundColor:"#EE7C22", border:"None",borderRadius:"30px",fontFamily:"Lora",height:"50px",width:"70%"}}>GİRİŞ YAP</Button>

            </Container >
            <Container style={{display:"flex", marginTop:"10px",marginLeft:"23%"}}>
               <h5  style={{  display:"flex",fontFamily:"Lora",color:"white", margin:"30px",width:"150px"}}>
              HESABIN YOK MU?
              </h5>
 
            <Button onClick={goRegister} style={{color:"white", backgroundColor:"#EE7C22", border:"None",borderRadius:"30px",fontFamily:"Lora",marginTop:"20px",height:"40px",width:"20%"}}>
              KAYIT OL
              </Button>
           
            </Container>
           
          </Container>
        </Container>
     </Box>
         

      </Box>
  
  );
}

Login.propTypes = {
  window: PropTypes.func,
};

export default Login;
