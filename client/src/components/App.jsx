import React from "react";

import Navbar from "./Navbar";
import Router from "./Router";
import api from "../api";

export default function App() {
  const handleLogoutClick = e => {
    api.logout();
  };

  return (
    <div className="App">
      <Navbar handleLogoutClick={e => handleLogoutClick(e)} />
      <Router />
    </div>
  );
}
