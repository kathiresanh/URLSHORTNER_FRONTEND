import logo from './logo.svg';
import './App.css';
import Login from './login';
import { useState } from 'react';
import Dashboard from './dashboard';
import Register from './register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Reset from './Reset';
import Passwordchange from './Passwordchange';


function App() {


  return (<BrowserRouter>
 
    <div className='container-fluid'>
    
   <div className='row'>
     <div className='col-sm-4'>

     </div>
     <div className='col-sm-4' >
     <Routes>
       <Route path="/passwordchange" element={<Passwordchange></Passwordchange>}></Route>
       <Route path="/reset" element={<Reset></Reset>}></Route>
       <Route path="/login" element={<Dashboard></Dashboard>}></Route>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
  
       </div>
       <div className='col-sm-4'>
      
       </div>
   </div>
  </div>
  
  </BrowserRouter>

  );
}

export default App;
