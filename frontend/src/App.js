import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import landing from "./screens/landing";
import browse from "./screens/browse";
import donate from "./screens/donate";
import userTypeLogin from "./screens/userTypeLogin";
import userTypeSignup from "./screens/userTypeSignup";

function App() {
  const [userType, setUserType] = useState("user");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Route exact path="/" component={landing} />
      <Route path="/userTypeLogin" component={userTypeLogin} />
      <Route path="/userTypeSignup" component={userTypeSignup} />
      <Route path="/browse" component={browse} />
      <Route path="/donate" component={donate} />
    </BrowserRouter>
  );
}

export default App;
