import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Donate(props) {
  const [foodItem,setFoodItem]=useState("");
  const [quantity,setAddress]=useState("");
  const [time,setTime]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  return (
    <div className="donatepage">
      <form>
        <ul className= "donatepage-container">
          <li>
            <label for="foodItem">
              Food Item:
            </label>
            <input type= "foodItem" name="foodItem" id= "foodItem" onChange={(e)=> setFoodItem(e.target.value)}>
            </input>
          </li>
          <li>
            <label for="quantity">
              Quantity (servings): 
            </label>
            <input type="number" id="quantity" name="quantity" min="1" ></input>
          </li>
          <li>
            <label for="time">
              Time of Disposal:
            </label>
            <input type= "time" name="time" id= "time" onChange={(e)=> setTime(e.target.value)}>
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
