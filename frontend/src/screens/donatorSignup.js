import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function donatorSignup(props) {
  return (
    <div className="container">
      <h1>SnackTrack</h1>
        <img class="logo" src="img/logo.png" alt="Our logo"/>
        <h2>Restaurant Sign Up</h2>
        <div class="donatorSignup">
            <label for="fname">Restaurant Name: </label>
            <input type="text" id="fname" name="fname"/>
            <p></p>
            <label for="fname">Phone Number: </label>
            <input type="text" id="fname" name="fname"/>
            <p></p>
            <label for="fname">Address: </label>
            <input type="text" id="fname" name="fname"/>
            <p></p>
            <label for="fname">Username: </label>
            <input type="text" id="fname" name="fname"/>
            <p></p>
            <label for="fname">Password: </label>
            <input type="text" id="fname" name="fname"/>
            <p>
            </p>
            <button>Submit</button>
        </div>
    </div>
  );
}

export default donatorSignup;
