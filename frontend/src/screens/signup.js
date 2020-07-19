import React from "react";

function signup(props) {
  return (
    <div className="container">
      <h1>SnackTrack</h1>
      <img class="logo" src="img/logo.png" alt="Our logo"/>
      <h2>User Sign Up</h2>
      <div class="signup">
        <div class="inputField">
          <label>Full Name: </label>
          <input/>
        </div>
        <div class="inputField">
          <label>Phone Number: </label>
          <input/>
        </div>
        <div class="inputField">
          <label>Username: </label>
          <input/>
        </div>
        <div class="inputField">
          <label>Password: </label>
          <input type="text" id="fname" name="fname"/>
        </div>
        <div class="inputField">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default signup;
