import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import landing from "./screens/landing";

import browse from "./screens/browse";
import donate from "./screens/donate";
import login from "./screens/login";
import userTypeSignup from "./screens/userTypeSignup";
import signup from "./screens/signup";

function App() {
  const [userType, setUserType] = useState("user");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Route exact path="/" component={landing} />
      <Route path="/login" component={login} />
      <Route path="/userTypeSignup" component={userTypeSignup} />
      <Route path="/browse" component={browse} />
      <Route path="/donate" component={donate} />
      <Route path="/signup" component={signup} />
    </BrowserRouter>
  );
}

export default App;
