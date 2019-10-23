import React from "react";
import { Link } from 'react-router-dom';


export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><Link to="/UserLogin" style={{ textDecoration: 'none' }}>Log In</Link></li>
      <li onClick={close}><Link to="/WorkersList" style={{ textDecoration: 'none' }}>Meet Our Servers!</Link></li>
      <li onClick={close}><Link to="/UserSignup" style={{ textDecoration: 'none' }}>Sign Up</Link></li>
    </ul>
  </div>
);
