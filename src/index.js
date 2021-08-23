
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from "react-router-dom";

import './assets/vendor/nucleo/css/nucleo.css';
import './assets/vendor/font-awesome/css/font-awesome.min.css';
import './assets/scss/argon-design-system-react.scss?v1.1.0';
// import 'assets/SpaceYAssets/css/index.css';
import './assets/SpaceYAssets/css/index.css'

import SpaceY from "views/spacey.js";
import Ticket from "views/ticket.js"
import Privacy from "views/Privacy"
import Landing from "views/examples/Landing.js";
import Aboard from "views/aboard.js";
import MyTickets from "views/mytickets.js"
import store from "store/index.js"
// import NFTTicket from "./components/Details/nftticket"

import SpaceYNavbar from "./components/Navbars/SpaceYNavbar.js"
import SpaceYFooter from "./components/Footers/SpaceYFooter.js"
import GetSpay from "views/IndexSections/spacey/GetSpay.js"


ReactDOM.render(
  <Provider store={store} className="bg-dark">
  <BrowserRouter>
    <SpaceYNavbar />
    <Switch>
      {/* <Route path="/ticket"  component={Ticket} /> */}
      <Route path="/privacy" component={Privacy} />
      <Route path="/"   component={SpaceY} />

    
      <Redirect to="/" />
    </Switch>
    <GetSpay/>

    <SpaceYFooter />
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
