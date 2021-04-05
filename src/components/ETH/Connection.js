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
import {SMTtestabi,SMTtestaddr,SPAYtestabi,SPAYtestaddr}     from "./spay_testabi.js"
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
      const {ethereum,web3} = window
      const provider= new ethers.providers.Web3Provider(ethereum)
      
      var spayInst = new ethers.Contract(SPAYtestaddr,SPAYtestabi,provider);
      var smtInst = new ethers.Contract(SMTtestaddr,SMTtestabi,provider);
      // var smtInst = new window.web3.eth.Contract(SMTtestabi,SMTtestaddr)
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (!accounts){
        return
      }
      // await window.web3.eth.getAccounts().then(e=>{new_account=e[0]})
      // console.log(new_account,typeof(new_account))
      const balance = await ethereum.request({
        method:'eth_getBalance',
        params:[
          accounts[0],'latest'
        ]
    })
        // console.log(spayInst)
      const spay = await spayInst.balanceOf(accounts[0]).then(ethers.utils.formatEther)
      const smt = await smtInst.balanceOf(accounts[0]).then(e=>{return    e.toNumber()})
      const allowance = await spayInst.allowance(accounts[0], SMTtestaddr).then(ethers.utils.formatEther)
      
      // await spayInst.methods.balanceOf(new_account).call().then(e=>{
      //   new_spay = window.web3.utils.fromWei(e,"ether")
      // })
      // // console.log(new_spay)

      // await smtInst.methods.balanceOf(new_account).call().then(e=>{
      //   new_smt = e
      // })
      // console.log(new_smt)

      this.setState({
          ether:ethers.utils.formatEther(balance) ,
          account:accounts[0],
          spay:spay,
          smt:smt,
          allowance:allowance
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
        this.getAccountInfo();

        // window.ethereum.request({ method: 'eth_requestAccounts' });


    }
    
}
  /**
 * web3Context = {
 *   accounts: {Array<string>} - All accounts
 *   selectedAccount: {string} - Default ETH account address (coinbase)
 *   network: {string} - One of 'MAINNET', 'ROPSTEN', or 'UNKNOWN'
 *   networkId: {string} - The network ID (e.g. '1' for main net)
 * }
 */
    render(){
      const {smt,spay,account,ether,allowance} = this.state
      


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
                     (<> <h3>My Account:{account}</h3>
                      {/* <p>{account}</p> */}
                      <h3>My ETH:{ether} ETH</h3>
                      {/* <p>{ether} ETH</p> */}
                      <h3>My SPAY:{spay} SPAY</h3>
                      {/* <p>{spay} SPAY</p> */}
                      <h3>My Spay Allowance:{allowance} SPAY</h3>

                      <h3>My SMT:{smt} SMT</h3>

                      
                      {/* <p>{smt} SMT</p>                      */}
                        <Transaction /> </>):(<div className="text-center text-muted mb-4">
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