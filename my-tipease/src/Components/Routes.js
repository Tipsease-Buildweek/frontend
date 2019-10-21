import React from "react";
import { Route } from "react-router-dom";
import { UserSignup } from "./User/UserSignup";
import UserLogin from "./User/UserLogin";
import PrivateRoute from "./PrivateRoute";
import WorkersDetail from "./WorkersDetail";
import WorkersList from "./WorkersList";
import WorkersCard from "./WorkersCard";

const Routes = () => {
    return (
        <div>
            <Route exact path="/" component={UserSignup} />
            <Route path="/UserLogin" component={UserLogin} />
            <PrivateRoute path="/WorkersList" component={WorkersList} />
            <PrivateRoute path="/WorkersCard" component={WorkersCard} />
            <PrivateRoute path="/WorkersDetail" component={WorkersDetail} />
        </div>
    )
}

export default Routes 