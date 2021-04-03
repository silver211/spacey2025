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
import Hero from "./IndexSections/spacey/Hero.js";
// import Hero from "./IndexSections/Hero.js";

import CustomControls from "./IndexSections/CustomControls.js";
import Menus from "./IndexSections/Menus.js";
import LandingCg from "./CustomSections/LandingCg.js";
import WhatIs from "./CustomSections/WhatIs.js";
import Buildings from "./CustomSections/Buildings.js";
import Connection from "components/ETH/Connection.js";
import Transaction from "components/ETH/Transaction.js";        
import Canvas from "components/ETH/Canvas.js"
import TicketModals from "views/IndexSections/spacey/TicketModals.js"

const freeticket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_free.png")


class Share extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  constructor(props){
      super(props)
      this.state= {
          firstname:"",
          lastname:"",
          imgurl:"",
          freeticket:require("../assets/SpaceYAssets/SpaceTicket/spaceship ticket_free.png"),
          visible:"hidden"
      }
      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
      this.saveImgurl = this.saveImgurl.bind(this)
    //   const freeticket = require("../assets/SpaceYAssets/SpaceTicket/spaceship ticket_free.png")
    //   this.freeticket=freeticket

  }

  saveImgurl(url){
    this.setState({
      imgurl:url
    })
  }

  handleChange(e){
      const v =e.target.value
      this.setState({
          ...this.state,
          [e.target.name]:v
      })
  }

  handleSubmit(e){
      const {firstname,lastname} = this.state
      e.preventDefault();
    //   alert(this.state.firstname+" "+ this.state.lastname)
    //   console.log(this.state.imgurl )
      if (firstname == "" || lastname ==""){
          return
      }
      const {imgurl} = this.state
      this.setState({
          ...this.state,
          visible:"visible"
      })
    //   console.log(imgurl)
    //   var img = new Image()
    //   img.src = imgurl
    //   var w = window.open("");
    //   w.document.write(img.outerHTML);
    //   w.document.close();
  }

  
  render() {
      var {freeticket,firstname,lastname,visible,imgurl} = this.state
      const width_o = 2560
      const height_o = 1497
      const ratio = 0.4
      const width = width_o*ratio
      const height = height_o*ratio
    return (
      <div className="bg-dark">
        <SpaceYNavbar />
        <main ref="main" >
        <section className="section section-shaped section-lg">

        <Container className="pt-lg-7">
              <Row className="justify-content-center">
                    (
                                        <Col lg="5">

                  <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Mission to Mars</small>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      {/* <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>     */}
                      <Form role="form" onSubmit = {this.handleSubmit}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            {/* <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon> */}
                            <Input placeholder="First Name" 
                            type="text"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            {/* <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon> */}
                            <Input
                              placeholder="Last Name"
                              type="text"
                              name='lastname'
                              value={this.state.lastname}
                              onChange={this.handleChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                          {/* <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                          >
                            Get Ticket!
                          </Button> */}
                          <div className="text-center">
                          
                          <TicketModals name={firstname+" "+lastname}
                           labeltext="Free Ticket!"
                           imgsrc={freeticket}/>
                        </div>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  </Col>
)
                  
              </Row>

            </Container>
            

            </section>
        </main>
        
        
        <SpaceYFooter />
      </div>
    );
  }
}

export default Share;
