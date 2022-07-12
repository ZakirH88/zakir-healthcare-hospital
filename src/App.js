import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import EyeSpecialist from './components/EyeSpecialist/EyeSpecialist';
import MedicineSpecialist from './components/MedicineSpecialist/MedicineSpecialist';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import initializeAuthentication from './Firebase/firebase.initialize';
initializeAuthentication();
function App() {
  return (
    <div className="App">
       {/* <h1>Zakir Healthcare Hospital</h1> */}
       <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services"> 
              <Services></Services>
            </Route>
            <Route path="/eyespecialist">
              <EyeSpecialist></EyeSpecialist>
            </Route>
            <Route path="/medicinespecialist">
              <MedicineSpecialist></MedicineSpecialist>
            </Route>
            

          </Switch>
          <Footer></Footer>
       </BrowserRouter>






    </div>
  );
}

export default App;
