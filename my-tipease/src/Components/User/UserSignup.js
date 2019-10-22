import React, { useState } from "react";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";
import { Link } from "react-router-dom";
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


export const UserSignup = () => {
    const [user, setUser] = useState({
        fullName: "",
        password: "",
        photoUrl: "",
        username: ""
    })

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        axiosWithAuth()
            .post("/auth/users/register", user)
            .then(res => {
                console.log("Add User:", res)
                setUser({

                    fullName: "",
                    password: "",
                    photoUrl: "",
                    username: ""

                })

            })
            .catch(err => {
                console.log(err)
            });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardWrapper>
                    <CardHeader>
                        <CardHeading>Sign Up</CardHeading>
                    </CardHeader>

                    <CardBody>
                        <CardFieldset>
                            <CardInput
                                type="text"
                                placeholder="Full Name"
                                name="fullName"
                                value={user.fullName}
                                onChange={handleChange}
                                required
                            />
                        </CardFieldset>
                        <CardFieldset>
                            <CardInput
                                placeholder="Password"
                                name="password"
                                type="password"
                                value={user.password}
                                onChange={handleChange}
                                required />
                            <CardIcon className="fa fa-eye" eye small />
                        </CardFieldset>
                        <CardFieldset>
                            <CardInput
                                placeholder="Photo Url"
                                name="photoUrl"
                                type="link"
                                value={user.photoUrl}
                                onChange={handleChange}
                                required />
                        </CardFieldset>

                        <CardFieldset>
                            <CardInput
                                placeholder="Username"
                                name="username"
                                type="text"
                                value={user.username}
                                onChange={handleChange}
                                required />
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
                            <CardButton type="submit">Sign Up</CardButton>
                        </CardFieldset>

                        <CardFieldset>
                            <CardLink>
                                <Link to="/UserLogin">I already have an account</Link>
                            </CardLink>
                        </CardFieldset>
                    </CardBody>
                </CardWrapper>
            </form>
        </div>
    )
}
