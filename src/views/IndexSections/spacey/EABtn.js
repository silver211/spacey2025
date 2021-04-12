import React from "react"

import {Button}
from "reactstrap"
import TicketModals from "./TicketModals.js"

const url = require("assets/SpaceYAssets/btn/earlyaccess.png")


class EABtn extends React.Component{
    toggleModal(state) {
        this.setState({
          [state]:!this.state[state]
        })
      }
      state={}
      constructor(props){
        super(props)
        this.toggleModal=this.toggleModal.bind(this)
      }


    render(){
        return (<>
            <Button onClick={()=>this.toggleModal("ticketModal")} className="px-0 py-0 " style={{backgroundColor:"transparent",borderColor:"transparent",height:"50%",margin:"auto",top:"25%",width:"100%",alignItems:"center"}}><img src={url} style={{height:"100%"}}/>
                    </Button>   
                     <TicketModals 
                     toggle={this.toggleModal} 
                     isopen={this.state.ticketModal}
                     /> </>
        )
    }
}
export default EABtn