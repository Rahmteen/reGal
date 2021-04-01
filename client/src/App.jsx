//MODULES
import React from 'react';
import { Route, Switch } from "react-router-dom";
//COMPONENTS
import Landing from './Pages/Landing/Landing';
import Explore from './Pages/Explore/Explore';
import Profile from './Pages/Profile/Profile';
import ComponentWrapper from './Components/ComponentWrapper';
//CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Landing}/>
            <ComponentWrapper>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/explore' component={Explore}/>
            </ComponentWrapper>
        </Switch>
    )
}

export default App;