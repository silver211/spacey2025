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
import {ethers} from "ethers";
import {connect} from "react-redux"
import {get_price,
toggle_uni,
toggle_ea,
update_address} from "actions/index.js"
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
  UncontrolledCarousel
} from "reactstrap";

import Canvas from "components/ETH/Canvas.js";
import TransferNFT from "./TransferNFT.js";
import SetName from "./SetName.js";


import GetSpay from "./GetSpay.js"
import {SMTtestabi,
  SMTtestaddr,
  SPAYtestabi,
  SPAYtestaddr,
  SALEtestabi,
  SALEtestaddr
}     from "components/ETH/spay_testabi.js"


const backgroudImg = require("assets/SpaceYAssets/SpaceTicket/004.png")
const imgsrc=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_sale.png")
const btnurl = require("assets/SpaceYAssets/btn/earlyaccess.png")
const frame=require("assets/SpaceYAssets/P3/frame.png")
const geturl=require("assets/SpaceYAssets/P4/Get spray.png")
const bottom=require("assets/SpaceYAssets/P3/bottom.png")
const top = require("assets/SpaceYAssets/P3/top.png")
const arrow=require("assets/SpaceYAssets/P3/arrow.png")
const approvebtn=require("assets/SpaceYAssets/btn/approvebtn.png")
const buybtn=require("assets/SpaceYAssets/btn/buybtn.png")

function mapDispatchToProps(dispatch){
  return {
    get_price:()=>dispatch(get_price()),
    toggle_uni:()=>dispatch(toggle_uni()),
    toggle_ea:()=>dispatch(toggle_ea()),
    update_address:()=>dispatch(update_address())


  }
}

function mapStateToProps(state){
  const {ticketPrice
    ,address,
    spayBalance,
    ea_open,
    allowance,
    ticketCount,
    spayInst,
    provider,
    saleInst,
  smtInst}=state
  return {
   price:ticketPrice,
   address:address,
   spayBalance:spayBalance,
   isopen:ea_open,
   allowance:allowance,
   ticketCount:ticketCount,
   spayInst:spayInst,
   provider:provider,
   saleInst:saleInst,
   smtInst:smtInst
  }
}








const price = ethers.BigNumber.from("2025000000000000000000")



class ConnectedTicketModals extends React.Component {
  
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  async approve(){
    const {spayInst,smtInst,address} = this.props
    const count = await smtInst.totalTokenLimit().then(console.log)
    const approve =  await spayInst.approve(SALEtestaddr,ethers.BigNumber.from(price))
    if(approve.hash){
      alert("Approve succeed!Please wait for processing...")
      this.setState({
        ...this.state,
        hash:approve.hash
      })
    }
    else{
      alert("Approove failed!Please try again later...")
    }
    
  }



  async buySMT(){
    // const from_address = this.state.account
    // const {ethereum,web3} = window
    const {spayInst,saleInst,allowance}=this.props
    // console.log(price)
    // console.log(ethers.utils.formatEther(allowance),ethers.utils.formatEther(price),allowance.gte(price))
    // const provider= new ethers.providers.Web3Provider(ethereum)
    // var spayInst = new ethers.Contract(SPAYtestaddr,SPAYtestabi,provider.getSigner());
    // var smtInst = new ethers.Contract(SMTtestaddr,SMTtestabi,provider.getSigner());
    // var saleInst = new ethers.Contract(SALEtestaddr,SALEtestabi,provider.getSigner());
    // const amount = "2025000000000000000000"
    // const price = await saleInst.smtPrice()
    // const allowance = await spayInst.allowance(account,SALEtestaddr)
    let hash = Math.random().toString()
    let name="Mars Poineer"
    let uri="https://spacey2025.com/ticket.json"
    const buy = await saleInst.buySMT(hash,uri,name).then(e=>{console.log(e);alert("You're all set.Please wait for pending transaction")},f=>{console.log(f);alert("Buy SMT failed.Try again later")})

    // console.log("buy smt")
    // if (allowance.lt(price)){
    //   const approve =  await spayInst.approve(SALEtestaddr,ethers.BigNumber.from(price))
    //   if(approve.hash){
    //     this.setState({
    //       ...this.state,
    //       hash:approve.hash
    //     })
    //   }
    // } 
    // else {
    //   console.log(hash)
    //   const buy = await saleInst.buySMT(hash).then(e=>{console.log(e);alert("You're all set.Please wait for pending transaction")},f=>{console.log(f);alert("Buy SMT failed.Try again later")})
    // }
}

//   async getAccountInfo(){
//       const {address} = this.props
//       const provider= new ethers.providers.Web3Provider(window.ethereum)
//       const accounts = await window.ethereum.request({ method: 'eth_accounts' });
//       var spayInst = new ethers.Contract(SPAYtestaddr,SPAYtestabi,provider.getSigner());
//       console.log(accounts[0],typeof(accounts[0]))
//       console.log(address,typeof(address))


//       // const {spayInst,address} = this.props
//       console.log(spayInst,address)
//       await spayInst.balanceOf(accounts[0]).then(console.log)
//       await spayInst.balanceOf(address).then(console.log)

    
// }

toggleModal(state) {
  this.setState({
    [state]:!this.state[state]
  })
}


  constructor(props){
    super(props)
    this.saveImgurl=this.saveImgurl.bind(this)
    this.buySMT=this.buySMT.bind(this);
    this.approve = this.approve.bind(this)
    // this.getAccountInfo=this.getAccountInfo.bind(this)
    this.state={
    }

  }

