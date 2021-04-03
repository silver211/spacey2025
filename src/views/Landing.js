/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// import cosmos from "assets/SpaceYAssets/cosmos.jpg"

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

class Landing extends React.Component {
  render() {
    return (
      <div style={{background:"#000000"}}>
                  <main ref="main">
                  <section className="section section-shaped section-lg" >

        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped" >
            <Container   className="shape-container vh-100 d-flex align-items-center py-lg" style={{height:"100vh!important"}}>
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="12">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/SpaceYAssets/Game Logo/spaceY_1_dark.png")}
                      style={{width:"100%" }}
                    />
                    <p className="lead text-white">
                      Coming Soon...
                    </p>
                    
                  </Col>
                </Row>
              </div>
            </Container>
           
          </section>
        </div>
        </section>
        </main>
        
      </div>
    );
  }
}

export default Landing;
