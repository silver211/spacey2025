
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
  UncontrolledTooltip,
  Modal
} from "reactstrap";
import {connect} from "react-redux"
import {toggle_uni,
toggle_ea} from "actions/index.js"


import SignIn from "./SignIn.js"
import TicketModals from "views/IndexSections/spacey/TicketModals.js"
import GetSpay from "views/IndexSections/spacey/GetSpay.js"


import Canvas from "components/ETH/Canvas.js";
const imgsrc=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_free.png")

function mapDispatchToProps(dispatch){
  return {
    toggle_uni:()=>dispatch(toggle_uni()),
    toggle_ea:()=>dispatch(toggle_ea()) 
  }
}

function mapStateToProps(state){
  return {
  }
  
}


class ConnectedSpaceYNavbar extends React.Component {
  componentDidMount() {

    
  }

  constructor(props){
    super(props)
    this.toggleModal=this.toggleModal.bind(this)
  }

  toggleModal(state) {
    this.setState({
      [state]:!this.state[state]
    })
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


  shouldComponentUpdate(nextProps,nextState){
    return this.state!=nextState || this.props !=nextProps

  }
  

  render() {
    const width=1016
    const height=421
    const vw = window.innerWidth

    return (
      <>
        {/* <header className="header-global"> */}

          <Navbar
                  // className="navbar-main navbar-transparent navbar-dark headroom fixed-top"

            className="navbar-main  navbar-dark    bg-dark"
            expand="lg"
            id="navbar-main" id="nav"
          >
            <Container style={{maxWidth:"1920px"}}>
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



                  <Link to="/#freeticket" key="freeticket" >
                  <NavItem>
                    <NavLink
                      // href="/#freeticket"
                    >
                          FREE TICKET

                    </NavLink>
                    
                  </NavItem>
                  </Link>
                <Link to="/#about" key="about">
                  <NavItem>
                    <NavLink
                      href="/#about"

                    >
                      ABOUT SPACEY2025

                    </NavLink>
                    
                  </NavItem>
                  </Link>

                  {vw>=1024?
                  (<>
                  
                  <NavItem onClick={() => this.props.toggle_uni()} >

                    <NavLink

                    >
                      GET SPAY

                    </NavLink>
                    
                  </NavItem>
                  
                  <Link to="/market">
                  <NavItem>
                    <NavLink
                      href="/market"
                    >
                      MARKET

                    </NavLink>
                    
                  </NavItem></Link> </>):<></>}
                  
                  
                </Nav>




                {vw>=1024?
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <SignIn
                  />
                </Nav>:<></>}
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          

      </>
    );
  }
}
const SpaceYNavbar=connect(mapStateToProps,mapDispatchToProps)(ConnectedSpaceYNavbar)
export default SpaceYNavbar;
