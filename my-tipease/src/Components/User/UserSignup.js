import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../../Utils/axiosWithAuth";

export const UserSignup = (props) => {
    const [user, setUser] = useState({
        fullName: "John Smith",
        password: "no",
        photoUrl: "justKidding",
        username: "user"
    })

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.username]: e.target.value
        })
    }

    // const handleSubmit = e => {
    //     e.preventDefault();


    useEffect(() => {

        axiosWithAuth()
            .post("/auth/users/register", {
                fullName: "John Smith",
                password: "no",
                photoUrl: "justKidding",
                username: "user"
            })
            .then(res => {
                console.log("Add User:", res)

            })
            .catch(err => {
                console.log(err)
            });
    }, [])

    return (
        <div>
            Hello
        </div>
    )
}