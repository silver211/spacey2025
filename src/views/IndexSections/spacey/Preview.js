import React from "react";

// reactstrap components
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
    Col
  } from "reactstrap";
import {connect} from "react-redux"
import {update_provider,update_info} from "actions/index.js"


import EATicket from "components/Previews/EATicket.js"
import NFTTicket from "components/Previews/NFTTicket.js"





const freeticket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_free.png")
const backgroudImg = require("assets/SpaceYAssets/P6/006.png")
const inputImg = require("assets/SpaceYAssets/SpaceTicket/input.png")
const connection = require("assets/SpaceYAssets/SpaceTicket/connection.png")
const linkImg = require("assets/SpaceYAssets/link.png")


function mapDispatchToProps(dispatch){
  return {
    update_provider:()=>dispatch(update_provider()),
    update_info:()=>dispatch(update_info())


  }
}

function mapStateToProps(state){
  const {ticketPrice,address,spayBalance,ea_open,ticketCount,tokens}=state
  return {
   price:ticketPrice,
   address:address,
   spayBalance:spayBalance,
   isopen:ea_open,
   ticketCount:ticketCount,
   tokens:tokens
  }
}


class ConnectedPreview extends React.Component {
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }
  shouldComponentUpdate(nextProps,nextState){
    return this.state!=nextState || this.props !=nextProps

  }

  constructor(props){
      super(props)
      this.state= {
          
      }
      

  }

  

 
 


  
  render() {
      const {address,spayBalance,ticketCount,tokens} = this.props
      let assets=[]
      for (const token of tokens){
        assets.push(
          <item style={{marginLeft:"20px",display:"inline-block",width:"20%",position:"relative"}}>
<NFTTicket tokenID={token}/>

        </item>)
      }
      return (<>
        <div className="position-relative" >
        <img
                      alt="..."
                      className="position-relative vw-100 " 
                      src={backgroudImg 
                    }/>
           
        <Row className="align-items-center justify-content-center position-absolute "
                style={{left:"10%",top:"0%"}} id="market"
                >
                  <Col className="text-left text-white" lg="12"  >
                    
                    <p  style={{fontFamily:"BankGothic",fontSize:"2.5vw"}} >
                      MARKET
                     </p>                    
                  </Col>
                </Row>
        <Row style={{left:"10%",top:"8%",width:"80%"}} className="position-absolute">
          <Col style={{width:"25%"}}>
          <EATicket />
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>

          
          </Row>


          <Row className="align-items-center justify-content-center position-absolute "
                style={{left:"10%",top:"50%"}} 
                >
                  <Col className="text-left text-white" lg="12"  >
                    
                    <p  style={{fontFamily:"BankGothic",fontSize:"2.5vw"}} id="mynft">
                      MY ASSETS
                     </p>                    
                  </Col>
                </Row>
        {/* {address ?
        <Row style={{left:"10%",top:"58%",width:"80%",overflowX:"scroll"}} className="position-absolute">
          <Col style={{width:"25% !important"}}>
          <NFTTicket />
          </Col>
          <Col style={{width:"25% !important"}}>
          <NFTTicket />
          </Col>
          <Col style={{width:"25% !important"}}>
          <NFTTicket />
          </Col>
          <Col style={{width:"25% !important"}}>
          <NFTTicket />
          </Col>
          

          
          </Row>:<></>} */}
          <Row style={{left:"10%",top:"58%",width:"80%",overflowX:"scroll",position:"absolute"}}>
            <li style={{ overflowX:"auto",listStyle:"none",whiteSpace:"nowrap",width: "100%" }}>
            
            




            {assets}
            </li>
          </Row>
          
              
        </div>
        
      </>
        )

  }
}
const Preview = connect(mapStateToProps,mapDispatchToProps)(ConnectedPreview)
export default Preview;
