import React from 'react';
import {ethers} from "ethers";
import {connect} from "react-redux"
import {update_address,toggle_uni} from "actions/index.js"
import {
  
  NavItem,
  NavLink
} from "reactstrap";
import { Redirect} from 'react-router';
import {Link} from "react-router-dom"



function mapDispatchToProps(dispatch){
  return {
    toggle_uni:()=>dispatch(toggle_uni()),
    update_address:()=>dispatch(update_address())
  }
}

function mapStateToProps(state){
  const {address,spayBalance,inStock} = state
  return {
    address:address,
    spayBalance:spayBalance,
    inStock:inStock
  }
  
}

const backgroudImg = require("assets/SpaceYAssets/P6/sale.png")
class ConnectedEATicket extends React.Component {


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



  
 
    render(){
        const {inStock}=this.props

  return (<Link to="/ticket" className="text-white">
        <img
                      alt="..."
                      className="position-relative" 
                      src={backgroudImg 
                    }
                    style={{width:"100%"}}
                    />
                    <p className="position-absolute" style={{top:"65%",left:"15%",fontSize:"1vw"}}>Price:2025 SPAY</p>
                    <p className="position-absolute" style={{top:"70%",left:"15%",fontSize:"1vw"}}>Instock:{inStock} SMT</p>
                    <p className="position-absolute" style={{top:"75%",left:"15%",fontSize:"1vw",width:"80%"}}>Early access to the Space Y 2025 NFT tower defense game.</p>



        
              
  </Link>


  )}
}

// Connection.contextTypes = {
//   web3: PropTypes.object
// };

const EATicket = connect(mapStateToProps,mapDispatchToProps)(ConnectedEATicket)
export default EATicket;