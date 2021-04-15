import React from 'react';
import {ethers} from "ethers";
import {connect} from "react-redux"
import {update_address,toggle_ea} from "actions/index.js"
import {
  
  NavItem,
  NavLink
} from "reactstrap";
import { Redirect } from 'react-router';




function mapDispatchToProps(dispatch){
  return {
    toggle_ea:()=>dispatch(toggle_ea()),
    update_address:()=>dispatch(update_address())
  }
}

function mapStateToProps(state){
  const {address} = state
  return {
    address:address
  }
  
}
class ConnectedSignIn extends React.Component {


constructor(prop){
    super(prop);
    this.state={
}
    this.handleClick=this.handleClick.bind(this)

}

shouldComponentUpdate(nextProps,nextState){
  return this.state!=nextState || this.props !=nextProps

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
      window.open("https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",'_blank ')
    }
    const {toggle_ea,address,update_address} = this.props
    if (address){
      toggle_ea()
    }
    else{
      update_address()
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
      const {address}=this.props
      const {handleClick}= this
      // console.log(account)
      // if (account){
      //   return (<></>)
      // }

  return (
    <NavItem>
                    <NavLink
                      onClick={handleClick}  
                      href="/#"

                    >{address?"MY NFT":"SIGN IN"}
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

const SignIn = connect(mapStateToProps,mapDispatchToProps)(ConnectedSignIn)
export default SignIn;