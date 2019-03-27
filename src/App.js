import React from "react";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Tech from "./components/Tech.js";
import Parallax2 from "./components/parallax2";
import Parallax3 from "./components/parallax3";
import Parallax4 from "./components/parallax4";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Parallax4} />
      <Nav />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/tech" component={Tech} />
      <Route path="/p2" component={Parallax2} />
      <Route path="/p3" component={Parallax3} />
    </div>
  </Router>
);
export default App;
