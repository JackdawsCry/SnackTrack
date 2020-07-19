import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import login from "./screens/login";
import landing from "./screens/landing";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={landing} />
      <Route path="/login" component={login} />
    </BrowserRouter>
  );
}

export default App;
