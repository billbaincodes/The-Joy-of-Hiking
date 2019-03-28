import React from "react";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Card from "./components/Card.js";
import About from "./components/About.js";
import Tech from "./components/Tech.js";
import Parallax2 from "./components/parallax2";
import Parallax3 from "./components/parallax3";
import Parallax4 from "./components/parallax4";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path ="/" component={Parallax4} />
        <Nav />
      </Switch>
        <Route path="/home" component={Home} />
        <Route path="/card" component={Card} />
    </div>
  </Router>
);
export default App;
