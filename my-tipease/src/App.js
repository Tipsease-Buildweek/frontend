import React from 'react';
import { UserSignup } from "./Components/User/UserSignup";
import './App.css';
import WorkersDetail from './Components/WorkersDetail';
import { Route } from "react-router-dom";
import Nav from './Components/NavLink';
import User from './Components/User/User';
import WorkersList from './Components/WorkersList';
import WorkersCard from './Components/WorkersCard';

function App() {
  return (
    <div className="App">
       <Nav />
       <UserSignup /> 
      <Route path="/UserSignup" component={UserSignup}></Route>
      <Route path="/WorkersDetail" component={WorkersDetail}></Route>
      <Route path="/User" component={User}></Route> 
      <Route path="/WorkersList" component={WorkersList}></Route>
      <Route path="/WorkersCard" component={WorkersCard}></Route>
      {/* <Route path="" component={}></Route>  */}
    </div>
  );
}

export default App;