import React from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/auth/user/login", this.state.credentials)
            .then(res => {
                console.log(res)
                this.props.setLogin
            })

    }

}