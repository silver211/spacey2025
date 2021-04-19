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
import {connect} from "react-redux"
import {update_provider,update_info} from "actions/index.js"
import {ethers} from "ethers";



import SpaceYNavbar from "components/Navbars/SpaceYNavbar.js";
import SpaceYFooter from "components/Footers/SpaceYFooter.js";
import GetSpay from "views/IndexSections/spacey/GetSpay.js"
import {SMTtestabi,
  SMTtestaddr,
  SPAYtestabi,
  SPAYtestaddr,
  SALEtestabi,
  SALEtestaddr
}     from "components/ETH/spay_testabi.js"

import Canvas from "components/ETH/Canvas.js";
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

import {tokenHash} from "ticketInfo/hash.js"



// index page sections

const saleTicket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_sale.png")
const price = ethers.BigNumber.from("2025000000000000000000")
const approvebtn=require("assets/SpaceYAssets/btn/approvebtn.png")
const buybtn=require("assets/SpaceYAssets/btn/buybtn.png")


function mapDispatchToProps(dispatch){
  return {
    update_provider:()=>dispatch(update_provider()),
    update_info:()=>dispatch(update_info())


  }
}

function mapStateToProps(state){
  const {ticketPrice,address,spayBalance,ea_open,inStock,spayInst,smtInst,saleInst,allowance}=state
  return {
   price:ticketPrice,
   address:address,
   spayBalance:spayBalance,
   isopen:ea_open,
   inStock:inStock,
   spayInst:spayInst,
   smtInst:smtInst,
   saleInst:saleInst,
   allowance:allowance
  }
}



class ConnectedTicket extends React.Component {
  state={}
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    const {ethereum} = window
      if (ethereum){
        
        const {update_provider,update_info} = this.props 
        // this.intervals=[setInterval(update_provider,5000),setInterval(update_info,5000)]
        // update_provider()
        this.intervalProvider=setInterval(update_provider,5000)
        this.intervalInfo=setInterval(update_info,5000)
        this.intervals=[this.intervalInfo,this.intervalProvider]
      }
  }

  componentWillUnmount(){
    if(this.intervals){
      for( const interval of this.intervals){
        clearInterval(interval)
      }
    }

  }


  shouldComponentUpdate(nextProps,nextState){
    return this.state!=nextState || this.props !=nextProps

  }
  

  async buySMT(){
    const {spayInst,saleInst,allowance,smtInst}=this.props
    
    let name="Mars Poineer"
    // let uri="https://spacey2025.com/ticket.json"
    const nxtID=await smtInst.totalTokens().then(e=>{return e.toNumber()})+1 
    // console.log(nxtID)
    const uri = "https://spacey2025.com/ticket/ticket"+nxtID.toString()+".json"
    const hash= tokenHash[nxtID]
    // console.log(uri,hash)
    const buy = await saleInst.buySMT(hash,uri,name).then(e=>{console.log(e);alert("You're all set.Please wait for pending transaction")},f=>{console.log(f);alert("Buy SMT failed.Try again later")})
  
    
  }

  async approve(){
    const {spayInst} = this.props
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


  constructor(props){
    super(props)
    this.buySMT=this.buySMT.bind(this);
    this.approve = this.approve.bind(this)
    // this.getAccountInfo=this.getAccountInfo.bind(this)
    this.state={
    }

  }


  
  render() {
    // return (
    //   <>
    //   <SpaceYNavbar />
    //   <main ref="main">
    //     <Hero />
    //             <SpaceYFooter />

    //     </main>
    //   </>
    // )

    const {address,allowance,inStock}=this.props

    let disableApprove=true
    let disableBuy=true
    if (address){
      disableApprove=false
    }
    if (address && typeof(allowance)=="object"){
      if(allowance.gte(ethers.BigNumber.from(price))){
        disableApprove=true
        disableBuy=false
      }
    }
    const displayPrice=parseFloat(ethers.utils.formatEther(price)).toFixed(3)



    return (
      <div className="bg-dark">
                 <SpaceYNavbar />

           <div ref="main">

           

             <GetSpay/>
             <Container >
             <Row >
               
<img src={saleTicket} style={{width:"100%"}} />
</Row>
<Row >
  <Col className="text-center">
  <Button  className="px-0 py-0 " onClick={()=>{this.approve()}} style={{backgroundColor:"transparent",borderColor:"transparent"}} disabled={disableApprove} ><img src={approvebtn} style={{width:"60%"}}/>
                    </Button>
  </Col>
<Col className="text-center">
    <Button  className="px-0 py-0" onClick={()=>{this.buySMT()}} style={{backgroundColor:"transparent",borderColor:"transparent"}} disabled={disableBuy}><img src={buybtn} style={{width:"60%"}}/>
                    </Button></Col>
</Row>
<Row >
<Col>
<p className="h3 text-center text-white">Description</p></Col>
<Col>
<p className="text-center text-white">This premium ticket provides the player the early access to the amazing experience of Space Y 2025 NFT tower defense game.</p>
</Col>
</Row>
<Row >
<Col>
<p className="h3 text-center text-white">Price</p></Col>
<Col>
<p className="text-center text-white">{displayPrice} SPAY</p>
</Col>
</Row>
<Row >
<Col>
<p className="h3 text-center text-white">In Stock</p></Col>
<Col>
<p className="text-center text-white">{inStock} SMT</p>
</Col>
</Row>
</Container>


        </div>
        <SpaceYFooter />

      </div>
    );




  }
}
const Ticket = connect(mapStateToProps,mapDispatchToProps)(ConnectedTicket)
export default Ticket;
