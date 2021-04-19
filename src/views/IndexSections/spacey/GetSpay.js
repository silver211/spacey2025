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




import {connect} from "react-redux"
import {toggle_uni} from "actions/index.js"


const backgroudImg = require("assets/SpaceYAssets/SpaceTicket/004.png")
const frame = require("assets/SpaceYAssets/P1/frame.png")
const logo = require("assets/SpaceYAssets/P1/logo.png")
const closebtnImg=require("assets/SpaceYAssets/P1/closebtn.png")

function mapDispatchToProps(dispatch){
  return {
    toggle_uni:()=>dispatch(toggle_uni()) 
  }
}

function mapStateToProps(state){
  return {
    isopen:state.uni_open
  }
  
}



class ConnectedGetSpay extends React.Component {
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

    const width_o = 2560
    const height_o = 1497
    const ratio = 0.4
    // const width = width_o*ratio
    // const height = height_o*ratio
    const width=1016
    const height=421
    const {imgurl} =this.state
    const {name,labeltext,imgsrc,type,tokenId,smtInst,account} = this.props
    const {isopen,toggle_uni}=this.props
    // console.log(isopen, toggle)
    
    return (<Modal
      size="xl"
      isOpen={isopen}
      toggle={() => toggle_uni()}
    >
      
        <img
                      alt="..."
                      className="position-relative  " 
                      src={backgroudImg }
                      style={{width:"100%"}}/>
       
  <img src={frame} className="position-absolute" style={{left:"10%",top:0,width:"80%"}}/> 
  <a  href="https://app.uniswap.org" target="_blank">
  <img src={logo} className="position-absolute" style={{left:"25%",top:"30%",width:"50%"}}/>
  </a>

  <p className="text-white position-absolute text-center" style={{left:"0%",top:"50%",width:"100%",fontSize:"1.5vw"}}>Go to UniSwap and Purchase SPAY  </p>

  <p className="text-white position-absolute text-center" style={{left:"0%",top:"55%",width:"100%",fontSize:"1.2vw"}}><span style={{color:"#D8DF72"}}>SPAY ADDRESS:</span>0xaB5b3B546BF39E661bf92431a41ba302E15A6Af4  </p>

  <Button onClick={()=>toggle_uni()} className="px-0 py-0 position-absolute" style={{backgroundColor:"transparent",borderColor:"transparent",margin:"auto",top:"0.5%",width:"20%",left:"70%"}}><img src={closebtnImg} style={{width:"100%"}}/> </Button>

  
      
    </Modal>)

  }
}

const GetSpay=connect(mapStateToProps,mapDispatchToProps)(ConnectedGetSpay)

export default GetSpay;
