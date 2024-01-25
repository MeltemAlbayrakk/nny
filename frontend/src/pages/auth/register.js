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
import { useNavigate } from "react-router-dom";
import api from '../services/auth.js';

const drawerWidth = 240;
const navItems = [ 'GİRİŞ YAP', 'KAYIT OL'];

function Register(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [activeTab,setActiveTab] = React.useState(true);

 const [email,setEmail] = React.useState("")
 const [name,setName] = React.useState("")
 const [surName,setSurName] = React.useState("")
 const [phone,setPhone] = React.useState("")
 const [companyName,setCompanyName] = React.useState("")
 const [password,setPassword] = React.useState("")
 const [passwordConfirmation,setPasswordConfirmation] = React.useState("")
 const [form, setForm] = React.useState({
  name: "",
  surName: "",
  companyName: "",
  email: "",
  phone: "",
  password: "",
  passwordConfirmation: "",
});

  const backgroundImageUrl = backgroundImage;



  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const containerStyle = {

    justifyContent:"center",
    display:"flex",
    height:activeTab ?"680px": "760px",
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

    const handleActiveTabTrue = async ()=>{
        setActiveTab(true);
    }
    const handleActiveTabFalse = async ()=>{
        setActiveTab(false);
    }
  
    const corporateRegister = async()=>{

      try {
        console.log("bu gelen form: ",form)
        const response = await api.v1.auth.register("corporate",form)
    
        if(response.status===409){
        alert(response.data.message)
      }else{
       if (response.message) {
        alert(response.message);
       }else{
          alert("Unexpected response from server")
       }
      }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 409) {
            alert(error.response.data.message);
          } else if (error.response.status===400) { 
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

    const individualRegister = async()=>{
      try {
        console.log("bu gelen form: ",form)
          const response = await api.v1.auth.register("individual",form)
        
          if(response.status===409){
            alert(response.data.message)
          }else{
           if (response.message) {
            alert(response.message);
           }else{
              alert("Unexpected response from server")
           }
          
          }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 409) {
            alert(error.response.data.message);
          } else if (error.response.status===400) { 
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
     <Box component="main" sx={{ p: 5,  margin:"auto"}}>
     <Toolbar />
        <Container style={containerStyle}>
          <div style={backgroundStyle}></div>
            <Container >

            <Typography variant="h2"  fontFamily="Lora" style={{textAlign:"center",color:"white", margin:"25px"}}>
            KAYIT OL
            </Typography>

            <Typography variant="h6"  fontFamily="Lora" style={{color:"white", margin:"10px",textAlign:"center"}}>
            Merhaba! Türkiye'nin zengin mutfağını keşfetmeye ne dersin? Kayıt olarak, şehirlerin yöresel lezzetlerini keşfedebilir, restoranları tanıyabilirsin. Aramıza katılmak için hemen kayıt ol, lezzetli bir yolculuğa başla!
            </Typography >

                <Container style={{backgroundColor:"#626470", width:"70%",height: activeTab ? "380px":"450px",borderRadius:"8px"}}>

                <Container style={{marginLeft:"50px",display:"flex"}}>
                    <Button onClick={handleActiveTabTrue} style={{  backgroundColor: activeTab ? '#8c460e' : "#d46c19" , color:"white",  border:"None",borderRadius:"30px",fontFamily:"Lora",marginTop:"20px",height:"40px",width:"40%"}}>
                        KİŞİSEL
                    </Button>
                    
                    <Button onClick={handleActiveTabFalse} style={{color:"white", backgroundColor: activeTab ? '#d46c19' : "#8c460e", border:"None",borderRadius:"30px",fontFamily:"Lora",marginTop:"20px",marginLeft:"5px",height:"40px",width:"40%"}}>
                        KURUMSAL
                    </Button>
                </Container>

            <Container style={{display:"flex",backgroundColor:"#626470",height:"80px"}}>
              <label
              style={{marginRight:"10px",paddingTop:"25px",fontFamily:"Lora",color:"white"}}
              >
                İsim
              </label>
              <input
                style={{ marginTop:"15px",marginLeft:"10px",marginRight:"10px",width:"80%",backgroundColor:"white",border:"None",borderRadius:"5px",height:"50%"}}
                type="isim"
                placeholder="İsim giriniz.."
                backgroundColor="white"
                onChange={(e) => setForm({...form,name:e.target.value})}
              />
                 <label
                style={{marginRight:"10px",paddingTop:"25px",fontFamily:"Lora",color:"white"}}
              >
                Soyisim
              </label>
              <input
                style={{width:"80%",backgroundColor:"white",border:"None",marginTop:"15px",borderRadius:"5px",height:"50%"}}
                type="soyisim"
                placeholder="Soyisim giriniz.."
                backgroundColor="white"
                onChange={(e) => setForm({...form,surName:e.target.value})}
              />
            </Container>

            <Container style={{display:"flex",backgroundColor:"#626470",height:"80px"}}>
              <label
              style={{paddingTop:"25px",fontFamily:"Lora",color:"white"}}
              >
                Email
              </label>
              <input
                style={{ marginLeft:"10px",marginTop:"15px",marginRight:"10px",width:"80%",backgroundColor:"white",border:"None",borderRadius:"5px",height:"50%"}}
                placeholder="E-mail giriniz.."
                backgroundColor="white"
                onChange={(e) => setForm({...form,email:e.target.value})}
              />
                 <label
              style={{marginRight:"10px",paddingTop:"25px",fontFamily:"Lora",color:"white"}}
              >
                Telefon
              </label>
              <input
                style={{marginLeft:"10px",width:"80%",backgroundColor:"white",border:"None",marginTop:"15px",borderRadius:"5px",height:"50%"}}
                type="telefon"
                placeholder="Telefon giriniz.."
                backgroundColor="white"
                onChange={(e) => setForm({...form,phone:e.target.value})}
              />
            </Container>

            {activeTab ===false && (
            <Container style={{display:"flex",backgroundColor:"#626470",height:"80px"}}>
              <label
              style={{paddingTop:"28px",marginRight:"10px",fontFamily:"Lora",color:"white"}}
              >Şirket İsmi </label>
              <input
                style={{ marginTop:"20px",width:"77%",marginLeft:"10px",backgroundColor:"white",border:"None",borderRadius:"5px",height:"50%"}}
                type="sirketisim"
                placeholder="Şirket ismi giriniz.."
                backgroundColor="white"
                onChange={(e) => setForm({...form,companyName:e.target.value})}
              />
            </Container>
            )}

            <Container style={{display:"flex",backgroundColor:"#626470",height:"80px"}}>
              <label
              style={{marginRight:"10px",paddingTop:"25px",fontFamily:"Lora",color:"white"}}
              >
                Şifre
              </label>
              <input
                style={{marginLeft:"10px",width:"80%",margin:"auto",backgroundColor:"white",border:"None",borderRadius:"5px",height:"50%"}}
                type="password"
                placeholder="Şifre giriniz.."
                backgroundColor="white"
                onChange={(e) => setForm({...form,password:e.target.value})}
              />
                 <label
              style={{marginRight:"10px",marginLeft:"10px",paddingTop:"15px",fontFamily:"Lora",color:"white"}}
              >
                Şifre Tekrar
              </label>
              <input
                style={{ marginLeft:"10px",width:"80%",margin:"auto",backgroundColor:"white",border:"None",borderRadius:"5px",height:"50%"}}
                type="password"
                placeholder="Şifre giriniz.."
                backgroundColor="white"
                onChange={(e) => setForm({...form,passwordConfirmation:e.target.value})}
              />
            </Container>

            <Button onClick={activeTab ? individualRegister :corporateRegister } style={{marginLeft:"15%",marginTop:"10px",color:"white", backgroundColor:"#d46c19", border:"None",borderRadius:"30px",fontFamily:"Lora",height:"50px",width:"70%"}}>KAYIT OL</Button>


            <Container style={{display:"flex", marginTop:"10px",marginLeft:"15%"}}>
               <h5  style={{  display:"flex",fontFamily:"Lora",color:"white", margin:"30px",width:"150px"}}>
         HESABIN VAR MI?
          </h5>
            <Button style={{color:"white", backgroundColor:"#d46c19", border:"None",borderRadius:"30px",fontFamily:"Lora",marginTop:"20px",height:"40px",width:"20%"}}>GİRİŞ YAP</Button>
            </Container>
           

                </Container>
            </Container>
        </Container>
     </Box>
         

      </Box>
  
  );
}

Register.propTypes = {
  window: PropTypes.func,
};

export default Register;
