import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Donate(props) {
  const [dName, setdName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signinform">
      <form>
        <ul className="signinform-container">
          <li>
            <label for="dName">
              Restaurant Name:
            </label>
            <input type="dName" name="dName" id="dName" onChange={(e) => setdName(e.target.value)}>
            </input>
          </li>
          <li>
            <label for="phone">
              Phone Number:
            </label>
            <input type="phone" name="phone" id="phone" onChange={(e) => setPhone(e.target.value)}>
            </input>
          </li>
          <li>
            <label for="address">
              Phone Number:
            </label>
            <input type="address" name="address" id="address" onChange={(e) => setAddress(e.target.value)}>
            </input>
          </li>
          <li>
            <label for="username">
              Username:
            </label>
            <input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)}>
            </input>
          </li>
          <li>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
            </input>
          </li>
        </ul></form></div>
  );
}

export default Donate;
