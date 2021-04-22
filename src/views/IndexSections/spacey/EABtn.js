import React from "react"

import {Button}
from "reactstrap"

import {connect} from "react-redux"
import {
toggle_ea} from "actions/index.js"
import { Redirect } from "react-router"
import {Link} from "react-router-dom"


const url = require("assets/SpaceYAssets/btn/earlyaccess.png")

function mapDispatchToProps(dispatch){
    return {
      toggle_ea:()=>dispatch(toggle_ea()) 
    }
  }
  
  function mapStateToProps(state){
    return {
    }
    
  }


class ConnectedEABtn extends React.Component{
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
        return (<Link to="/market">
            <Button  className="px-0 py-0 " style={{backgroundColor:"transparent",borderColor:"transparent",height:"50%",margin:"auto",top:"25%",width:"100%",alignItems:"center"}}><img src={url} style={{height:"100%"}}/>
            </Button>   
                      </Link>
        )
    }
}

const EABtn=connect(mapStateToProps,mapDispatchToProps)(ConnectedEABtn) 
export default EABtn