import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import login from './screens/login';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h1>SnackTrack</h1>
      <img className="logo" src="img/logo.png" alt="Our logo" />
      <div className="landing">
      <Route path="/login/:id" component={login} />
        <a href="login.html">
          
          <button><Link to="/">Login</Link></button>
        </a>
        <a href="userTypeSignup.html">
          <button>Sign Up</button>
        </a>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
