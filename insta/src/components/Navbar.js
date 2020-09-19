import React from 'react'
import {Link} from 'react-router-dom'
const NavBar =()=>{
    return (
        <nav>
    <div className="nav-wrapper red">
      <Link to="/" className="brand-logo left">Instragram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/signup">SIGNUP</Link></li>
        <li><Link to="/profile">MY PROFILE</Link></li>
        <li><Link to="/CreatePost">CREATE POST</Link></li>
        
      </ul>
    </div>
  </nav>
    )
}

export default NavBar;