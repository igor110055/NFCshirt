import {Routes, Route} from 'react-router-dom'
/*CSS */
import './App.css';
/*Pages */
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        NFC shirts
      </header>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route exact path='/home' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
