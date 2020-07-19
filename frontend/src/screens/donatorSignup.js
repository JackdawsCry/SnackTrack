import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function donatorSignup(props) {
  return (
    <div className="container">
      <h1>SnackTrack</h1>
      <img class="logo" src="img/logo.png" alt="Our logo" />
      <h2>Restaurant Sign Up</h2>
      <div class="donatorSignup">
        <div class="inputField">
          <label>Restaurant Name: </label>
          <input />
        </div>
        <div class="inputField">
          <label>Phone Number: </label>
          <input />
        </div>
        <div class="inputField">
          <label>Address: </label>
          <input />
        </div>
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

export default donatorSignup;
