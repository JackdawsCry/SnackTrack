import React from "react";

function userTypeSignup(props) {
  return (
    <div className="container">
      <h1>SnackTrack</h1>
        <img className="logo" src="img/logo.png" alt="Our logo"/>
        <h2>What type of user are you?</h2>
        <div className="userType">
            <a href="login.html"> <button type="button">I'm a restaurant</button></a>
            <a href="login.html"><button type="button">I'm looking for food</button></a>
      </div>
    </div>
  );
}
  
export default userTypeSignup;
  