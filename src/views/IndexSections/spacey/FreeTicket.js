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
// core components
import SpaceYNavbar from "components/Navbars/SpaceYNavbar.js";
import SpaceYFooter from "components/Footers/SpaceYFooter.js";


// index page sections
import Hero from "./Hero.js";
// import Hero from "./IndexSections/Hero.js";

import CustomControls from "../CustomControls.js";
import Menus from "../Menus.js";
import LandingCg from "../../CustomSections/LandingCg.js";
import WhatIs from "../../CustomSections/WhatIs.js";
import Buildings from "../../CustomSections/Buildings.js";
import Connection from "components/ETH/Connection.js";
import Transaction from "components/ETH/Transaction.js";        
import Canvas from "components/ETH/Canvas.js"
import TicketModals from "views/IndexSections/spacey/TicketModals.js"
import EABtn from "./EABtn.js"

const freeticket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_free.png")
const backgroudImg = require("assets/SpaceYAssets/SpaceTicket/004.png")
const inputImg = require("assets/SpaceYAssets/SpaceTicket/input.png")
const connection = require("assets/SpaceYAssets/SpaceTicket/connection.png")
const linkImg = require("assets/SpaceYAssets/link.png")
class FreeTicket extends React.Component {
  componentDidMount() {
    // document.documentElement.scrollTop = 0;
    // document.scrollingElement.scrollTop = 0;
    // this.refs.main.scrollTop = 0;
  }

  constructor(props){
      super(props)
      this.state= {
          firstname:"",
          lastname:"",
          imgurl:"",
          freeticket:freeticket,
          visible:false
      }
      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
      this.saveImgurl = this.saveImgurl.bind(this)
    //   const freeticket = require("../assets/SpaceYAssets/SpaceTicket/spaceship ticket_free.png")
    //   this.freeticket=freeticket

  }

  saveImgurl(url){
    this.setState({
      imgurl:url
    })
  }

  handleChange(e){
      // const v =e.target.value
      const v= e.target.value.replace(/[^(a-zA-Z )]/g, '').substring(0,20)
      this.setState({
          ...this.state,
          [e.target.name]:v.toUpperCase() 
      })  
  }

