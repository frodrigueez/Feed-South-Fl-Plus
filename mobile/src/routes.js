import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SeekerMapView from "./pages/SeekerMapPage";
import SeekerDash from "./pages/SeekerDash";
import FoodDeliveryRequest from "./pages/FoodDeliveryRequest";
import FeederDeliveryRouteView from "./pages/FeederDeliveryRouteView";
import FeederDistRouteView from "./pages/FeederDistRouteView";
import UserType from "./pages/UserType";
import Home from "./pages/Home";
import Map from "./pages/Map";
import DistributionCentersList from './pages/DistributionCentersList';
import SeekerProfile from './pages/SeekerProfile';
import SeekerRequest from './pages/SeekerRequest';
import SeekerRequest_agreed from './pages/SeekerRequest_agreed';
import SeekerRequest_pickedUp from './pages/SeekerRequest_pickedUp';
import FeederProfile from './pages/FeederProfile';
import FeederDash from './pages/FeederDash';
import SeekerRequests from './pages/SeekerRequests';
import SeekerHealthCheck from './pages/SeekerHealthCheck';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/seeker" component={SeekerMapView} />
        <Route exact path="/seeker/dashboard" component={SeekerDash} />
        <Route
          exact
          path="/seeker/confirmation"
          component={FoodDeliveryRequest}
        />
        <Route exact path="/seeker/route" component={FeederDeliveryRouteView} />
        <Route
          exact
          path="/seeker/dist/route"
          component={FeederDistRouteView}
        />
        <Route
          exact
          path="/seeker/profile"
          component={SeekerProfile}
        />
        <Route
          exact
          path="/seeker/healthcheck"
          component={SeekerHealthCheck}
        />
        <Route
          exact
          path="/feeder/profile"
          component={FeederProfile}
        />
        <Route
          exact
          path="/feeder/dashboard"
          component={FeederDash}
        />
        <Route
          exact
          path="/feeder/requests"
          component={SeekerRequests}
        />
        <Route
          exact
          path="/feeder/request/:id/agreed"
          component={SeekerRequest_agreed}
        />
        <Route
          exact
          path="/feeder/request/:id/pickedUp"
          component={SeekerRequest_pickedUp}
        />
        <Route
          path="/feeder/request/:id"
          component={SeekerRequest}
        />
        <Route exact path="/usertype" component={UserType} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/list" component={DistributionCentersList} />
      </Switch>
    </HashRouter>
  );
};

export default Router;