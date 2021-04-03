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
  Col
} from "reactstrap";

import Canvas from "components/ETH/Canvas.js";
const saleticket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_sale.png")

class TicketModals extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  componentDidMount(){
    this.saveImgurl=this.saveImgurl.bind(this)
  }

  saveImgurl(url){
    this.setState({
      imgurl:url
    })
  }

  render() {

    const width_o = 2560
    const height_o = 1497
    const ratio = 0.4
    const width = width_o*ratio
    const height = height_o*ratio
    const {imgurl} =this.state
    const {name,labeltext,imgsrc} = this.props

    return (
      <>
        
        <Row>
          <Col >
            <Button
              block
              className="mb-3"
              color="primary"
              type="button"
              onClick={() => this.toggleModal("defaultModal")}
            >
              {labeltext}
            </Button>
            <Modal
              className="modal-dialog-centered"
              size="xl"
              isOpen={this.state.defaultModal}
              toggle={() => this.toggleModal("defaultModal")}
            >
              <div className="modal-header ">
                {/* <h6 className="modal-title text-center" id="modal-title-default">
                  My SMT Ticket
                </h6> */}
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
                <Canvas save={this.saveImgurl} 
          width={width} 
          height={height} 
          imgSrc={imgsrc}
          font="40px sans-serif"
          fillColor="#ffffff"
          text={[[name,width*0.45,height*0.5,"left"]]
          }
     />
          <img src={imgurl} />
              </div>
              
            </Modal>
          </Col>
          
        </Row>
      </>
    );
  }
}

export default TicketModals;
