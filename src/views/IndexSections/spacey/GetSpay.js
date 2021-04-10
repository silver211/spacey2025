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
import TransferNFT from "./TransferNFT.js";
import SetName from "./SetName.js";
const backgroudImg = require("assets/SpaceYAssets/SpaceTicket/004.png")
const frame = require("assets/SpaceYAssets/intro/sayingFrame.png")


class GetSpay extends React.Component {
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
    // const width = width_o*ratio
    // const height = height_o*ratio
    const width=1016
    const height=421
    const {imgurl} =this.state
    const {name,labeltext,imgsrc,type,tokenId,smtInst,account} = this.props
    const {isopen,toggle}=this.props
    console.log(isopen, toggle)
    
    return (<Modal
      // className="modal-dialog-centered"
      size="xl"
      // isOpen={this.state.defaultModal}
      isOpen={isopen}
      toggle={() => toggle("uniModal")}
    >
      
        <img
                      alt="..."
                      className="position-relative  " 
                      src={backgroudImg }
                      style={{width:"100%"}}/>
       
  <img src={frame} className="position-absolute" style={{left:"10%",top:0,width:"80%"}}/> 
  {/* </div> */}
      {/* </div> */}
      {/* <div className="modal-footer align-item-center m-auto">
        {type=="NFT"?
        (<>
        <SetName
        tokenId={tokenId}
        smtInst={smtInst}
        account={account}
        />
        <TransferNFT 
        tokenId={tokenId}
        smtInst={smtInst}
        account={account}
        /></>)

        :<></>}
      </div> */}
      
    </Modal>)

  }
}

export default GetSpay;
