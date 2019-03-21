import React from "react";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Nav from "./components/Nav.js";
import Blog from "./components/Blog.js"
import Tech from './components/Tech.js'
import Parallax2 from './components/parallax2'
import Parallax3 from './components/parallax3'
import Parallax4 from './components/parallax4'
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css'

const BasicExample = () => (
  <Router>
    <div>
      {/* <Nav /> */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/tech" component={Tech} />
      <Route path="/p2" component={Parallax2} />
      <Route path="/p3" component={Parallax3} />
      <Route path="/p4" component={Parallax4} />
    </div>
  </Router>
);
export default BasicExample;
