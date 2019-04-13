import React from "react";
import {  NavLink, Link } from "react-router-dom"
import api from "../api";

export default function Navbar(props){
  return(
    <header className="App-header">
        <NavLink to="/" exact>
          Home
        </NavLink>
        {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
        {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
        {api.isLoggedIn() && (
          <Link to="/" onClick={e => props.handleLogoutClick(e)}>
            Logout
          </Link>
        )}
        {api.isLoggedIn() && <NavLink to="/post-offer">Post Offer</NavLink>}
        {api.isLoggedIn() && <NavLink to="/all-offers">All Offers</NavLink>}
      </header>
  )
}