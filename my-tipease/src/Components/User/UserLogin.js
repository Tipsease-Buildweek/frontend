import React, { useState } from "react";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import {
    CardWrapper,
    CardHeader,
    CardHeading,
    CardBody,
    CardIcon,
    CardFieldset,
    CardInput,
    CardOptionsItem,
    CardOptions,
    CardButton,
    CardLink
} from "./UserCard";
import '../../App.css';

/*
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
*/

const UserLogin = (props) => {
    const [credentials, setCredentials] = useState({});
    const login = e => {
        e.preventDefault();
        axiosWithAuth().post("/auth/users/login", credentials)
            .then(res => {
                console.log("login res: ", res)
                localStorage.setItem('token', res.data.token);
                props.history.push('/WorkersDetail');
            })
    }
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>
            <form onSubmit={login}>
                <CardWrapper>
                    <CardHeader>
                        <CardHeading>Log in</CardHeading>
                    </CardHeader>

                    <CardBody>
                        <CardFieldset>
                            <CardInput
                                type="text"
                                name="username"
                                placeholder="username"
                                value={credentials.username}
                                onChange={handleChange}
                                required
                            />
                        </CardFieldset>
                        <CardFieldset>
                            <CardInput
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={credentials.password}
                                onChange={handleChange}
                                required />
                            <CardIcon className="fa fa-eye" eye small />
                        </CardFieldset>
                        <CardFieldset>
                            <CardInput
                                name="isServiceWorker"
                                type="radio"
                                value={credentials.isServiceWorker}
                                onChange={handleChange}
                                required />
                            <label for="isServiceWorker">Service Worker</label>
                        </CardFieldset>

                        <CardFieldset>
                            <CardInput
                                // id="isNotServiceWorker"
                                name="isNotServiceWorker"
                                type="radio"
                                value={credentials.isNotServiceWorker}
                                onChange={handleChange}
                                required />
                            <label for="isNotServiceWorker">Non Service Worker</label>
                        </CardFieldset>

                        <CardFieldset>

                            <CardOptions>
                                <CardOptionsItem>
                                    <CardIcon className="fab fa-google" big />
                                </CardOptionsItem>

                                <CardOptionsItem>
                                    <CardIcon className="fab fa-twitter" big />
                                </CardOptionsItem>

                                <CardOptionsItem>
                                    <CardIcon className="fab fa-facebook" big />
                                </CardOptionsItem>
                            </CardOptions>
                        </CardFieldset>

                        <CardFieldset>
                            <CardButton type="submit">Log in </CardButton>
                        </CardFieldset>
                    </CardBody>
                </CardWrapper>
            </form>
        </div>
    )
}
export default UserLogin;

