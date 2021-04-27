
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
          <Container >
                
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
              <Col md="6" className="text-right">
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
                {/* <Nav className=" nav-footer justify-content-end">
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
                  
                </Nav> */}
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SpaceYFooter;
