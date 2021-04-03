import React from 'react';
import Web3 from 'web3';

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
    smt:"0"
}}

 ethrequest(){
    
    this.ethereum.request({ method: 'eth_requestAccounts' });
 }


  async getAccountInfo(){
      var address 
      await window.web3.eth.getAccounts().then(e=>{address = e[0]})
      // console.log(address)
      var balance
      await window.web3.eth.getBalance(address).then(e=>{balance = window.web3.utils.fromWei(e, "ether")})
      // console.log(balance)
      var spayInst = new window.web3.eth.Contract(SPAYtestabi,SPAYtestaddr);
      var spay
      await spayInst.methods.balanceOf(address).call().then(e=>{
        spay = window.web3.utils.fromWei(e,"ether")
      })
      // console.log(spay)

      var smtInst = new window.web3.eth.Contract(SMTtestabi,SMTtestaddr);
      var smt
      await smtInst.methods.balanceOf(address).call().then(e=>{
        smt = e
      })
      // console.log(smt)

      this.setState({
          ether:balance ,
          account:address,
          spay:spay,
          smt:smt
      })
  }

  componentDidMount(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }
    // console.log(window.ethereum)
    if (window.ethereum){
        window.web3 = new Web3(window.ethereum)
        window.ethereum.enable();
        this.getAccountInfo();

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
      const {smt,spay,account,ether} = this.state

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
                      <h3>My Account</h3>
                      <p>{account}</p>
                      <h3>My Balance</h3>
                      <p>{ether} ETH</p>
                      <h3>My SPAY</h3>
                      <p>{spay} SPAY</p>
                      <h3>My SMT</h3>
                      <p>{smt} SMT</p>                     
                        <Transaction />
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