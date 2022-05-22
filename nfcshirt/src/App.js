import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar';
/*CSS */
import './App.css';
/*Pages */
import Login from "./pages/Login"
import Home from "./pages/Home"
import About from './pages/About';
import Shirts from './pages/Shirts';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        NFC shirts
        
      </header>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/shirts' element={<Shirts />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
