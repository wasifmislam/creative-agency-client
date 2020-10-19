import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import OurPortfolio from './components/OurPortfolio/OurPortfolio';
import Reviews from './components/Dashboard/Dashboard/Reviews/Reviews';


export const UserContext = createContext();
export const ServiceContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [serviceData, setServiceData] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ServiceContext.Provider value = {[serviceData, setServiceData]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/dashboard/:serviceType">
            <Dashboard></Dashboard>
          </PrivateRoute>
         
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/review">
            <Reviews></Reviews>
          </Route>
          <Route path="/ourportfolio">
            <OurPortfolio></OurPortfolio>
          </Route>
        </Switch>
      </Router>
      </ServiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
