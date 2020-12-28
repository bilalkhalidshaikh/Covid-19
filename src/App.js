import React from "react";
import Main from "./Main";
import "./App.module.css";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
}
