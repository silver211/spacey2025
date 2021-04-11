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

const items = [
  {
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
  }
];

class TicketModals extends React.Component {
  
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  async approve(){
    const {spayInst,saleInst,price,allowance}=this.state
    const approve =  await spayInst.approve(SALEtestaddr,ethers.BigNumber.from(price))
    if(approve.hash){
      this.setState({
        hash:approve.hash
      })
    }
  }


  async buySMT(){
    // const from_address = this.state.account
    // const {ethereum,web3} = window
    const {spayInst,saleInst,price,allowance}=this.state
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
    console.log("buy smt")
    if (allowance.lt(price)){
      const approve =  await spayInst.approve(SALEtestaddr,ethers.BigNumber.from(price))
      if(approve.hash){
        this.setState({
          hash:approve.hash
        })
      }
    }
    else {
      console.log(hash)
      const buy = await saleInst.buySMT(hash).then(e=>{console.log(e);alert("You're all set.Please wait for pending transaction")},f=>{console.log(f);alert("Buy SMT failed.Try again later")})
    }
}

  async getAccountInfo(){
    const {ethereum} = window
    if (!ethereum){
      return
    }
    const provider= new ethers.providers.Web3Provider(ethereum)
    var {hash}=this.state
    
    // console.log(provider)
    const spayInst = new ethers.Contract(SPAYtestaddr,SPAYtestabi,provider.getSigner());
    const smtInst = new ethers.Contract(SMTtestaddr,SMTtestabi,provider.getSigner());
    const saleInst = new ethers.Contract(SALEtestaddr,SALEtestabi,provider.getSigner());
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    if (!accounts){
      return
    }
    const balance = await ethereum.request({
      method:'eth_getBalance',
      params:[
        accounts[0],'latest'
      ]
  })
    const spay = await spayInst.balanceOf(accounts[0]).then(ethers.utils.formatEther)
    const smt = await smtInst.balanceOf(accounts[0]).then(e=>{return    e.toNumber()})
    const allowance = await spayInst.allowance(accounts[0], SALEtestaddr)   
    const price = await saleInst.smtPrice()
    const saled = await smtInst.totalTokens()
    const limit = await smtInst.totalTokenLimit()
    const tokenIdLst = await smtInst.tokensOfOwner(accounts[0])
      
    var tokenLst=[]
    for(const tokenId of tokenIdLst){
      const tokenHash = await smtInst.tokenHash(tokenId)
      const tokenName = await smtInst.tokenName(tokenId)
      const tokenURI = await smtInst.tokenURI(tokenId)
      var tokenInfo = {
        id:tokenId.toNumber(), 
        hash:tokenHash,
        name:tokenName,
        URI:tokenURI
        }
      tokenLst.push(tokenInfo)
        
      }
    if(hash){
      const res = await provider.getTransaction(hash)
      console.log(res)
      if (res.blockHash!=null){
          hash=undefined
      }
    }
    this.setState({
        ether:ethers.utils.formatEther(balance) ,
        account:accounts[0],
        spay:spay,
        smt:smt,
        allowance:allowance,
        spayInst:spayInst,
        smtInst:smtInst,
        saleInst:saleInst,
        provider:provider,
        price:price,
        stock:limit-saled,
        hash:hash,
        smts:tokenLst,

    })
}

toggleModal(state) {
  this.setState({
    [state]:!this.state[state]
  })
}


  constructor(props){
    super(props)
    this.saveImgurl=this.saveImgurl.bind(this)
    this.buySMT=this.buySMT.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.nextNFT = this.nextNFT.bind(this)  
    this.state={
      currNFT:0
    }

  }

  componentWillUnmount(){
    if(this.interval){
    clearInterval(this.interval)
    }
}


  componentDidMount(){

    const {ethereum} = window
    if (typeof ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }
    
    // console.log(window.ethereum)
    if (ethereum){ 
        
        // window.ethereum.enable().then(e=>{console.log(e);this.setState({
        //   account:e[0]
        // })});
        // window.web3 = new Web3(window.ethereum)
        ethereum.enable();
        // this.getAccountInfo();
        this.interval=setInterval(this.getAccountInfo.bind(this),1000)
        // this.getAccountInfo();

        // window.ethereum.request({ method: 'eth_requestAccounts' });


    }
  }

  handleClick() {
  }

 


