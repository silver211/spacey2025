import React from 'react';
import {ethers} from "ethers";
import {connect} from "react-redux"
import {update_address,toggle_uni} from "actions/index.js"
import {
  
  NavItem,
  NavLink
} from "reactstrap";
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";




function mapDispatchToProps(dispatch){
  return {
    toggle_uni:()=>dispatch(toggle_uni()),
    update_address:()=>dispatch(update_address())
  }
}

function mapStateToProps(state){
  const {address,spayBalance} = state
  return {
    address:address,
    spayBalance:spayBalance
  }
  
}
class ConnectedInfo extends React.Component {


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
      toggle_uni()
   
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
      const {spayBalance,address,toggle_uni}=this.props
      const {handleClick}= this
      const displaySpay=parseFloat(ethers.utils.formatEther(spayBalance)).toFixed(3)
      const displayAddress = address.substring(0,6)+"..."+address.substring(38)

      // console.log(account)
      // if (account){
      //   return (<></>)
      // }

  return (<>
    <NavItem>
                    <NavLink
                      onClick={toggle_uni}  
                      //  href="#/"

                    > {displaySpay} SPAY
                    </NavLink>
                    
                  </NavItem>
                  <Link to="/market">

    <NavItem>
    <NavLink
      href="#/market"

    > {displayAddress}
    </NavLink>
    
  </NavItem></Link> </>


  )}
}

// Connection.contextTypes = {
//   web3: PropTypes.object
// };

const Info = connect(mapStateToProps,mapDispatchToProps)(ConnectedInfo)
export default Info;