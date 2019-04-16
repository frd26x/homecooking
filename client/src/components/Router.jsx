import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostOffer from "./pages/PostOffer";
import Offers from "./pages/Offers";
import Bookings from "./pages/Bookings"

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/post-offer" component={PostOffer} />
      <Route path="/all-offers" component={Offers} />
      <Route path="/all-booking-buyer" component={Bookings} />

      <Route render={() => <h2>404</h2>} />
    </Switch>
  );
}