  handleSubmit(e){
      const {firstname,lastname,visible,name} = this.state
      e.preventDefault();
    //   alert(this.state.firstname+" "+ this.state.lastname)
    //   console.log(this.state.imgurl )
      if (name == ""){
          return
      }
      // const name = firstname+" "+lastname
      // alert(name)
      // const {imgurl} = this.state
      this.setState({
          ...this.state,
          visible:!visible
      })
   
  }

  
  render() {
      const {freeticket,firstname,lastname,visible,imgurl,email,name} = this.state
      const {handleChange,handleSubmit} = this
      const width_o = 2560
      const height_o = 1497
      const ratio = 0.4
      // const width = width_o*ratio
      // const height = height_o*ratio
      const width=1016
      const height=421
//     return (
//       <>
//         <main ref="main" >
//         <section className="section section-shaped section-lg">

//         <Container className="pt-lg-7">
//               <Row className="justify-content-center">
//                     (
//                                         <Col lg="5">

//                   <Card className="bg-secondary shadow border-0">
//                     <CardHeader className="bg-white pb-5">
//                       <div className="text-muted text-center mb-3">
//                         <small>Mission to Mars</small>
//                       </div>
                      
//                     </CardHeader>
//                     <CardBody className="px-lg-5 py-lg-5">
//                     <div className="text-center text-muted mb-4">
//                         <small>Get a free ticket now!</small>
//                       </div>  
//                       <Form role="form" onSubmit = {this.handleSubmit}>
//                         <FormGroup className="mb-3">
//                           <InputGroup className="input-group-alternative">
//                             <Input placeholder="First Name" 
//                             type="text"
//                             name="firstname"
//                             value={this.state.firstname}
//                             onChange={this.handleChange}
//                             />
//                           </InputGroup>
//                         </FormGroup>
//                         <FormGroup>
//                           <InputGroup className="input-group-alternative">
                            
//                             <Input
//                               placeholder="Last Name"
//                               type="text"
//                               name='lastname'
//                               value={this.state.lastname}
//                               onChange={this.handleChange}
//                             />
//                           </InputGroup>
//                         </FormGroup>
//                         <div className="text-center">
                          
//                           <div className="text-center">
//                             {(firstname || lastname)?<TicketModals name={firstname+" "+lastname}
//                            labeltext="Free Ticket!"
//                            imgsrc={freeticket}/>:<></>}
                          
//                         </div>
//                         </div>
//                       </Form>
//                     </CardBody>
//                   </Card>
//                   </Col>
// )
                  
//               </Row>

//             </Container>
            

//             </section>
//         </main>
        
        
//       </>
//     );

      return (<>
        <div className="position-relative" id="freeticket">
        <img
                      alt="..."
                      className="position-relative vw-100 " 
                      src={backgroudImg 
                    }/>
        

        
        
        <div className="position-absolute vw-100" style={{left:"0",top:"0"}}>
        <img width="100%" src={connection} />

        </div>

        <div className="position-absolute vw-100" style={{left:"0",top:"4%"}}>
        <Row className="vw-100 position-absolute justify-items-center" style={{top:0,left:0,height:"20%"}}>
          <Col className="my-auto text-center"><p  style={{fontFamily:"BankGothic",fontSize:"1.5vw"}}>100 NFT<br/>SPACESHIP TICKETS</p></Col>
          <Col className="my-auto text-center"><p style={{fontFamily:"BankGothic",fontSize:"1.5vw"}}>$500K+<br/>TOURNAMENT PRIZE POOL</p></Col>
          <Col className="my-auto text-center"><p style={{fontFamily:"BankGothic",fontSize:"1.5vw"}}>360 NFT<br/>MARS LAND LOTS</p></Col>


        </Row> 
        </div>  


        <div className="position-absolute" style={{left:"5%",top:"20%"}}>
        <p className="text-white" style={{fontFamily:"BankGothic",fontSize:"2vw"}}>SPREAD THE WORD & CLAIM YOUR FREE TICKET </p>
        </div>
        <div className="position-absolute" style={{left:"3%",top:"30%",width:"40%"}}>
          <div className="position-relatve">
          <img src={inputImg} style={{width:"100%"}}/> </div>
          <input style={{
            left:"8%",top:"18%",width:"90%",height:"18%",position:"absolute",  
            fontSize:"2vw",backgroundColor:"transparent",borderColor:"transparent",color:"#55DCD8",fontFamily:"BankGothic"}}
          placeholder="NAME" name="name" value={name} onChange={handleChange } autoComplete="off"></input>
          <input type="email" style={{
            left:"8%",top:"45%",width:"90%",height:"18%",position:"absolute",  
            fontSize:"2vw",backgroundColor:"transparent",borderColor:"transparent",color:"#55DCD8",fontFamily:"BankGothic"}}
          placeholder="EMAIL" name="email" value={email} autoComplete="off"></input>
          <Button  className="py-0 text-left " style={{left:"8%",top:"70%",width:"90%",height:"18%",position:"absolute",backgroundColor:"transparent",borderColor:"transparent",paddingLeft:"2%"
           }}
           onClick={handleSubmit}
           >
             <p className="mb-0"  style={{fontSize:"2vw",fontFamily:"BankGothic",color:"#55BCD8"}}
          >{visible?"HIDE MY FREE TICKET":"CLAIM MY FREE TICKET"}</p>
          </Button>
        </div> 
        
        {/* <div className="position-absolute" style={{left:"6%",top:"47%",width:"35%",height:"7%"}}>
          <Input style={{width:"35%",height:"7%",fontSize:"3vh",backgroundColor:"transparent",borderColor:"transparent",color:"#55DCD8",fontFamily:"BankGothic"}}
          placeholder="LAST NAME" name="lastname" value={lastname} onChange={handleChange} autoComplete="off"   ></Input>
        </div> 
        <div className="position-absolute" style={{left:"6%",top:"58%",width:"35%",height:"7%"}}>
          <Button  className="py-0 text-left " style={{width:"100%",backgroundColor:"transparent",borderColor:"transparent",paddingLeft:"2%"
           }}
           onClick={handleSubmit}
           >
             <p className="mb-0"  style={{fontSize:"3vh",fontFamily:"BankGothic",color:"#55BCD8  "}}
          >{visible?"HIDE MY FREE TICKET":"CLAIM MY FREE TICKET"}</p>
          </Button>
          
        </div> 

        <div className="position-absolute" style={{left:"6%",top:"68%"}}>

        <small className="text-white">*No gas fee needed. The   free ticket is not a real NFT token. It will not grant your early access to the game.</small>

           </div> */}

        {visible?(
        <div className="position-absolute" style={{left:"45%",top:"35%",width:"50%"}}>
          <div className="postion-relative">
          {/* <img src={freeticket} width="100%"/> */}
          <img src={imgurl} width="100%"/>

          </div>
        </div> ):<></>}
          {window.innerWidth>=1024?
        <Row className="align-items-center justify-content-center position-absolute vw-100"
                style={{left:"0",top:"70%",height:"30%"}}
                >
                  <Col className="text-center " style={{height:"100%"}} lg="12"  >
                    
                    
                    {/* <EABtn /> */}
                  </Col>
                </Row>:<></>}
                {visible?(<Canvas save={this.saveImgurl} 
          width={width} 
          height={height} 
          imgSrc={freeticket}
          font="40px BankGothic"
          fillColor="#ffffff"
          text={[[name,width*0.35+10,height*0.4,"left"]]
          }
     />):<></>}
                
        </div>
        
      </>
        )

  }
}

export default FreeTicket;
