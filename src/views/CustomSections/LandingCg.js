import React from "react";
import { Container, Row } from "reactstrap";

class LandingCg extends React.Component{
    render(){
        return (<>

    <section className="section section-components">
          <Container >
              {/* <CustomControls />
              <Menus /> */}
        {/* <img
          src="/static/themes/onepirate/productHeroWonder.png"
          alt="Background CG"
          width="147"
          height="80"
        /> */}
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/E7wJTI-1dvQ"
         title="YouTube video player" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         allowFullScreen></iframe>
            </Container>
          </section>


        </>)
    }

}
export default LandingCg;