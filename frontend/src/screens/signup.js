import React from "react";

function signup(props) {
  return (
    <div className="container">
      <h1>SnackTrack</h1>
      <img class="logo" src="img/logo.png" alt="Our logo" />
      <h2>User Sign Up</h2>
      <div class="signup">
        <label>Full Name: </label>
        <input/>
        <p></p>
        <label>Phone Number: </label>
        <input/>
        <p></p>
        <label>Username: </label>
        <input/>
        <p></p>
        <label>Password: </label>
        <input type="text" id="fname" name="fname" />
        <p></p>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default signup;
