import React from "react";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Nav from "./components/Nav.js";
import Blog from "./components/Blog.js"
import Tech from './components/Tech.js'
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
