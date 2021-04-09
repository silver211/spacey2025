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
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

import Connection from "./Connection.js"

class SpaceYNavbar extends React.Component {
  componentDidMount() {
    // let headroom = new Headroom(document.getElementById("navbar-main"));
    // // initialise
    // headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        {/* <header className="header-global"> */}

          <Navbar
                  // className="navbar-main navbar-transparent navbar-dark headroom fixed-top"

            className="navbar-main  navbar-dark    bg-dark"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/SpaceYAssets/Game Logo/spaceY_1_dark.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/SpaceYAssets/Game Logo/spaceY_1_dark.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                

<Nav className="align-items-lg-center" navbar>
<NavItem>
                    <NavLink
                      href="/#home"  
                    >
                      HOME
                    </NavLink>
                    
                  </NavItem> 



                  <NavItem>
                    <NavLink
                      href="/#freeticket"  
                    >
                          FREE TICKET

                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/#about"  
                    >
                      ABOUT SPACEY2025

                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/#home"    
                    >
                      GET SPAY

                    </NavLink>
                    
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="/#home"  
                    >
                      EARLY ACCESS

                    </NavLink>
                    
                  </NavItem>

                  <NavItem>
                    <NavLink
                      href="#/mytickets"  
                    >
                      MARKET

                    </NavLink>
                    
                  </NavItem>
                  
                  
                </Nav>





                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                    <NavLink
                      href="#/mytickets"  
                    >
                      MY NFT

                    </NavLink>
                    
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://discord.gg/qRQdaaUm"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-discord" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Discord
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Join our discord
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://t.me/Spacey2025"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-telegram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Telegram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Join our telegram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="mailto:support@spacey2025.com"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-envelope" />    
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Mail
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Mail Us
                    </UncontrolledTooltip>
                  </NavItem>
                   */}

                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        {/* </header> */}
      </>
    );
  }
}

export default SpaceYNavbar;
