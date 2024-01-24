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
import { Container, Input, Select } from '@mui/material';
import backgroundImage from "../../images/homepageBackground.jpg"
import logo from "../../images/logo.png"
import {Link} from 'react-router-dom';



const drawerWidth = 240;
const navItems = [ 'GİRİŞ YAP', 'KAYIT OL'];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedCity, setSelectedCity] = React.useState([]);
const [cityOptions,setCityOptions] = React.useState([])

  const citiesOptions =[
    { value: 'adana', label: 'Adana' },
    { value: 'adiyaman', label: 'Adıyaman' },
    { value: 'afyonkarahisar', label: 'Afyonkarahisar' },
    { value: 'agri', label: 'Ağrı' },
    { value: 'amasya', label: 'Amasya' },
    { value: 'ankara', label: 'Ankara' },
    { value: 'antalya', label: 'Antalya' },
    { value: 'artvin', label: 'Artvin' },
    { value: 'aydin', label: 'Aydın' },
    { value: 'balikesir', label: 'Balıkesir' },
    { value: 'bilecik', label: 'Bilecik' },
    { value: 'bingol', label: 'Bingöl' },
    { value: 'bitlis', label: 'Bitlis' },
    { value: 'bolu', label: 'Bolu' },
    { value: 'burdur', label: 'Burdur' },
    { value: 'bursa', label: 'Bursa' },
    { value: 'canakkale', label: 'Çanakkale' },
    { value: 'cankiri', label: 'Çankırı' },
    { value: 'corum', label: 'Çorum' },
    { value: 'denizli', label: 'Denizli' },
    { value: 'diyarbakir', label: 'Diyarbakır' },
    { value: 'duzce', label: 'Düzce' },
    { value: 'edirne', label: 'Edirne' },
    { value: 'elazig', label: 'Elazığ' },
    { value: 'erzincan', label: 'Erzincan' },
    { value: 'erzurum', label: 'Erzurum' },
    { value: 'eskisehir', label: 'Eskişehir' },
    { value: 'gaziantep', label: 'Gaziantep' },
    { value: 'giresun', label: 'Giresun' },
    { value: 'gumushane', label: 'Gümüşhane' },
    { value: 'hakkari', label: 'Hakkari' },
    { value: 'hatay', label: 'Hatay' },
    { value: 'igdir', label: 'Iğdır' },
    { value: 'isparta', label: 'Isparta' },
    { value: 'istanbul', label: 'İstanbul' },
    { value: 'izmir', label: 'İzmir' },
    { value: 'kahramanmaras', label: 'Kahramanmaraş' },
    { value: 'karabuk', label: 'Karabük' },
    { value: 'karaman', label: 'Karaman' },
    { value: 'kars', label: 'Kars' },
    { value: 'kastamonu', label: 'Kastamonu' },
    { value: 'kayseri', label: 'Kayseri' },
    { value: 'kilis', label: 'Kilis' },
    { value: 'kirikkale', label: 'Kırıkkale' },
    { value: 'kirklareli', label: 'Kırklareli' },
    { value: 'kirsehir', label: 'Kırşehir' },
    { value: 'kocaeli', label: 'Kocaeli' },
    { value: 'konya', label: 'Konya' },
    { value: 'kutahya', label: 'Kütahya' },
    { value: 'malatya', label: 'Malatya' },
    { value: 'manisa', label: 'Manisa' },
    { value: 'mardin', label: 'Mardin' },
    { value: 'mersin', label: 'Mersin' },
    { value: 'mugla', label: 'Muğla' },
    { value: 'mus', label: 'Muş' },
    { value: 'nevsehir', label: 'Nevşehir' },
    { value: 'nigde', label: 'Niğde' },
    { value: 'ordu', label: 'Ordu' },
    { value: 'osmaniye', label: 'Osmaniye' },
    { value: 'rize', label: 'Rize' },
    { value: 'sakarya', label: 'Sakarya' },
    { value: 'samsun', label: 'Samsun' },
    { value: 'siirt', label: 'Siirt' },
    { value: 'sinop', label: 'Sinop' },
    { value: 'sivas', label: 'Sivas' },
    { value: 'sanliurfa', label: 'Şanlıurfa' },
    { value: 'sirnak', label: 'Şırnak' },
    { value: 'tekirdag', label: 'Tekirdağ' },
    { value: 'tokat', label: 'Tokat' },
    { value: 'trabzon', label: 'Trabzon' },
    { value: 'tunceli', label: 'Tunceli' },
    { value: 'usak', label: 'Uşak' },
    { value: 'van', label: 'Van' },
    { value: 'yalova', label: 'Yalova' },
    { value: 'yozgat', label: 'Yozgat' },
    { value: 'zonguldak', label: 'Zonguldak' },
  ]

  const backgroundImageUrl = backgroundImage;

  const containerStyle = {
    margin:"auto"
 
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

  const textStyle = {
 
    fontfamily:'Lora',
    color: 'white',
    fontSize:"40px",


    zIndex: 1,
  };

  const boxstyle ={
 

  display:"flex",
    textAlign:"center",
    justifyContent:"center",

  };

  const nagivatorStyle ={
    textAlign:"center",
    marginTop:"13%",
    color: 'white',
    fontSize:"20px",
    margin:"auto"
  };

  const searchbarSytyle ={
    margin:"auto",
   display:"flex",
   
    width:"20%",
    height:"15%",
    textAlign:"center"
  };

const buttonsStyle ={
  margin:"auto",
   display:"flex",

   height:"8%",
   justifyContent:"center",
   textAlign:"center"
};
  const foodInputStyle ={
    backgroundColor: "white",
   
    display:"flex",
    margin:"auto",
    borderRadius:"2px",
    border:"None",
    height:"40px",
    
    marginRight:"10px",
    justifyContent:"center",
    textAlign:"center"

  };

  const handleCityChange =(selectedCity)=>{
    setSelectedCity(selectedCity);
  }
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const searchFood =async ()=>{

  }
  const searchCity =async ()=>{

  }

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


    // React.useEffect(()=>{
    //   setCityOptions(
    //     CitiesOptions.map((city) => ({
    //       label: city.label,
    //       value: city.value,
    //     }))
    //   );
    // },[])


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
            {navItems.map((item) => (
              <Button key={item} component={Link} to={item === 'GİRİŞ YAP'?'/login':'/register'} sx={{ color: '#fff' , fontFamily:"Lora",border:2}}>
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
      <Box component="main" sx={{ p: 3  ,marginTop:"5%"}}>
        <Toolbar />
        <Container style={containerStyle}>
          <div style={backgroundStyle}></div>
     


         <Box style={boxstyle}>
          <Typography variant="h3"  fontFamily="Lora" style={textStyle}>
          Buraya adım attığın için teşekkür ederiz! Türkiye'nin zengin mutfak kültürünü keşfetmeye hazır mısın? Yöresel yemekler, keşfedilmeyi bekleyen restoranlar ve birbirinden özel lezzetlerle dolu bir maceraya hoş geldin!
          </Typography>
         </Box>
          {/* İsterseniz başka yazılar ekleyebilirsiniz */}
        </Container>
        <Container>
          <Typography variant="h6" fontFamily="Arial" style={nagivatorStyle}>
            Türk mutfağının nefis dünyasında birlikte keşfe çıkalım. Afiyet olsun!
          </Typography>
        </Container>
        <Container style={searchbarSytyle}>
          
        <Input 
          style={foodInputStyle}
          type="input"
          placeholder='Yemek Arayın..'
          // onChange={(e) =>onChange()}
          />
          {/* <button type="submit">Search</button> */}
          <Select 
      
          id="demo-simple-select"
          //value={citiesOptions}
          options={citiesOptions}
          getOptionLabel={(x) => x.label}
          getOptionValue={(x) => x.value}
          placeholder="Şehir Arayın.."
          style={{ margin:"auto",height:"40px",width:"30%",backgroundColor:"white"}}
          onChange={handleCityChange}
         
           
          />
         
          {/* <button type="submit">Search</button> */}
        
        </Container>
        <Container style={buttonsStyle}>
         <button 
         style={{border:"None",borderRadius:"4px",width:"60px", color:"white", backgroundColor:"gray",marginRight:"5px"}}
         type="submit"
         onClick={searchFood}
         >
          Ara
          </button>
         <button 
         style={{border:"None",borderRadius:"4px",width:"60px", color:"white", backgroundColor:"gray",marginRight:"5px"}} type="submit"
         onClick={searchCity}
         >
          Ara
          </button>
        </Container>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
