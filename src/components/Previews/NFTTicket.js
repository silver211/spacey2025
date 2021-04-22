import React from 'react';
import {ethers} from "ethers";
import {connect} from "react-redux"
import {update_address,toggle_uni} from "actions/index.js"
import {
  Container,
  Row,
  NavItem,
  NavLink
} from "reactstrap";
import { Redirect } from 'react-router';
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
class ConnectedNFTTicket extends React.Component {


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
        const {inStock,tokenID}=this.props

  return (<Link to={"/nftticket/token/"+tokenID} className="text-white ">
    {/* <div className="position-relative"> */}
        <img
                      alt="..."
                      className="position-relative" 
                      src={backgroudImg 
                    }
                    style={{width:"100%"}}
                    />
                    {/* <Container className="position-absolute" style={{top:"65%",left:"15%",fontSize:"1vw",width:"50%"}}>
                      <Row>                    <p  style={{fontSize:"0.8vw"}}>Price:2025 SPAY</p>
</Row>
<Row>                    <p  style={{fontSize:"0.8vw"}}>TokenID:{tokenID}</p>
</Row>
<Row>                    <p  style={{fontSize:"0.8vw"}}>Early access to the Space Y 2025 NFT tower defense game.</p>
</Row>

                      </Container> */}
                    <p className="position-absolute" style={{top:"65%",left:"15%",fontSize:"1vw"}}>Price:2025 SPAY</p>
                    <p className="position-absolute" style={{top:"70%",left:"15%",fontSize:"1vw"}}>TokenID:{tokenID}</p>
                    <p className="position-absolute" style={{top:"75%",left:"15%",fontSize:"1vw",width:"80%",whiteSpace:"normal "}}>
                    Early access to the Space Y 2025 NFT tower defense game.</p>

                    {/* <p className="position-absolute" style={{top:"55%",left:"15%"}}>Price:2025 SPAY</p> */}


        
              {/* </div> */}
  </Link>


  )}
}

// Connection.contextTypes = {
//   web3: PropTypes.object
// };

const NFTTicket = connect(mapStateToProps,mapDispatchToProps)(ConnectedNFTTicket)
export default NFTTicket;