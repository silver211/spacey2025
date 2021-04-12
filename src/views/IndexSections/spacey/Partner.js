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

const backgroudImg = require("assets/SpaceYAssets/intro/007.png")
const frame = require("assets/SpaceYAssets/intro/sayingFrame.png")
class Partner extends React.Component {
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }

  
  
  
  render() {
    
      return (<>
        <div className="position-relative" id="partner">
        <img
                      alt="..."
                      className="position-relative vw-100 " 
                      src={backgroudImg 
                    }/> 


<div className="text-center position-absolute" style={{width:"60%",left:"20%",top:"40%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"1.3vw"}}>Our mission is to inherit cultural genes through NFT</p>
        </div> 

<div className="text-center position-absolute" style={{width:"60%",left:"20%",top:"5%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}><span style={{fontSize:"4.5vw"}}>W</span>HAT OUR PARTNERS ARE SAYING</p>
        </div>
      
        




      <div className="position-absolute" style={{
          top:"20%",
          left:"25%",
          width:"50%"
        }}><img
                      alt="..."
                      className="position-relative "
                      width="100%" 
                      src={frame 
                    }/>
                    

                    
                    
                    </div>
        {window.innerWidth>=1024?
        <Row className="align-items-center justify-content-center position-absolute vw-100"
                style={{left:"0",top:"70%",height:"30%"}}
                >
                  <Col className="text-center " style={{height:"100%"}} lg="12"  >
                    
                    
                    <EABtn />
                  </Col>
                </Row>:<></>}
        </div>
        
      </>
        )

  }
}

export default Partner;
