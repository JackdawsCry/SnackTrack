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
    <h1>SnackTrack</h1>
    <img class="logo" src="img/logo.png" alt="Our logo" />
    <h2>Restaurant Sign Up</h2>
            <label for="foodItem">
              Food Item:   
            </label>
            <input type= "foodItem" name="foodItem" id= "foodItem" onChange={(e)=> setFoodItem(e.target.value)}>
            </input>
            <label for="quantity">
              Quantity (servings): 
            </label>
            <input type="number" id="quantity" name="quantity" min="1" ></input>
            <label for="time">
              Time of Disposal:
            </label>
            <input type= "time" name="time" id= "time" onChange={(e)=> setTime(e.target.value)}>
            </input>
            <label for="username">
              Username:
            </label>
            <input type="username" name="username" id="username" onChange={(e) => setUsername(e.target.value)}>
            </input>
            <label for="password">Password</label>
            <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
            </input>
        </div>
  );
}

export default Donate;
