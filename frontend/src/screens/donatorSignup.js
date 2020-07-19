import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function donatorSignup(props) {
  return (
    <div className="container">
      <h1>SnackTrack</h1>
      <img class="logo" src="img/logo.png" alt="Our logo" />
      <h2>Restaurant Sign Up</h2>
      <div class="donatorSignup">
        <label>Restaurant Name: </label>
        <input/>
        <p></p>
        <label>Phone Number: </label>
        <input/>
        <p></p>
        <label>Address: </label>
        <input/>
        <p></p>
        <label>Username: </label>
        <input/>
        <p></p>
        <label>Password: </label>
        <input/>
        <p></p>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default donatorSignup;
