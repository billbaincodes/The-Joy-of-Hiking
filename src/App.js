import React from "react";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Card from "./components/Card.js";
import About from "./components/About.js";
import Landing from "./components/Landing";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path ="/" component={Landing} />
        <Nav />
      </Switch>
        <Route path="/home" component={Home} />
        <Route path="/card" component={Card} />
        <Route path="/about" component={About} />

    </div>
  </Router>
);
export default App;
