
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
              <Col md="5" className="text-white ">
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
              <Col md="2"> <a href="https://spacey2025.com/privacy">Privacy Policy</a></Col>
              <Col md="5" className="text-right">
              <Button
                      className="btn-icon-only rounded-circle"
                      color="discord"
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
                      color="twitter"
                      href="https://twitter.com/spacey2025"
                      id="tooltip829810203"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-twitter" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip829810203">
                      Follow our Twitter
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="medium"
                      href="https://medium.com/@spacey2025"
                      id="tooltip829810213"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-medium" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip829810213">
                      Follow our Medium
                    </UncontrolledTooltip>

                    <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="facebook"
                      href="https://www.facebook.com/SpaceY-2025-102636005328431"
                      id="tooltip829810240"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-facebook" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip829810240">
                      Follow our Facebook
                    </UncontrolledTooltip>
                    



                    {/* <Button
                      className="btn-icon-only rounded-circle ml-1"
                      color="wechat"
                      href="mailto:support@spacey2025.com"
                      id="tooltip829810202"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-weixin" />
                      </span>
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip829810202">
                      Mail us
                    </UncontrolledTooltip> */}
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default SpaceYFooter;
