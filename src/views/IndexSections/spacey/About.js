import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
// core components
import SpaceYNavbar from "components/Navbars/SpaceYNavbar.js";
import SpaceYFooter from "components/Footers/SpaceYFooter.js";


// index page sections
import Hero from "./Hero.js";
// import Hero from "./IndexSections/Hero.js";

import CustomControls from "../CustomControls.js";
import Menus from "../Menus.js";
import LandingCg from "../../CustomSections/LandingCg.js";
import WhatIs from "../../CustomSections/WhatIs.js";
import Buildings from "../../CustomSections/Buildings.js";
import Connection from "components/ETH/Connection.js";
import Transaction from "components/ETH/Transaction.js";        
import Canvas from "components/ETH/Canvas.js"
import TicketModals from "views/IndexSections/spacey/TicketModals.js"
import EABtn from "./EABtn.js"

const backgroudImg = require("assets/SpaceYAssets/intro/005.png")
class About extends React.Component {
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }

  
  
  
  render() {
    
      return (<>
        <div className="position-relative" id="about">
        <img
                      alt="..."
                      className="position-relative vw-100 " 
                      src={backgroudImg 
                    }/>
        

        
        {/* <Form role="form" onSubmit = {this.handleSubmit} className="position-absolute" style={{left:"10%",top:"30%"}}>
                        <FormGroup className="mb-3">
                            <Input placeholder="First Name" 
                            type="text"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup>
                            
                            <Input
                              placeholder="Last Name"
                              type="text"
                              name='lastname'
                              value={this.state.lastname}
                              onChange={this.handleChange}
                            />
                        </FormGroup>
                        <div className="text-center">
                          
                          <div className="text-center">
                            {(firstname || lastname)?<TicketModals name={firstname+" "+lastname}
                           labeltext="Free Ticket!"
                           imgsrc={freeticket}/>:<></>}
                          
                        </div>
                        </div>
                      </Form> */}

        </div>
      </>
        )

  }
}

export default About;
