
import React from "react";
import {Container,Row,Col} from "reactstrap";

class Buildings extends React.Component{
    render(){
    return(
        <section className="section">
        <Container >
          
          <p className="h4">
            Mars Buildings
          </p>
          {/* <p>description of spacey</p> */}
          <Container>
  <Row>
    <Col className="col-sm">
        <Row> title 1 </Row>
        <Row> <img src="/static/img1" alt = "img1" /> </Row>
        <Row>       <span>decription 1</span></Row>
    </Col>
    <Col className="col-sm">
        <Row> title 2 </Row>
        <Row> <img src="/static/img2" alt = "img2" /> </Row>
        <Row>       <span>decription 2</span></Row>
    </Col>
    <Col className="col-sm">
        <Row> title 1 </Row>
        <Row> <img src="/static/img1" alt = "img1" /> </Row>
        <Row>       <span>decription 1</span></Row>
    </Col>
    <Col className="col-sm">
        <Row> title 2 </Row>
        <Row> <img src="/static/img2" alt = "img2" /> </Row>
        <Row>       <span>decription 2</span></Row>
    </Col>
  </Row>
  
</Container>
          

        </Container>
      </section>
    )
    }
}
export default Buildings;
