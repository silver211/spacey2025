
import React from "react";
import {Container,Row,Col} from "reactstrap";

class Buildings extends React.Component{
    render(){
    return(
        <section className="section">
        <Container  >
          
          <p className="h2 text-center text-light">
            Build Marsbase
          </p>
          {/* <p>description of spacey</p> */}
          <Container>
  <Row>
    <Col className="col-sm  pl-0 pl-sm-0 pl-md-3 pl-lg-4 pl-xl-5">
        {/* <Row> title 1 </Row> */}
        <Row> 
          <img src={require("../../assets/SpaceYAssets/intro/image17.jpg")} 
          alt = "..." 
          className="img-fluid"/> </Row>
        {/* <Row>       <span>decription 1</span></Row> */}
    </Col>
    <Col className="col-sm  pl-0 pl-sm-0 pl-md-3 pl-lg-4 pl-xl-5">
        {/* <Row> title 1 </Row> */}
        <Row> 
          <img src={require("../../assets/SpaceYAssets/intro/image20.jpg")} 
          alt = "..." 
          className="img-fluid"/> </Row>
        {/* <Row>       <span>decription 1</span></Row> */}
    </Col>
    <Col className="col-sm  pl-0 pl-sm-0 pl-md-3 pl-lg-4 pl-xl-5">
        {/* <Row> title 1 </Row> */}
        <Row> 
          <img src={require("../../assets/SpaceYAssets/intro/image21.jpg")} 
          alt = "..." 
          className="img-fluid"/> </Row>
        {/* <Row>       <span>decription 1</span></Row> */}
    </Col>
    <Col className="col-sm  pl-0 pl-sm-0 pl-md-3 pl-lg-4 pl-xl-5">
        {/* <Row> title 1 </Row> */}
        <Row> 
          <img src={require("../../assets/SpaceYAssets/intro/image22.png")} 
          alt = "..." 
          className="img-fluid"/> </Row>
        {/* <Row>       <span>decription 1</span></Row> */}
    </Col>
  </Row>

  
</Container>
          

        </Container>
      </section>
    )
    }
}
export default Buildings;
