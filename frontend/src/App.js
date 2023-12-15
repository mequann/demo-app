import logo from './logo.svg';
import './App.css';
//import BrowserRouter from react-router-dom
import {  Routes, Route } from "react-router-dom"; 
//import components
import Home from './pages/Home';
import AddEmployees from './pages/AddEmployees';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path='/login'  element={<Login/>}/>
         <Route path='/add-employees'  element={<AddEmployees/>}/>
          </Routes>
   
    </div>
  );
}

export default App;
