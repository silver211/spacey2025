import React from 'react';
import {ethers} from "ethers";
import {connect} from "react-redux"
import {update_address,toggle_ea} from "actions/index.js"
import {
  
  NavItem,
  NavLink
} from "reactstrap";
import { Redirect } from 'react-router';
import Info from "./Info.js"



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
 
  
  handleClick(){
    const {ethereum} = window
    // console.log("onclick")
    if (typeof ethereum == 'undefined') {
      // console.log('MetaMask is installed!');
      alert("Please use Chrome and install MetaMask...")
      window.open("https://metamask.io",'_blank ')
    }
    const {toggle_ea,address,update_address} = this.props

    // if (address){
    //   toggle_ea()
    // }
    // else{
    //   update_address()
    // }
    update_address()
   
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
    address?<Info />
                :<NavItem>
                <NavLink
                  // href="http://testgame.spacey2025.com"
                  href="https://game.spacey2025.com"


                  // href="/#"

                >
                  {/* {address?"MY NFT":"SIGN IN"} */}
                  GET STARTED
                </NavLink>
                
              </NavItem>


  )}
}



const SignIn = connect(mapStateToProps,mapDispatchToProps)(ConnectedSignIn)
export default SignIn;