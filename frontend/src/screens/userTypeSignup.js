import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function userTypeSignup(props) {
  return (
    <div className="container">
      <h1>SnackTrack</h1>
      <img className="logo" src="img/logo.png" alt="Our logo" />
      <h2>What type of user are you?</h2>
      <div className="userType">
          <button type="button">I'm a restaurant</button>
          <Link to="/signup">
            <button>I'm looking for food</button>
          </Link>
      </div>
    </div>
  );
}

export default userTypeSignup;
