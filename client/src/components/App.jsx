import React from "react";
import { Route, Link, NavLink, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostOffer from "./pages/PostOffer"
import api from "../api";

export default function App() {
  const handleLogoutClick = e => {
    api.logout();
  };

  return (
    <div className="App">
      <header className="App-header">
        <NavLink to="/" exact>
          Home
        </NavLink>
        {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
        {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
        {api.isLoggedIn() && (
          <NavLink to="/" onClick={e => handleLogoutClick(e)}>
            Logout
          </NavLink>
        )}
        {api.isLoggedIn() && (
          <NavLink to="/post-offer">
            Post Offer
          </NavLink>
        )}
      </header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/post-offer" component={PostOffer} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  );
}