  componentWillUnmount(){
    if(this.interval){
    clearInterval(this.interval)
    }
}


  componentDidMount(){

    // const {ethereum} = window
    // console.log("ticket modal")
    // if (typeof ethereum !== 'undefined') {
    //     console.log('MetaMask is installed!');
    //   }
    
    // // console.log(window.ethereum)
    // if (ethereum){ 
    //   this.interval=setInterval(this.getAccountInfo.bind(this),1000)
    // }
  }

  

 


  shouldComponentUpdate(nextProps,nextState){
    return this.state!=nextState || this.props !=nextProps

  }

  nextNFT(){
    const {currNFT,smt}=this.state
    this.setState({
      currNFT:(currNFT+1)%(parseInt(smt))
    })
  }


  saveImgurl(url){
    
    this.setState({
      imgurl:url
    })
  }

  render() {
    const width=1016
    const height=421
    const {imgurl,account,smts,hash,spay} =this.state
    // const {allowance,ticketCount}=this.props
    const {isopen,toggle_uni,toggle_ea,spayBalance,address,allowance,ticketCount}=this.props
    let disableApprove=false
    let disableBuy=true
    // console.log(typeof(allowance),typeof(ticketCount))
    if (address && typeof(allowance)=="object"){
      if(allowance.gte(ethers.BigNumber.from(price))){
        disableApprove=true
        disableBuy=false
      }
    }
    // const displaySpay=typeof(spayBalance)==ethers.BigNumber?parseFloat(ethers.utils.formatEther(spayBalance)).toFixed(3):parseFloat(spayBalance).toFixed(3)
    
    const displaySpay=parseFloat(ethers.utils.formatEther(spayBalance)).toFixed(3)
    const displayPrice=parseFloat(ethers.utils.formatEther(price)).toFixed(3)
    const hasTicket = ticketCount>0
    // console.log(hasTicket)

    // if  (allowance && price && allowance.gte(price)) {
    //   disableApprove=true
    //   disableBuy=false
    // }
  
    return (<Modal
      className="modal-dialog-centered"
      size="xl"
      // isOpen={this.state.defaultModal}
      isOpen={isopen}
      toggle={() => toggle_ea()}
    >
      
          <img
                        alt="..."
                        className="position-relative  " 
                        src={backgroudImg }
                        style={{width:"100%"}}/>


          < img src={frame} className="position-absolute" style={{top:"10%",width:"80%",left:"10%"}}/>

          <Canvas save={this.saveImgurl} 
  width={width} 
  height={height} 
  imgSrc={imgsrc}
  font="40px sans-serif"
  fillColor="#ffffff"
  text={[["",width*0.45,height*0.5,"left"]]
  }
/>
  <img src={imgurl} className="position-absolute" style={{left:"15%",top:"20%",width:"70%"}}/>
  <Button  className="px-0 py-0" onClick={()=>{
    toggle_uni()
    }} style={{backgroundColor:"transparent",borderColor:"transparent",width:"20%",margin:"auto !important",top:"10%",left:"40%",position:"absolute"}}><img src={geturl} style={{width:"100%"}}/>
    </Button>

{address?<>
  <img src={top} className="position-absolute" style={{top:"0%",width:"60%",left:"20%"}}/>    
  <p className="text-white mb-0 text-left" style={{fontFamily:"BankGothic",fontSize:"1vw",position:"absolute",top:"3%",left:"23%",width:"60%"}}>ADDRESS:{address}</p>
  <p className="text-white mb-0 text-left" style={{fontFamily:"BankGothic",fontSize:"1vw",position:"absolute",top:"5%",left:"23%",width:"60%"}}>PRICE:{displayPrice} SPAY</p>
  <p className="text-white mb-0 text-left" style={{fontFamily:"BankGothic",fontSize:"1vw",position:"absolute",top:"7%",left:"23%",width:"60%"}}>BALANCE:{displaySpay} SPAY</p>
  <Button  className="px-0 py-0" onClick={()=>{this.approve()}} style={{backgroundColor:"transparent",borderColor:"transparent",width:"10%",margin:"auto !important",top:"70%",left:"60%",position:"absolute"}} disabled={disableApprove} ><img src={approvebtn} style={{width:"100%"}}/>
                    </Button>
    <Button  className="px-0 py-0" onClick={()=>{this.buySMT()}} style={{backgroundColor:"transparent",borderColor:"transparent",width:"10%",margin:"auto !important",top:"70%",left:"40%",position:"absolute"}} disabled={disableBuy}><img src={buybtn} style={{width:"100%"}}/>
                    </Button>

</>:<></>
}
  



        {
        hasTicket?( <>
        
  <img src={bottom} className="position-absolute" style={{top:"80%",width:"80%",left:"10%"}}/>
  <p className="text-white mb-0 text-center" style={{fontFamily:"BankGothic",fontSize:"1vw",position:"absolute",top:"85%",left:"10%",width:"80%"}}>CONGRAULATION!YOU HAVE THE TICKET FOR PROJECT SPACEY.SEE YOU ON MARS!</p>
  
  
  </>):<></>
}
  
  


  
  
  

  
      
    </Modal>)
  }
}


const TicketModals=connect(mapStateToProps,mapDispatchToProps)(ConnectedTicketModals)


export default TicketModals;
