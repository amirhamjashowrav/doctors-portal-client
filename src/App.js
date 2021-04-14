import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import AddDoctor from './components/AddDoctor/AddDoctor';
import AllPatients from './components/Allpatients/AllPatients/AllPatients';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/allPatients">
            <AllPatients></AllPatients>
        </Route>
        <Route path="/addDoctor">
            <AddDoctor></AddDoctor>
        </Route>
        <Route path="/login">
           <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
