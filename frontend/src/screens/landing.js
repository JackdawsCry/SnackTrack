import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function login(props) {
  return (
    <div className="container">
      <h1> SnackTrack </h1>
      <img className="logo" src="img/logo.png" alt="Our logo" />
      <div className="landing">
        <button>
          <Link to="/login"> Login </Link>
        </button>
        <a href="userTypeSignup.html">
          <button> Sign Up </button>
        </a>
      </div>
    </div>
  );
}

export default login;
