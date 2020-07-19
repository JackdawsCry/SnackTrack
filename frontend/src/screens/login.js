import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function login(props) {
    return (
        <div className="container">
            <h1>SnackTrack</h1>
            <img class="logo" src="img/logo.png" alt="Our logo" />
            <h2>User Login</h2>
            <div class="login">
                <div class="inputField">
                    <label>Username: </label>
                    <input />
                </div>
                <div class="inputField">
                    <label>Password: </label>
                    <input />
                </div>
                <div class="inputField">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    );
}

export default login;
