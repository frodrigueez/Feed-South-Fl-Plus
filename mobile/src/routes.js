import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SeekerMapView from "./pages/SeekerMapPage";
import SeekerDash from "./pages/SeekerDash";
import FoodDeliveryRequest from "./pages/FoodDeliveryRequest";
const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/seeker" component={SeekerMapView} />
        <Route exact path="/seeker/dashboard" component={SeekerDash} />
        <Route exact path="/seeker/request" component={FoodDeliveryRequest} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
