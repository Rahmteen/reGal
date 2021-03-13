import React from 'react';
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import Landing from './Pages/Landing/Landing.jsx';
import Marketplace from './Pages/Marketplace/Marketplace.jsx';
import { AnimatePresence} from "framer-motion";



const App = () => {
      return (
        <AnimatePresence >
        <Switch location={location} key={location.pathname}>        
            <Route exact path='/' component={Landing}/>
            <Route exact path='/marketplace' component={Marketplace}/>
        </Switch>
        </AnimatePresence >
)}

export default App;