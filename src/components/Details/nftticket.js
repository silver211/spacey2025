
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

// const saleTicket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_sale.png")
import saleTicket from "assets/SpaceYAssets/SpaceTicket/spaceship ticket_sale.png"
// import transferbtn from "assets/SpaceYAssets/btn/transferbtn.png"
import transferbtn from "../../assets/SpaceYAssets/btn/transferbtn.png"
import renamebtn from "assets/SpaceYAssets/btn/renamebtn.png"
const price = ethers.BigNumber.from("2025000000000000000000")
// const transferbtn=require("assets/SpaceYAssets/btn/transferbtn.png")
// const renamebtn=require("assets/SpaceYAssets/btn/renamebtn.png")


function mapDispatchToProps(dispatch){
  return {
    update_provider:()=>dispatch(update_provider()),
    update_info:()=>dispatch(update_info())


  }
}

function mapStateToProps(state){
  const {ticketPrice,address,spayBalance,ea_open,inStock,spayInst,smtInst,saleInst,allowance,provider}=state
  return {
   price:ticketPrice,
   address:address,
   spayBalance:spayBalance,
   isopen:ea_open,
   inStock:inStock,
   spayInst:spayInst,
   smtInst:smtInst,
   saleInst:saleInst,
   allowance:allowance,
   provider:provider
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
        const {getOwner,getName,checkTransaction}=this
        // this.intervals=[setInterval(update_provider,5000),setInterval(update_info,5000)]
        // update_provider()
        this.intervalProvider=setInterval(update_provider,5000)
        this.intervalInfo=setInterval(update_info,5000)
        this.intervalOwner=setInterval(getOwner,5000)
        this.intervalName=setInterval(getName,5000)
        this.intervalTransaction=setInterval(checkTransaction,5000)
        this.intervals=[this.intervalInfo,this.intervalProvider,this.intervalName,this.intervalOwner,this.intervalTransaction]
      }
  }

  componentWillUnmount(){
    if(this.intervals){
      for( const interval of this.intervals){
        clearInterval(interval)
      }
    }

  }



  async transfer(to){
    const {smtInst,address} = this.props
    const {tokenID}=this.props.match.params
    // console.log(address,to,tokenID)
    // const transferHash=await smtInst.transferFrom(address,to,tokenID).
    // then(e=>{console.log(e);
    //   alert("You're all set.Please wait for pending transaction");
    //   toggleModal();
      
    //   return e;
    // },
    // f=>{console.log(f,typeof(f));alert("SMT transfer failed.Try again later");return f;})
    const transfer =  await smtInst.transferFrom(address,to,tokenID)
    if (transfer.hash){
      alert("You're all set.Please wait for pending transaction");
      this.toggleTransferModal();
      this.setState({
        ...this.state,
        transferHash:transfer.hash
      })
    }
    else{
      alert("SMT transfer failed.Try again later")
    }





  }

  async rename(newname){
    const {smtInst} = this.props
    const {tokenID}=this.props.match.params
    const rename =  await smtInst.setName(tokenID,newname)
    if (rename.hash){
      alert("You're all set.Please wait for rename processing");
      this.toggleRenameModal();
      this.setState({
        ...this.state,
        renameHash:rename.hash
      })
    }
    else{
      alert("Rename failed.Try again later")
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
  
  async checkTransaction(){
    const {transferHash,renameHash,transferBlockStatus,renameBlockStatus} = this.state
    const {provider} = this.props
    let newtransferBlockStatus=undefined
    let newrenameBlockStatus=undefined
    if (provider){
        if (transferHash ){
        newtransferBlockStatus = await provider.getTransactionReceipt(transferHash).then(e=>{console.log(e);return e==null?undefined:e.status})
      }
      if (renameHash){
        newrenameBlockStatus = await provider.getTransactionReceipt(renameHash).then(e=>{console.log(e);return e==null?undefined: e.status})
      }
          this.setState({
          ...this.state,
          transferBlockStatus:transferBlockStatus!=undefined&&transferBlockStatus!=null?transferBlockStatus:newtransferBlockStatus,
          renameBlockStatus:renameBlockStatus!=undefined&&renameBlockStatus!=null?renameBlockStatus:newrenameBlockStatus
        })
      }
  }

  

  




  
  saveImgurl(url){
    
    this.setState({
      imgurl:url
    })
  }

  

  toggleTransferModal(){
    this.setState({
      ...this.state,
      isTransferOpen:!this.state.isTransferOpen
    })
  }

  toggleRenameModal(){
    this.setState({
      ...this.state,
      isRenameOpen:!this.state.isRenameOpen
    })
  }


  constructor(props){
    super(props)
    this.getOwner = this.getOwner.bind(this)
    this.getName = this.getName.bind(this)
    this.saveImgurl = this.saveImgurl.bind(this)
    this.toggleTransferModal = this.toggleTransferModal.bind(this)
    this.toggleRenameModal = this.toggleRenameModal.bind(this)
    this.checkTransaction=this.checkTransaction.bind(this)
    this.transfer=this.transfer.bind(this)
    this.rename=this.rename.bind(this)
    this.state={
      isTransferOpen:false,
      isRenameOpen:false
    }

  }


  
  render() {
    const width=1255
    const height=734
    

    const {address,allowance,inStock,smtInst}=this.props
    const {tokenID} =this.props.match.params
    const {owner,imgurl,name,isTransferOpen,isRenameOpen,transferHash,renameHash,transferBlockStatus,renameBlockStatus} = this.state
    const {saveImgurl,toggleTransferModal,toggleRenameModal} = this
    if (tokenID>100-inStock || tokenID<=0 || isNaN(tokenID)){
      return <Redirect to="/market" />
    }
    const isOwner=address && owner && owner.toLowerCase() ==address.toLowerCase()
    const imgsrc= "https://gateway.pinata.cloud/ipfs/"+tokenHash[tokenID]
    // getOwner()
    // getName()
    let pendingTransfer=false
    let pendingRename=false
    if (transferHash) {
      if (transferBlockStatus===undefined || transferBlockStatus===null){
      pendingTransfer=true}
      else{
        pendingTransfer=false
      }
    }
    if (renameHash && (renameBlockStatus===undefined || renameBlockStatus===null)){
      pendingRename=true
    }
    else{
      pendingRename=false
    }
    


    


    return (
      <div className="bg-dark">
                 {/* <SpaceYNavbar /> */}

           <div ref="main">

           

             <TransferModal 
             isopen={isTransferOpen}
             toggleModal={toggleTransferModal}
             tokenID={tokenID}
             modalType="transfer"
             onConfirm={this.transfer}
             />
              <TransferModal 
             isopen={isRenameOpen}
             toggleModal={toggleRenameModal}
             tokenID={tokenID}
             modalType="rename"
             onConfirm={this.rename}
             />

             
<Container style={{marginTop:"",marginLeft:"30%",marginRight:"30%",width:"40%"}}>
{name?<>
             <Canvas save={saveImgurl} 
             key={name}
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
<Row >
  <Col className="text-left " >
      <p style={{fontFamily:"Arial regular",fontSize:"1.5vw",color:"#ffffff"}}>SpaceY Boarding Pass {tokenID}</p>
  </Col>

</Row>
<Row style={{marginTop:"30px"}}>
  <Col className="text-left"><p>DESCRIPTION</p></Col>
  <Col></Col>
</Row>
<Row>
  <Col className="text-white">This item provides you the early access to the amazing experience of SpaceY 2025 tower defense NFT game.</Col>
  <Col></Col>
</Row>

<Row style={{marginTop:"30px"}}>
  <Col>
  <Row className="ml-0">Owner</Row>
    <Row className="ml-0 text-white text-left" >
       <p className="text-left">
         {owner?owner:"0x0000000000000000000000000000000000000000"}</p>
    </Row>
    </Col>
  <Col className="text-center">
    <Row>Transfer</Row>
    <Row className="text-center">
    {pendingTransfer?  <i className="fas fa-spinner fa-spin text-white"></i>:
  <Button  className="px-0 py-0 " onClick={()=>{this.toggleTransferModal()}} style={{backgroundColor:"transparent",borderColor:"transparent"}} disabled={!isOwner} >
  <img src={transferbtn} style={{width:"100%",padding:"auto"}}/>
                    </Button>} </Row>
  </Col>
<Col className="text-center">
<Row>Rename</Row>
<Row>
{pendingRename?  <i className="fas fa-spinner fa-spin text-white"></i>:

<Button  className="px-0 py-0" onClick={()=>{this.toggleRenameModal()}} style={{backgroundColor:"transparent",borderColor:"transparent"}} disabled={!isOwner}>
      <img src={renamebtn} style={{width:"100%",padding:"auto"}}/>
                    </Button>}
                    </Row>
                    </Col>
</Row>





{/* <Row style={{marginTop:"30px"}}>
  <Col className="text-left"><p>Owner</p></Col>
  <Col></Col>
</Row>
<Row>
  <Col className="text-white">{owner}</Col>
  <Col></Col>
</Row>
             
<Row style={{marginTop:"30px"}}>
  
  
  <Col className="text-center">
    
  <Button  className="px-0 py-0 " onClick={()=>{this.toggleTransferModal()}} style={{backgroundColor:"transparent",borderColor:"transparent"}} disabled={!isOwner} >
  <img src={transferbtn} style={{width:"100%"}}/>
                    </Button>
  </Col>
<Col className="text-center">

    <Button  className="px-0 py-0" onClick={()=>{this.toggleRenameModal()}} style={{backgroundColor:"transparent",borderColor:"transparent"}} disabled={!isOwner}>
      <img src={renamebtn} style={{width:"100%"}}/>
                    </Button>
                    </Col>
</Row> */}
</Container>


        </div>
        {/* <SpaceYFooter /> */}

      </div>
    );




  }
}
const NFTTicket = connect(mapStateToProps,mapDispatchToProps)(ConnectedNFTTicket)
export default NFTTicket;
