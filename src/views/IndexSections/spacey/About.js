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
    this.largeFont=this.largeFont.bind(this)
  }

  largeFont(s){
    return (
      <span style={{fontSize:"4.5vw"}}>{s}</span>
    )
  }

  
  
  
  render() {
      const {largeFont}=this;
      return (<>
        <div className="position-relative" id="about">
        <img
                      alt="..."
                      className="position-relative vw-100 " 
                      src={backgroudImg 
                    }/>
          <div className="text-center position-absolute" style={{width:"40%",left:"30%",top:"10%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>{largeFont("A")}BOUT {largeFont("S")}PACE{largeFont("Y")} 2025</p>
        </div>
        <div className="text-center position-absolute" style={{width:"50%",left:"25%",top:"25%"}}>
        <p  className="text-white mb-0" style={{fontSize:"1vw"}}>
        In 2025, Elon Musk announced that the Big Falcon Spaceship (BFS) will send the first batch of 100
human volunteers to Mars, and it will take about 8 months for the manned spacecraft Dragon to
reach Mars. We call it the Project SpaceY 2025.<br /> 
Among the 100 pioneering volunteers, there are experts and elites from various industries. After
landing on Mars, we need to search for airdropped materials to build the first Mars base. At that
moment, human kind has officially begun to become a multi-planet species. In this cold, desolate,
no-air, red rock planet, your only goal is to keep living...

        </p>
        </div>
        <div className="text-center position-absolute" style={{width:"15%",left:"15%",top:"71%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>BUILD</p>
        <p  className="text-white mb-0 mx-auto" style={{fontFamily:"BankGothic",fontSize:"1vw"}}>THE MARS BASE</p>
        </div>

        <div className="text-center position-absolute" style={{width:"15%",left:"33%",top:"71%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>FIGHT</p>
        <p  className="text-white mb-0 mx-auto" style={{fontFamily:"BankGothic",fontSize:"1vw"}}>THE ALIEN INTRUDERS  </p>
        </div>

        <div className="text-center position-absolute" style={{width:"15%",left:"52%",top:"71%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>UPGRADE</p>
        <p  className="text-white mb-0 mx-auto" style={{fontFamily:"BankGothic",fontSize:"1vw"}}>THE DEFEND TOWER</p>
        </div>

        <div className="text-center position-absolute" style={{width:"15%",left:"70%",top:"71%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>TRADE</p>
        <p  className="text-white mb-0 mx-auto" style={{fontFamily:"BankGothic",fontSize:"1vw"}}>ALL YOUR ASSETS</p>
        </div>
        

        
        

        </div>
      </>
        )

  }
}

export default About;
