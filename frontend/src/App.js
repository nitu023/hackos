import React from 'react';
import './App.css';
import Chefsinup from "./pages/chefSinup";
import Cookedsignup  from "./pages/cheflogin";
import NavbarPage from './pages/navbar';
import Usersignup from './pages/usersignup';
import Userlogin from './pages/userlogin';
import  Chefdetails from './component/chefDetails';
import  Adddish from './component/addDish'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter, Route } from 'react-router-dom';




// import Cheflogin from './pages/cheflogin';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarPage /> 
      <Route exact path="/cookedsignup "><Cookedsignup/></Route> 
      {/* <Cookedsignup  />
      < Usersignup />
      <Userlogin />
      <Chefdetails />
      < Adddish /> */}
      </BrowserRouter>
    </div>
     
  );
}

export default App;
