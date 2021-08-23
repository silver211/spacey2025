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

// reactstrap components
import { Button, Row, Col } from "reactstrap";
import EABtn from "./EABtn.js";

class Hero extends React.Component {
  render() {
    return (
      <>
      
        <div className="position-relative" id="home">
          
          <section className="section   section-shaped pt-0 pb-0 " >
          
          <img
                      alt="..."
                      className="position-relative vw-100 " 
                      src={require("assets/SpaceYAssets/hero/001.png")
                    }/>
            {/* <Container className="shape-container d-flex align-items-center py-lg position-absolute vw-100 "
            style={{left:"0%",top:"0%"}} 
            >
              <div className="col-12  px-0"> */}
                <Row className="align-items-center justify-content-center position-absolute vw-100"
                style={{left:"0",top:"30%"}}
                >
                  <Col className="text-center " lg="12"  >
                    
                    <p  style={{color:"#B5E6F1",fontFamily:"BankGothic",fontSize:"3vw"}} >
                    COLONIZE MARS WITH THE POWER OF BLOCKCHAIN
                     </p>                    
                  </Col>
                </Row>

                <Row className="align-items-center justify-content-center position-absolute vw-100"
                style={{left:"0",top:"50%"}}
                >
                  <Col className="text-center " lg="12"  >
                    
                    <p  className="h3" style={{color:"#B5E6F1",fontFamily:"BankGothic",fontSize:"2vw"}} >
                      PURCHASE YOUR ERC721 SPACEY TICKET <br /> GET EARLY ACCESS TO THE GRAND EXPLORATION OF MARS
                     </p>                    
                  </Col>
                </Row>
                {window.innerWidth>=1024?
                <Row className="align-items-center justify-content-center position-absolute vw-100"
                style={{left:"0",top:"70%",height:"30%"}}
                >
                  <Col className="text-center justify-content-center position-relative" style={{height:"100%"}} lg="12"  >
                    
                    {/* <Button style={{backgroundColor:"transparent",borderColor:"transparent"}}><img src={url}/>
                    </Button>                 */}
                    <EABtn  />
                  </Col>
                </Row>:<></>}
              {/* </div>
            </Container>
             */}
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
