import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = { username: username, password: password };
        axios.post("http://localhost:4000/auth/login", data).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                sessionStorage.setItem("accessToken", response.data);
                Navigate("/");
            }
        });
    };
    return (
        <div className="bg-white text-center">
            <label>Username:</label>
            <input
                className="border-2 border-black"
                type="text"
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            /> <br />
            <label>Password:</label>
            <input
                className="border-2 border-black"
                type="password"
                onChange={(event) => {
                    setPassword(event.target.value);
                }}
            /> <br />

            <button onClick={login}> Login </button><br />

        </div>
    );
}

export default Login;
