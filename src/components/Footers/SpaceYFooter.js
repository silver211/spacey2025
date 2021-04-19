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
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class SpaceYFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer bg-dark">
          <Container>
                <Row className=" row-grid align-items-center mb-5">
                  <Col lg="6">
                    <h3 className=" text-white font-weight-light mb-2">
                      Thank you for supporting us!
                    </h3>
                    <h4 className=" mb-0 font-weight-light text-white">
                      Let's get in touch on any of these platforms.
                    </h4>
                  </Col>
                  <Col className="text-lg-center btn-wrapper" lg="6">
                    <Button
                      className="btn-icon-only rounded-circle"
                      color="twitter"
                      href=" https://discord.com/invite/cUeNS8UzGW"
                      id="tooltip475038074"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-discord" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip475038074">
                      Join our discord
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="facebook"
                      href="https://t.me/Spacey2025"
                      id="tooltip837440414"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-telegram" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip837440414">
                      Join our telegram
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="dribbble"
                      href="mailto:support@spacey2025.com"
                      id="tooltip829810202"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-envelope" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip829810202">
                      Mail us
                    </UncontrolledTooltip>
                    
                  </Col>
                </Row>
                <hr />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6" className="text-white ">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                  <a
                    // href="http://www.blockfish.io"
                    // target="_blank"
                  >
                    spacey2025.com
                  </a>
                  
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="http://www.blockfish.io"
                      target="_blank"
                    >
                      Blockfish Inc
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="http://www.blockfish.io/#portfolio-bg0"
                      target="_blank"
                    >
                      About Us
                    </NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink
                      href="http://blog.creative-tim.com?ref=adsr-footer"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      MIT License
                    </NavLink>
                  </NavItem> */}
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SpaceYFooter;
