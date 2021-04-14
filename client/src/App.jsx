//Modules
import React from 'react';
import { Route, Switch } from "react-router-dom";
//Components
import Landing from './Pages/Landing';
import Explore from './Pages/Explore';
import Profile from './Pages/Profile';
import NftMinter from './Pages/NftMinter';
import DetailedView from "./Pages/DetailedView";
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
                <Route exact path="/details/:id" component={DetailedView} />
                <Route exact path='/minter' component={NftMinter} />
            </ComponentWrapper>
        </Switch>
    )
}

export default App;