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


// reactstrap components
import {
  Button,
  
  Modal,
  
} from "reactstrap";






const backgroudImg = require("assets/SpaceYAssets/SpaceTicket/004.png")
const frame = require("assets/SpaceYAssets/P1/frame.png")
const inputBackground=require("assets/SpaceYAssets/P4/P4kuang1.png")





class TransferModal extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  componentDidMount(){
  }

  shouldComponentUpdate(nextProps,nextState){
    return this.state!=nextState || this.props !=nextProps

  }

  render() {

   
    const {isopen,toggleModal}=this.props
    
    return (<Modal
      size="xl"
      isOpen={isopen}
      toggle={() => toggleModal()}
    >
      
        <img
                      alt="..."
                      className="position-relative  " 
                      src={backgroudImg }
                      style={{width:"100%"}}/>
       
  <img src={frame} className="position-absolute" style={{left:"10%",top:0,width:"80%"}}/> 
  {/* <img src={inputBackground} className="position-absolute" style={{left:"10%",top:"20%",width:"80%"}}/>  */}


  

  

  
      
    </Modal>)

  }
}


export default TransferModal;
