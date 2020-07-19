import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import landing from "./screens/landing";

import browse from "./screens/browse";
import donate from "./screens/donate";
import login from "./screens/login";
import userTypeLogin from "./screens/userTypeLogin";
import userTypeSignup from"./screens/userTypeSignup";

function App() {
  return (
    <BrowserRouter>    
      <Route path="/login" component={login} />
      <Route exact path="/" component={landing} />
      <Route path="/userTypeLogin" component={userTypeLogin} />
      <Route path="/userTypeSignup" component={userTypeSignup}/>
    </BrowserRouter>
  );
}

export default App;
