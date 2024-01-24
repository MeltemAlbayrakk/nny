import logo from './logo.svg';
import { Routes, Route,  } from 'react-router-dom';
import Homepage from './pages/individual/homepage';
import Login from "./pages/auth/login.js"
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
   
  </Routes>
  );
}

export default App;
