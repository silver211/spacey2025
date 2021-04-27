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
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"



// reactstrap components
import {
  Button,
  
  Modal,
  
} from "reactstrap";






const backgroudImg = require("assets/SpaceYAssets/SpaceTicket/004.png")
const frame = require("assets/SpaceYAssets/P1/frame.png")
const inputBackground=require("assets/SpaceYAssets/P4/P4kuang2.png")
const confirmBackground=require("assets/SpaceYAssets/P4/P4kuang3.png")

function mapDispatchToProps(dispatch){
  return {
    
  }
}

function mapStateToProps(state){
  const {address,smtInst,provider}=state
  return {
    address:address,
    smtInst:smtInst,
    provider:provider
  }
  
}




class ConnectedTransferModal extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

 

  shouldComponentUpdate(nextProps,nextState){
    return this.state!=nextState || this.props !=nextProps

  }




  

  handleChange(e){
    // const v =e.target.value
    const v= e.target.value
    this.setState({
        ...this.state,
        [e.target.name]:v
    })  
}

handleNameChange(e){
  // const v =e.target.value
  const v= e.target.value.replace(/[^(a-zA-Z )]/g, '').substring(0,20)
  this.setState({
      ...this.state,
      [e.target.name]:v.toUpperCase() 
  })  
}




  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    this.handleNameChange=this.handleNameChange.bind(this)
    this.state={
      to:"",
      newname:""
    }
  }




  render() {

   
    const {isopen,toggleModal,modalType,onConfirm}=this.props
    const {handleChange,handleNameChange}=this
    

    const {to,newname} = this.state
    const transferContent=<>
     <img src={frame} className="position-absolute" style={{left:"10%",top:0,width:"80%"}}/> 
  <img src={inputBackground} className="position-absolute" style={{left:"25%",top:"25%",width:"50%"}}/>
  <input className="text-center" style={{
            left:"30%",top:"26%",width:"40%",position:"absolute",size:"10",
            fontSize:"2vw",backgroundColor:"transparent",borderColor:"transparent",color:"#55DCD8",fontFamily:"BankGothic"}}
          placeholder="RECEIPT ADDRESS" name="to" value={to} autoComplete="off" onChange={handleChange}></input>
          

  
  <img src={confirmBackground} className="position-absolute" style={{left:"30%",top:"45%",width:"40%"}}/> 
  <Button  className="py-0 text-center " style={{left:"30%",top:"40%",width:"40%",height:"18%",position:"absolute",backgroundColor:"transparent",borderColor:"transparent",paddingLeft:"2%"
           }} onClick={()=>{onConfirm(to)}}
           >
             <p className="mb-0"  style={{fontSize:"2vw",fontFamily:"BankGothic",color:"#55BCD8"}}
          >CONFIRM</p>
          </Button>

  <img src={confirmBackground} className="position-absolute" style={{left:"30%",top:"55%",width:"40%"}}/> 

  <Button onClick={() => toggleModal()} className="py-0 text-center " style={{left:"30%",top:"50%",width:"40%",height:"18%",position:"absolute",backgroundColor:"transparent",borderColor:"transparent",paddingLeft:"2%"
           }}
           >
             <p className="mb-0"  style={{fontSize:"2vw",fontFamily:"BankGothic",color:"#55BCD8"}}
          >CANCEL</p>
          </Button>
    </>

  const renameContent=<> <img src={frame} className="position-absolute" style={{left:"10%",top:0,width:"80%"}}/> 
  <img src={inputBackground} className="position-absolute" style={{left:"25%",top:"25%",width:"50%"}}/>
  <input className="text-center" style={{
            left:"30%",top:"26%",width:"40%",position:"absolute",size:"10",
            fontSize:"2vw",backgroundColor:"transparent",borderColor:"transparent",color:"#55DCD8",fontFamily:"BankGothic"}}
          placeholder="NEW NAME" name="newname" value={newname} autoComplete="off" onChange={handleNameChange}></input>
          

  
  <img src={confirmBackground} className="position-absolute" style={{left:"30%",top:"45%",width:"40%"}}/> 
  <Button  className="py-0 text-center " style={{left:"30%",top:"40%",width:"40%",height:"18%",position:"absolute",backgroundColor:"transparent",borderColor:"transparent",paddingLeft:"2%"
           }} onClick={()=>{onConfirm(this.state.newname)}}
           >
             <p className="mb-0"  style={{fontSize:"2vw",fontFamily:"BankGothic",color:"#55BCD8"}}
          >CONFIRM</p>
          </Button>

  <img src={confirmBackground} className="position-absolute" style={{left:"30%",top:"55%",width:"40%"}}/> 

  <Button onClick={() => toggleModal()} className="py-0 text-center " style={{left:"30%",top:"50%",width:"40%",height:"18%",position:"absolute",backgroundColor:"transparent",borderColor:"transparent",paddingLeft:"2%"
           }}
           >
             <p className="mb-0"  style={{fontSize:"2vw",fontFamily:"BankGothic",color:"#55BCD8"}}
          >CANCEL</p>
          </Button>
          </>

    



    return (<Modal
      size="xl"
      isOpen={isopen}
      toggle={() => toggleModal()}
    >
      
        <img
                      alt="..."
                      className="position-relative  " 
                      src={backgroudImg }
                      style={{width:"100%"}}/>
       
  
          {
          modalType==="rename"?renameContent:transferContent
          }

  

  

  
      
    </Modal>)

  }
}

const TransferModal =  connect(mapStateToProps,mapDispatchToProps)(ConnectedTransferModal)

export default TransferModal;
