import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function login(props) {
  return (
    <div className="container">
      <h1> SnackTrack </h1>
      <img className="logo" src="img/logo.png" alt="Our logo" />
      <div className="landing">
        <button>
          <Link to="/userTypeLogin"> Login </Link>
        </button>
        <button>
          <Link to="/userTypeSignup">Sign Up</Link>
        </button>
      </div>
    </div>
  );
}

export default login;
