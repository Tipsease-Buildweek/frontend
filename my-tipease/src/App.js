import React from 'react';
import './App.css';
import TipRoutes from "./Components/Routes";
import Popup from "reactjs-popup";
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

      <TipRoutes />
    </div>
  );
}

export default App;