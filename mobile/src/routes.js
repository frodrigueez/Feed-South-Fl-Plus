import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SeekerMapView from './pages/SeekerMapPage'
const Router = () => {
    return ( 
        <HashRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/seeker" component={SeekerMapView} />
            </Switch>
        </HashRouter>
     );
}
 
export default Router;