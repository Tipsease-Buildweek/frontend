import React from 'react';
import { Route } from 'react-router-dom';
import { UserSignup } from './User/UserSignup';
import UserLogin from './User/UserLogin';
import PrivateRoute from './PrivateRoute';
import WorkersDetail from './WorkersDetail';
import WorkersList from './WorkersList';
import WorkersCard from './WorkersCard';

const TipRoutes = () => {
    return (
        <div>
            <PrivateRoute exact path="/" component={WorkersList} /> 
            <Route path="/userlogin" component={UserLogin} /> 
            <Route path="/usersignup" component={UserSignup} /> 
            <Route path="/workersdetail/:id" component={WorkersDetail} />

        </div>
    )
}

export default TipRoutes

