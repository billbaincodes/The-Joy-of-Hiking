import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return(
    <div className="nav">
      <h3><Link to="/">Home</Link></h3>
      <h3>About</h3>
      <h3><Link to="/blog">Blog</Link></h3>
    </div>
  )
}

export default Nav