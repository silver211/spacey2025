import React from "react"

import {Button}
from "reactstrap"

const url = require("assets/SpaceYAssets/btn/earlyaccess.png")


class EABtn extends React.Component{
    render(){
        return (
            <Button style={{backgroundColor:"transparent",borderColor:"transparent"}}><img src={url}/>
                    </Button>   
        )
    }
}
export default EABtn