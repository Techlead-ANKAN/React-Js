import React from 'react'
import "./header.css"
import {Link, NavLink} from "react-router-dom"

export default function Header() {
  return (

      
      <header>
        <div className="tabs">
          <Link to="/">
            <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo" />
          </Link>
          <NavLink to="/" exact activeClassName="active">Home</NavLink>
          <NavLink to="/about" exact activeClassName="active">About</NavLink>
          <NavLink to="/login" exact activeClassName="active">Login</NavLink>
          <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
        </div>
      </header>

  );
}

