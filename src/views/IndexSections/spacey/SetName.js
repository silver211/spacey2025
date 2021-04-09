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
// nodejs library that concatenates classes
import classnames from "classnames";

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
  Modal,
  Row,
  Col,
  Label
} from "reactstrap";

import Canvas from "components/ETH/Canvas.js";
const saleticket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_sale.png")

class SetName extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  componentDidMount(){
  }

  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.state={
      sendTo:""
    }
  }

  handleChange(e){
    const v =e.target.value

    this.setState({
        ...this.state,
        [e.target.name]:v
    })
}

async handleSubmit(e){
  const {newname} = this.state
  const {smtInst,account,tokenId}=this.props
  console.log(account)
  console.log(newname)
  e.preventDefault();
  
  await smtInst.setName(tokenId,newname).then(
    e=>{console.log(e);alert("Name set.Please wait for processing")}
    ,err=>{alert("Name set failed.Tray again later.");console.log(err)})


}


  

  render() {

    const {tokenId} = this.props
    const {newname} = this.state

    return (
      <>
        <Row className="text-center">
          <Col >
            <Button
              block
              className="mb-3"
              color="primary"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              Set Name
            </Button>
            <Modal
              className="modal-dialog-centered"
              // size="xl"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header ">
                <h6 className="modal-title text-center" id="modal-title-default">
                  Set name for ticket
                </h6>
                <button
                  aria-label="Close"
                  className="close"
                  data-dismiss="modal"
                  type="button"
                  onClick={() => this.toggleModal("defaultModal")}
                >
                  <span aria-hidden={true}>×</span>
                </button>
              </div>
              <div className="modal-body align-item-center m-auto">
              <Form role="form" onSubmit = {this.handleSubmit}>
              <FormGroup className="mb-3" row>
                        <Label for="tokenId" sm={4}>Token ID</Label>
        <Col sm={8}>
          <Input readOnly name="tokenId" id="tokenId"  value={tokenId} placeholder="Ticket ID" />
        </Col>
                        </FormGroup>
              <FormGroup className="mb-3" row>
              <Label for="newname" sm={4}>My Name</Label>
              <Col sm={8}>
                            <Input placeholder="New Name" 
                            type="text"
                            name="newname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            />
                            </Col>
                        </FormGroup>
                        <Row className="text-center">
                          <Col>
                        <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            className="text-center"
                            disabled={!newname || newname.length==0}
                          >
                            Set Name
                          </Button>
                          </Col>
                          </Row>
                        </Form>
              </div>
              
            </Modal>
          </Col>
          
        </Row>
      </>
    );
  }
}

export default SetName;
