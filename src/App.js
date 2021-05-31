import './App.css';
import Home from './components/Home/Home/Home';
import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import NavbarTop from './components/Home/Navbar/Navbar';
import Login from './components/Login/Login';
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="App">
          <NavbarTop />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/details/:_id">
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
      <footer className="text-center text-primary"> <small>&copy; Copyright {(new Date()).toLocaleString()}, All Rights Reserved</small> </footer>
    </UserContext.Provider>
  );
}

export default App;
