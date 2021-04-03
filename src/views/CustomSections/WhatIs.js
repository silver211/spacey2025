
import React from "react";
import {Container,Row,Col} from "reactstrap";

class WhatIs extends React.Component{
    render(){
    return(
        <section className="section">
        <Container >
          <img
            src="/static/themes/onepirate/productCurvyLines.png"
            alt="curvy lines"
          />
          <p className="h4">
            What is SpaceY
          </p>
          <p>description of spacey</p>
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
  </Row>
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
  </Row>
</Container>
          

        </Container>
      </section>
    )
    }
}
export default WhatIs;
