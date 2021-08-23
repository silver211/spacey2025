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
        <div className="text-center position-absolute" style={{width:"80%",left:"10%",top:"25%"}}>
        <p  className="text-white mb-0" style={{fontSize:"1vw"}}>
        In a universe parallel to our own, Space Y is the name of the project to colonize and settle Mars, which is sponsored by Elon Musk.<br />
        In 2025, Elon Y announced that the Great Falcon Spaceship (GFS) will send the first 100 humans to Mars, which will take the Dragon 8 months to cross. This project has been dubbed Project Space Y 2025.
Among the 100 brave pioneers, experts from numerous industries populate a large majority of the 100, humanity’s best effort to ensure the project’s success. After landing, we need to find space-dropped materials to build the first Mars settlement. This is the moment humanity evolves to a plant-faring civilization. On this cold and hostile red rock, your only goal is to survive…

        </p>
        </div>
        <div className="text-center position-absolute" style={{width:"15%",left:"15%",top:"71%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>BUILD</p>
        <p  className="text-white mb-0 mx-auto" style={{fontFamily:"BankGothic",fontSize:"1vw"}}>YOUR MARS BASE</p>
        </div>

        <div className="text-center position-absolute" style={{width:"15%",left:"33%",top:"71%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>FIGHT</p>
        <p  className="text-white mb-0 mx-auto" style={{fontFamily:"BankGothic",fontSize:"1vw"}}>ALIEN INVADERS  </p>
        </div>

        <div className="text-center position-absolute" style={{width:"15%",left:"52%",top:"71%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>UPGRADE</p>
        <p  className="text-white mb-0 mx-auto" style={{fontFamily:"BankGothic",fontSize:"1vw"}}>THE DEFENSE TOWERS</p>
        </div>

        <div className="text-center position-absolute" style={{width:"15%",left:"70%",top:"71%"}}>
        <p  className="text-white mb-0" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>TRADE</p>
        <p  className="text-white mb-0 mx-auto" style={{fontFamily:"BankGothic",fontSize:"1vw"}}>WITH OTHERS</p>
        </div>
        

        
        

        </div>
      </>
        )

  }
}

export default About;
