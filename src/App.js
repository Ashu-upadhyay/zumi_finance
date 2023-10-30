// import logo from './logo.svg';
import {Routes,Route,Link} from 'react-router-dom'
import './App.css';
import Dashboard from './components/Dashboard';
import Earn from './components/Earn';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div><Navbar/></div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/earn" element={<Earn/>}/>
        </Routes>  
      </div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
