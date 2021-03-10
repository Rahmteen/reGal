import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing/Landing.jsx';
import Marketplace from './Pages/Marketplace/Marketplace.jsx';

const App = () => {
      return (
        <Switch>        
            <Route exact path='/' component={Landing}/>
            <Route exact path='/marketplace' component={Marketplace}/>
        </Switch>
)}

export default App;