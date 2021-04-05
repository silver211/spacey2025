
import React from "react";
import {Container,Row,Col} from "reactstrap";

class WhatIs extends React.Component{
    render(){
    return(
        <section className="section text-align-center">
        <Container className="text-align-center">
          {/* <img
            src="/static/themes/onepirate/productCurvyLines.png"
            alt="curvy lines"
          /> */}
          <h4 className="h4 text-light text-center">
            What is SpaceY
          </h4>
          
          <Container>
  <Row>
    <p className="text-light">In 2025, Elon Musk announced that the Big Falcon Spaceship (BFS) will send the first batch of 100 human volunteers to Mars, and it will take about 8 months for the manned spacecraft Dragon to reach Mars.  We call it the Pioneer Project<br />


Among the 100 pioneering volunteers, there are experts and elites from various industries. After landing on Mars, we need to search for airdropped materials to build the first Mars base. At that moment, human kind has officially begun to become a multi-planet species. In this cold, desolate, no-air, red rock planet, your only goal is to keep living...</p>
  </Row>
</Container>
          

        </Container>
      </section>
    )
    }
}
export default WhatIs;
