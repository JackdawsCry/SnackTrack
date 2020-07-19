import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function landing(props) {
  return (
    <div className="container">
      <h1> SnackTrack </h1>
      <img className="logo" src="img/logo.png" alt="Our logo" />
      <div className="landing">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/userTypeSignup">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default landing;
