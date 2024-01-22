import logo from './logo.svg';
import { Routes, Route,  } from 'react-router-dom';
import Homepage from './pages/individual/homepage';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
   
  </Routes>
  );
}

export default App;
