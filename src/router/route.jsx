import React from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import Home from '../page/home/home'
import Login from '../page/login/login'
import SportsEvent from '../page/SportsEvent/SportsEvent'



const BasicRoute = () => (
    <Router>
        <div>
            <Route  exact path="/" component={Home}></Route>
            <Route path="/SportsEvent" component={SportsEvent}></Route>
            <Route path="/login" component={Login}></Route>
        </div>
    </Router>
);
export default BasicRoute;