import React from 'react';
import { UserSignup } from "./Components/User/UserSignup";
import './App.css';
import WorkerDetail from './Components/WorkersDetail';
// import { Route } from "react-router-dom";
import { Nav } from './Components/NavLink';


function App() {
  return (
    <div className="App">
      <UserSignup />
      <Nav />
      {/* <Route path="" component={}></Route>
      <Route path="" component={}></Route>
      <Route path="" component={}></Route>
      <Route path="" component={}></Route>
      <Route path="" component={}></Route> */}
    </div>
  );
}

export default App;
