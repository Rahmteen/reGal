import React from 'react';
import { Route, Switch } from "react-router-dom";
import Landing from './Pages/Landing/Landing.jsx';
import Explore from './Pages/Explore/Explore.jsx';
import Profile from './Pages/Profile/Profile.jsx';
import NavBar from './Components/NavBar/NavBar.jsx'


const App = () => {
      return (
            <div>
            <Route path='/' component={NavBar}/>
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/explore' component={Explore}/>
        </Switch>
        </div>

)}

export default App;