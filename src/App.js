import './App.css';
import Home from './components/Home/Home/Home';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NavbarTop from './components/Home/Navbar/Navbar';
import Login from './components/Login/Login';
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavbarTop />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/details/:_id">
              <ApartmentDetails />
            </PrivateRoute>
            <PrivateRoute path="/login">
              <Login />
            </PrivateRoute>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
      <footer className="text-center text-primary"> <small>Living Space &copy; Copyright {(new Date()).getFullYear()}. All Rights Reserved</small> </footer>
    </>
  );
}

export default App;
