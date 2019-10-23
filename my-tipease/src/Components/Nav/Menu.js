import React from "react";
import { Link } from 'react-router-dom';

export default ({ close }) => (
  <div className="menu">
    <ul>
      <li onClick={close}><Link to="/UserLogin">Home</Link></li>
      <li onClick={close}><Link to="/WorkersList">WorkersList</Link></li>
      <li onClick={close}><Link to="/UserSignup">Sign Up</Link></li>
    </ul>
  </div>
);
