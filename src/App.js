import React from 'react';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route  path="/dashboard">
           <Dashboard></Dashboard>
        </Route>
        <Route  path="/login">
           <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
