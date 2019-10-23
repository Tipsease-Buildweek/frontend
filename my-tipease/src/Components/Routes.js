import React from "react";
import { Route } from "react-router-dom";
import { UserSignup } from "./User/UserSignup";
import UserLogin from "./User/UserLogin";
import PrivateRoute from "./PrivateRoute";
import WorkersDetail from "./Worker/WorkersDetail";
import WorkersList from "./WorkersList";
import WorkersCard from "./WorkersCard";

const TipRoutes = () => {
    return (
        <div>
            {/* <Route exact path="/" component={UserSignup} /> */}
            <Route path="/UserLogin" component={UserLogin} />
            <Route path="/UserSignup" component={UserSignup} />
            <PrivateRoute path="/WorkersList" component={WorkersList} />
            <PrivateRoute path="/WorkersCard" component={WorkersCard} />
            {/* <PrivateRoute path="/WorkersDetail" component={WorkersDetail} /> */}
            <PrivateRoute path="/WorkersDetail/:id" component={WorkersDetail} />
            
        </div>
    )
}

export default TipRoutes

