import React from "react";

import {Row,
        Col,
      Container} from "reactstrap"

const connection = require("assets/SpaceYAssets/SpaceTicket/connection.png")
class Connection extends React.Component {
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }
  
  render() {
      
      return (<>
        <div className="position-relative" id="freeticket">
        <img
                      alt="..."
                      className="position-relative vw-100 " 
                      src={connection
                    }/>
        <Row className="vw-100 position-absolute justify-items-center" style={{top:0,left:0,height:"100%"}}>
          <Col className="my-auto text-center"><p className="h4" style={{fontFamily:"BankGothic"}}>100 NFT<br/>SPACESHIP TICKETS</p></Col>
          <Col className="my-auto text-center"><p className="h4" style={{fontFamily:"BankGothic"}}>$500K+<br/>TOURNAMENT PRIZE POOL</p></Col>
          <Col className="my-auto text-center"><p className="h4" style={{fontFamily:"BankGothic"}}>360 NFT<br/>MARS LAND LOTS</p></Col>



        </Row>
        </div>
      </>
        )

  }
}

export default Connection;
