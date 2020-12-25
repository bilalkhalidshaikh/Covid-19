import React from "react";
import Main from "./Main";
import "./App.module.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
        <Switch>
          <Route exact path="/Login" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/Register" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}
