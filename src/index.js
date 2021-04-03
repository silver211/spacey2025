/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import SpaceY from "views/spacey.js";
import Landing from "views/Landing.js";
import Aboard from "views/aboard.js";
import Share from "views/share.js";
import MyTickets from "views/mytickets.js"

import { Web3Provider } from 'react-web3';


ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" exact render={props => <SpaceY {...props} />} />
      <Route path="/demo" exact render={props => <Index {...props} />}  />
      <Route
        path="/landing-page"
        exact
        render={props => <Landing {...props} />}
      />
      <Route path="/login-page" exact render={props => <Login {...props} />} />
      <Route
        path="/profile-page"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/register-page"
        exact
        render={props => <Register {...props} />}
      />
      <Route
        path="/spacey"
        exact
        render={props => <SpaceY {...props} />}
      />
      <Route
        path="/aboard"
        exact
        render={props => <Aboard {...props} />}
      />
      <Route
        path="/share"
        exact
        render={props => <Share {...props} />}
      />
      <Route
        path="/mytickets"
        exact
        render={props => < MyTickets { ...props} />}
      />
      

      <Redirect to="/" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
