import React from 'react';
import './App.css';
import WorkersList from './Components/WorkersList';
import WorkersCard from './Components/WorkersCard';
import { UserSignup } from "./Components/User/UserSignup";
import WorkersDetail from './Components/WorkersDetail';
import { Route } from "react-router-dom";
import Navlink from './Components/NavLink';
import User from './Components/User/User';
import Routes from "./Components/Routes";
import UserLogin from "./Components/User/UserLogin";


function App() {
  return (
    <div className="App">
      <Navlink />
      <Routes />
      {/* <UserSignup /> */}
      {/* <UserLogin /> */}
      {/* <Route path="/UserSignup" component={UserSignup}></Route> */}
      {/* <Route path="/WorkersDetail" component={WorkersDetail}></Route> */}
      {/* <Route path="/User" component={User}></Route>  */}
      {/* <Route path="/WorkersList" component={WorkersList}></Route>
      <Route path="/WorkersCard" component={WorkersCard}></Route> */}
      {/* <Route path="" component={}></Route>  */}
    </div>
  );
}

export default App;