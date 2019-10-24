import React from 'react';
import './App.css';
import WorkersList from './Components/WorkersList';
import WorkersCard from './Components/WorkersCard';
import { UserSignup } from "./Components/User/UserSignup";
import { Routes } from "react-router-dom";
// import Navlink from './Components/NavLink';
import User from './Components/User/User';
import TipRoutes from "./Components/Routes";
import UserLogin from "./Components/User/UserLogin";
import { render } from "react-dom";
import Popup from "reactjs-popup";
import Hello from "./Components/Nav/Hello";
import BurgerIcon from "./Components/Nav/BurgerIcon";
import Menu from "./Components/Nav/Menu";
import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px"
};
const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

function App() {
  return (
    <div className="App">
      <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
      {/* <Navlink /> */}
      <TipRoutes />
    </div>
  );
}

export default App;