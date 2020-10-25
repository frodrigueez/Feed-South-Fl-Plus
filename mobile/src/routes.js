import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SeekerMapView from "./pages/SeekerMapPage";
import SeekerDash from "./pages/SeekerDash";
import FoodDeliveryRequest from "./pages/FoodDeliveryRequest";
import FeederDeliveryRouteView from "./pages/FeederDeliveryRouteView";
import FeederDistRouteView from "./pages/FeederDistRouteView";
const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/seeker" component={SeekerMapView} />
        <Route exact path="/seeker/dashboard" component={SeekerDash} />
        <Route exact path="/seeker/confirmation" component={FoodDeliveryRequest} />
        <Route exact path="/seeker/route" component={FeederDeliveryRouteView} />
        <Route exact path="/seeker/dist/route" component={FeederDistRouteView} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
