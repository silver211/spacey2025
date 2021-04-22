import React from 'react';
import {ethers} from "ethers";
import {connect} from "react-redux"
import {update_address,toggle_uni} from "actions/index.js"
import {
  Container,
  Row,
  Col,
  NavItem,
  NavLink
} from "reactstrap";
import { Redirect} from 'react-router';
import {Link} from "react-router-dom"

const spaceYlogo=require("assets/SpaceYAssets/Game Logo/spaceY_1_dark.png")
const limitTag = require("assets/SpaceYAssets/buyticket/Limited_Tag.png")
const tokenLogo = require("assets/SpaceYAssets/Token Logo/SPAY_token_s_white_256_256.png")


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

  return (
  <Link to="/ticket" className="text-white">
    <div className="position-relative">
        <img
                      alt="..."
                      className="position-relative" 
                      src={backgroudImg 
                    }
                    style={{width:"100%"}}
                    />
                    {/* <p className="position-absolute" style={{top:"65%",left:"15%",fontSize:"1vw"}}>Price:2025 SPAY</p> */}
                    
                    <img src={spaceYlogo} className="position-absolute" style={{top:"65%",left:"15%",width:"25%"}} />
                    <p className="text-white position-absolute" style={{fontFamily:"Arial Regular",fontSize:"1vw",top:"70%",left:"15%"}}>Boarding Pass</p>
                        <p className="text-white position-absolute " style={{top:"70%",left:"60%",display:"flex",fontSize:"1vw"}}><img src={tokenLogo} style={{display:"inline-block",height:"1rem",margin:"auto"}}/>
2025.000</p>
<img className="text-white position-absolute"  src ={limitTag}style={{top:"80%",left:"15%",width:"20%"}} />
<p className="text-white position-absolute " style={{top:"80%",left:"50%",display:"flex",fontSize:"1vw"}}>
{inStock} SMT in stock</p>

                                        {/* <Container style={{fontFamily:"Arial Regular",position:"absolute",top:"70%",left:"15%",width:"80%",paddingLeft:"0"}} >
                      <Row style={{marginLeft:"0"}}>
                        <Col style={{paddingLeft:"0"}}><p className="text-white" style={{fontFamily:"Arial Regular",fontSize:"1vw"}}>Boarding Pass</p></Col>
                        <Col> 
                        <Row>
                        <img src={tokenLogo} style={{display:"inline-block",height:"1rem"}}/>
                        <p className="text-right">2025.000</p>
                        </Row>
            
</Col>
                      </Row>
                      <Row style={{marginLeft:"0"}}>
                        <Col ><Row>
                        <img src={limitTag} style={{display:"",height:"2%"}}/>
                        
                        </Row></Col>
                        <Col> 
                        
            
</Col>
                      </Row>
                    </Container> */}



        
         </div>     
  </Link>


  )}
}

// Connection.contextTypes = {
//   web3: PropTypes.object
// };

const EATicket = connect(mapStateToProps,mapDispatchToProps)(ConnectedEATicket)
export default EATicket;