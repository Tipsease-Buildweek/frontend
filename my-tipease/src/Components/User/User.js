import React from "react";

function User({ user }) {
    return (
        <div id={user.id}>
            <p>Full Name: {user.name}</p>
            <p>Password {user.name}</p>
        </div>
    )
}