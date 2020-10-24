import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import UserType from './pages/UserType';
import Home from './pages/Home';
import Map from './pages/Map';
const Router = () => {
    return ( 
        <HashRouter>
            <Switch>
                <Route exact path="/" component={()=><Home />} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/usertype" component={()=><UserType />} />
                <Route exact path="/map" component={()=><Map />} />
            </Switch>
        </HashRouter>
     );
}
 
export default Router;