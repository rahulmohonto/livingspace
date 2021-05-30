import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarTop from './components/Home/Navbar/Navbar';
import Login from './components/Login/Login';
import ApartmentDetails from './components/Home/ApartmentDetails/ApartmentDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <NavbarTop />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/details">
            <ApartmentDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
