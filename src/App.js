import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav.js";
import Blog from "./components/Blog.js"
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css'

const BasicExample = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
    </div>
  </Router>
);
export default BasicExample;
