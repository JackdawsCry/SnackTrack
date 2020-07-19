import React from "react";
import './index.css';
import { BrowserRouter, Route, Link } from "react-router-dom";

function login(props) {
  return (
    <div className="container">
      <h1>SnackTrack</h1>
        <img class="logo" src="img/logo.png" alt="Our logo"/>
        <h2>User Login</h2>
        <div class="login">
            <label for="fname">Username:</label>
            <input type="text" id="fname" name="fname"/>
            <label for="fname">Password:</label>
            <input type="text" id="fname" name="fname"/>
            <button>Submit</button>
        </div>
    </div>
  );
}

export default login;