  shouldComponentUpdate(nextProps,nextState){
    return this.state!=nextState

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

    const width_o = 2560
    const height_o = 1497
    const ratio = 0.4
    // const width = width_o*ratio
    // const height = height_o*ratio
    const width=1016
    const height=421
    const {imgurl,account,price,smts,allowance,hash,spay} =this.state
    const {isopen,toggle}=this.props
    let disableApprove=true
    let disableBuy=false
    if (hash || (allowance && price && allowance.gte(price)) ){
      disableApprove=true
      disableBuy=false
    }
    // console.log(disableApprove,disableBuy)
    return (<Modal
      className="modal-dialog-centered"
      size="xl"
      // isOpen={this.state.defaultModal}
      isOpen={isopen}
      toggle={() => toggle("ticketModal")}
    >
      
          <img
                        alt="..."
                        className="position-relative  " 
                        src={backgroudImg }
                        style={{width:"100%"}}/>


          < img src={frame} className="position-absolute" style={{top:"10%",width:"80%",left:"10%"}}/>
          <img src={top} className="position-absolute" style={{top:"0%",width:"60%",left:"20%"}}/>

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


        {(smts && smts.length>0)?( <>
        
  <img src={bottom} className="position-absolute" style={{top:"80%",width:"80%",left:"10%"}}/>
  <p className="text-white mb-0 text-center" style={{fontFamily:"BankGothic",fontSize:"1vw",position:"absolute",top:"85%",left:"10%",width:"80%"}}>CONGRAULATION!YOU HAVE THE TICKET FOR PROJECT SPACEY.SEE YOU ON MARS!</p>
  {/* <img src={arrow} className="position-absolute" style={{top:"32%",width:"100%",left:"0%"}}/> */}
  
  
  </>):<></>
}
  
  {account?
  <>
  <p className="text-white mb-0 text-left" style={{fontFamily:"BankGothic",fontSize:"1vw",position:"absolute",top:"3%",left:"23%",width:"60%"}}>ADDRESS:{account}</p>
  <p className="text-white mb-0 text-left" style={{fontFamily:"BankGothic",fontSize:"1vw",position:"absolute",top:"5%",left:"23%",width:"60%"}}>PRICE:{parseFloat(ethers.utils.formatEther(price)).toFixed(3)} SPAY</p>
  <p className="text-white mb-0 text-left" style={{fontFamily:"BankGothic",fontSize:"1vw",position:"absolute",top:"7%",left:"23%",width:"60%"}}>BALANCE:{parseFloat(spay).toFixed(3)} SPAY</p>


  <Button  className="px-0 py-0" onClick={()=>{this.toggleModal("uniModal")}} style={{backgroundColor:"transparent",borderColor:"transparent",width:"20%",margin:"auto !important",top:"10%",left:"40%",position:"absolute"}}><img src={geturl} style={{width:"100%"}}/>
                    </Button>

                    <Button  className="px-0 py-0" onClick={()=>{this.approve()}} style={{backgroundColor:"transparent",borderColor:"transparent",width:"10%",margin:"auto !important",top:"70%",left:"60%",position:"absolute"}} disabled={disableApprove} ><img src={approvebtn} style={{width:"100%"}}/>
                    </Button>
                    <Button  className="px-0 py-0" onClick={()=>{this.buySMT()}} style={{backgroundColor:"transparent",borderColor:"transparent",width:"10%",margin:"auto !important",top:"70%",left:"40%",position:"absolute"}} disabled={disableBuy}><img src={buybtn} style={{width:"100%"}}/>
                    </Button>
  
                    
                    
                    
                    </>   :<></>
  }
  
  
  <GetSpay
          toggle={this.toggleModal} 
          isopen={this.state.uniModal}
          // imgsrc={imgsrc}
          />

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



    // return (
    //   <>
        
    //     <Row>
    //       <Col >
    //         <Button
    //           block
    //           className="mb-3"
    //           color="primary"
    //           type="button"
    //           onClick={() => this.toggleModal("defaultModal")}
    //         >
    //           {labeltext}
    //         </Button>
    //         <Modal
    //           className="modal-dialog-centered"
    //           size="xl"
    //           isOpen={this.state.defaultModal}
    //           toggle={() => this.toggleModal("defaultModal")}
    //         >
    //           <div className="modal-header ">
    //             <button
    //               aria-label="Close"
    //               className="close"
    //               data-dismiss="modal"
    //               type="button"
    //               onClick={() => this.toggleModal("defaultModal")}
    //             >
    //               <span aria-hidden={true}>×</span>
    //             </button>
    //           </div>
    //           <div className="modal-body align-item-center m-auto">
    //             <Canvas save={this.saveImgurl} 
    //       width={width} 
    //       height={height} 
    //       imgSrc={imgsrc}
    //       font="40px sans-serif"
    //       fillColor="#ffffff"
    //       text={[[name,width*0.45,height*0.5,"left"]]
    //       }
    //  />
    //       <img src={imgurl} />
    //           </div>
    //           <div className="modal-footer align-item-center m-auto">
    //             {type=="NFT"?
    //             (<>
    //             <SetName
    //             tokenId={tokenId}
    //             smtInst={smtInst}
    //             account={account}
    //             />
    //             <TransferNFT 
    //             tokenId={tokenId}
    //             smtInst={smtInst}
    //             account={account}
    //             /></>)

    //             :<></>}
    //           </div>
              
    //         </Modal>
    //       </Col>
          
    //     </Row>
    //   </>
    // );
  }
}

export default TicketModals;
