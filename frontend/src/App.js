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
<<<<<<< HEAD
  return (
    <BrowserRouter>    
      <Route path="/login" component={login} />
      <Route exact path="/" component={landing} />
      <Route path="/userTypeLogin" component={userTypeLogin} />
      <Route path="/userTypeSignup" component={userTypeSignup}/>
=======
  const [userType, setUserType] = useState("user");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Route exact path="/" component={landing} />
      <Route path="/userTypeLogin" component={userTypeLogin} />
      <Route path="/userTypeSignup" component={userTypeSignup} />
      <Route path="/browse" component={browse} />
      <Route path="/donate" component={donate} />
>>>>>>> a14b12622558ee729eb4b286d46463a4bf51a4a0
    </BrowserRouter>
  );
}

export default App;
