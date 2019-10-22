import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = () => {
  return (
    <div>
      <div className="Nav">
        <div><Link to="/WorkersList">Employees HomePage</Link></div>
        <div><Link to="/WorkersDetail">Home</Link></div>
        <div><Link to="/">Sign Up</Link></div>
        <Link to="/UserLogin">Login</Link>
      </div>
    </div>
  );
};

export default Navlink;

