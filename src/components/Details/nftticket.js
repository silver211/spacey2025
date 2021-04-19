
import React from "react";
import {connect} from "react-redux"
import {update_provider,update_info} from "actions/index.js"
import {ethers} from "ethers";



import SpaceYNavbar from "components/Navbars/SpaceYNavbar.js";
import SpaceYFooter from "components/Footers/SpaceYFooter.js";
import GetSpay from "views/IndexSections/spacey/GetSpay.js"
import TransferModal from"views/IndexSections/spacey/TransferModal.js"
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
import { Redirect } from "react-router";



// index page sections

const saleTicket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_sale.png")
const price = ethers.BigNumber.from("2025000000000000000000")
const transferbtn=require("assets/SpaceYAssets/btn/transferbtn.png")
const renamebtn=require("assets/SpaceYAssets/btn/renamebtn.png")


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



class ConnectedNFTTicket extends React.Component {
  state={}
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;

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

  async getOwner(){
    const {smtInst} = this.props
    const {tokenID}=this.props.match.params
    if (smtInst){
      const owner=await smtInst.ownerOf(tokenID)
      this.setState({
        ...this.state,
        owner:owner
      })
    }
  }

  async getName(){
    const {smtInst} = this.props
    const {tokenID}=this.props.match.params
    if (smtInst){
      const name=await smtInst.tokenName(tokenID)
      this.setState({
        ...this.state,
        name:name
      })
    }
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
  saveImgurl(url){
    
    this.setState({
      imgurl:url
    })
  }

  toggleModal(){
    this.setState({
      ...this.state,
      isopen:!this.state.isopen
    })
  }


  constructor(props){
    super(props)
    this.buySMT=this.buySMT.bind(this);
    this.approve = this.approve.bind(this)
    this.getOwner = this.getOwner.bind(this)
    this.getName = this.getName.bind(this)
    this.saveImgurl = this.saveImgurl.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    // this.getAccountInfo=this.getAccountInfo.bind(this)
    this.state={
      isopen:false
    }

  }


  
  render() {
    const width=1016
    const height=421
    

    const {address,allowance,inStock,smtInst}=this.props
    const {tokenID} =this.props.match.params
    const {owner,imgurl,name,isopen} = this.state
    const {getOwner,saveImgurl,getName,toggleModal} = this
    if (tokenID>100-inStock || tokenID<=0 || isNaN(tokenID)){
      return <Redirect to="/market" />
    }
    const isOwner=address && owner && owner==address
    const imgsrc= "https://gateway.pinata.cloud/ipfs/"+tokenHash[tokenID]
    getOwner()
    getName()

    // console.log(name)




    


    return (
      <div className="bg-dark">
                 <SpaceYNavbar />

           <div ref="main">

           

             <GetSpay/>
             <TransferModal 
             isopen={isopen}
             toggleModal={toggleModal}
             />
             <Container >
             <Row >
               {name?<>
             <Canvas save={saveImgurl} 
  width={width} 
  height={height} 
  imgSrc={imgsrc}
  font="40px BankGothic"
  fillColor="#ffffff"
  text={[[name,width*0.43,height*0.5,"left"]]
  }
/>               
<img src={imgurl} style={{width:"100%"}} />
</>
:<img src={imgsrc} style={{width:"100%"}} />

}
</Row>
<Row >
  <Col className="text-center">
  <Button  className="px-0 py-0 " onClick={()=>{this.toggleModal()}} style={{backgroundColor:"transparent",borderColor:"transparent"}} disabled={false} ><img src={transferbtn} style={{width:"60%"}}/>
                    </Button>
  </Col>
<Col className="text-center">
    <Button  className="px-0 py-0" onClick={()=>{this.buySMT()}} style={{backgroundColor:"transparent",borderColor:"transparent"}} disabled={false}><img src={renamebtn} style={{width:"60%"}}/>
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
<p className="h3 text-center text-white">Owner</p></Col>
<Col>
<p className="text-center text-white">{owner?owner:""}</p>
</Col>
</Row>
<Row >
<Col>
<p className="h3 text-center text-white">Token ID</p></Col>
<Col>
<p className="text-center text-white">{tokenID}</p>
</Col>
</Row>
</Container>


        </div>
        <SpaceYFooter />

      </div>
    );




  }
}
const NFTTicket = connect(mapStateToProps,mapDispatchToProps)(ConnectedNFTTicket)
export default NFTTicket;
