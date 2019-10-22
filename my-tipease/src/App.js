import React from 'react';
import './App.css';
import WorkersList from './Components/WorkersList';
import WorkersCard from './Components/WorkersCard';
import { UserSignup } from "./Components/User/UserSignup";
import WorkersDetail from './Components/WorkersDetail';
import { Routes } from "react-router-dom";
import Navlink from './Components/NavLink';
import User from './Components/User/User';
import TipRoutes from "./Components/Routes";
import UserLogin from "./Components/User/UserLogin";


function App() {
  return (
    <div className="App">
      <Navlink />
      <TipRoutes />
    </div>
  );
}

export default App;