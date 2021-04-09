import React from 'react';
import Web3 from 'web3';
import {ethers} from "ethers";

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
  Col,
  Label
} from "reactstrap";
import {SMTtestabi,
  SMTtestaddr,
  SPAYtestabi,
  SPAYtestaddr,
  SALEtestabi,
  SALEtestaddr
}     from "./spay_testabi.js"
import Transaction from "./Transaction.js"
class Connection extends React.Component {


constructor(prop){
    super(prop);
    this.state={ether:"0",
    spay:"0",
    account:"",
    smt:"0",
    allowance:0
}}

 ethrequest(){
    
    this.ethereum.request({ method: 'eth_requestAccounts' });
 }

componentDidUpdate(nextState,nextProps){
  return this.state!=nextState
}

  async getAccountInfo(){
      const {ethereum} = window
      if (!ethereum){
        return
      }
      const provider= new ethers.providers.Web3Provider(ethereum)
      
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
          stock:limit-saled
      })
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
        this.interval=setInterval(this.getAccountInfo.bind(this),1000)
        // this.getAccountInfo();

        // window.ethereum.request({ method: 'eth_requestAccounts' });


    }
    
}

  componentWillUnmount(){
      if(this.interval){
      clearInterval(this.interval)
      }
  }
  
    render(){
      const {account,allowance,spayInst,smtInst,price,saleInst,stock} = this.state
      // console.log("render")
      // console.log(price,allowance,typeof(price),typeof(allowance))


  return (
    <section className="section section-shaped section-lg">

        <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col >
              <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Mission to Mars</small>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5 text-center">
                    {account?
                     (<> 
                     {/* <h3>My Account:{account}</h3> */}
                      {/* <p>{account}</p> */}
                      {/* <h3>My ETH:{ether} ETH</h3> */}
                      {/* <p>{ether} ETH</p> */}
                      {/* <h3>My SPAY:{spay} SPAY</h3> */}
                      {/* <p>{spay} SPAY</p> */}
                      <p className="h2">Now Ticket Price is {ethers.utils.formatEther(price)} SPAY</p>
                      <p className="h3">{stock} in stock</p>
                      {/* <h3>My SMT:{smt} SMT</h3> */}
                        <Transaction 
                        allowance={allowance}
                        account={account}
                        spayInst={spayInst}
                        smtInst={smtInst}
                        saleInst = {saleInst}
                        price = {price}
                        />
                         </>):(<div className="text-center text-muted mb-4">
                        <p className="h3 text-center">Please connect MetaMask<br/>If already connected,please refresh</p>
                      </div>  )}
                    </CardBody>
                  </Card>
                  </Col>



              </Row>

            </Container>
            

            </section>

  );}
}

// Connection.contextTypes = {
//   web3: PropTypes.object
// };

export default Connection;