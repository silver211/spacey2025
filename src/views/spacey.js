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

// reactstrap components
// import { Container, Row } from "reactstrap";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";



// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SpaceYNavbar from "components/Navbars/SpaceYNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import SpaceYFooter from "components/Footers/SpaceYFooter.js";

// index page sections
import Hero from "./IndexSections/spacey/Hero.js";
import FreeTicket from "./IndexSections/spacey/FreeTicket.js";
import About from "./IndexSections/spacey/About.js"
import Partner from "./IndexSections/spacey/Partner.js"
// import Hero from "./IndexSections/Hero.js";

import CustomControls from "./IndexSections/CustomControls.js";
import Menus from "./IndexSections/Menus.js";
import LandingCg from "./CustomSections/LandingCg.js";
import WhatIs from "./CustomSections/WhatIs.js";
import Buildings from "./CustomSections/Buildings.js";
import Alien from "./CustomSections/Alien.js";
import Defend from "./CustomSections/Defend.js";
// import Connection from "components/ETH/Connection.js";
import Transaction from "components/ETH/Transaction.js";




class SpaceY extends React.Component {
  state={}
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }


  
  render() {
    // return (
    //   <>
    //   <SpaceYNavbar />
    //   <main ref="main">
    //     <Hero />
    //             <SpaceYFooter />

    //     </main>
    //   </>
    // )

    return (
      <>
                 <SpaceYNavbar />

           <div ref="main">

             <Hero />
            <FreeTicket />        
            <About />
            <Partner/>

            




        </div>
        <SpaceYFooter />

      </>
    );




  }
}

export default SpaceY;
