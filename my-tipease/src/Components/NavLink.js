import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="Nav">
      <div><Link to="/WorkersList">Employees HomePage</Link></div>
      <div><Link to="/WorkersDetail">Home</Link></div>
      <div><Link to="/UserSignup">Sign Up</Link></div>
        <Link to="/User">Login</Link>
      </div>
    </div>
  );
};

export default Nav;

