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
  Label,
  NavItem,
  NavLink
} from "reactstrap";
// import {SMTtestabi,SMTtestaddr,SPAYtestabi,SPAYtestaddr}     from "./spay_testabi.js"
class Connection extends React.Component {


constructor(prop){
    super(prop);
    this.state={ether:"0",
    spay:"0",
    smt:"0"
}
    this.handleClick=this.handleClick.bind(this)

}

 ethrequest(){
    
    this.ethereum.request({ method: 'eth_requestAccounts' });
 }

  // componentDidUpdate(nextState,nextProps){
  //   return this.state!=nextState
  // }

  async getAccountInfo(){
      const {ethereum} = window
      const accounts = await ethereum.request({method:'eth_requestAccounts'})
      if (accounts){
        this.setState({
          account:accounts[0]
        })
      }
      // ethereum.enable()
      
  }

  handleClick(){
    const {ethereum} = window
    // console.log("onclick")
    if (typeof ethereum == 'undefined') {
      // console.log('MetaMask is installed!');
      alert("Please get MetaMask！")
      return
    }
    const {account}=this.state
    if (account){
      const {toggleModal} = this.props
      toggleModal("ticketModal")
      return
    }
    if (ethereum){
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
      const {handleClick}= this
      console.log(account)
      // if (account){
      //   return (<></>)
      // }

  return (
    <NavItem>
                    <NavLink
                      onClick={handleClick}  
                      href="/#nav"

                    >{account?"MY NFT":"SIGN IN"}
                    </NavLink>
                    
                  </NavItem>

/* <Button
                      className=" btn-icon"
                      onClick={handleClick}
                    
                      // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-navbar"
                      // target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-link mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Connect
                      </span>
                    </Button> */
  )}
}

// Connection.contextTypes = {
//   web3: PropTypes.object
// };

export default Connection;