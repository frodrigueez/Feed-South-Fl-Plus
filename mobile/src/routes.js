import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom'
const Router = () => {
    return ( 
        <HashRouter>
            <Switch>
                <Route exact path="/" component={()=><div>test</div>} />
            </Switch>
        </HashRouter>
     );
}
 
export default Router;