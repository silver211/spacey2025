import React from "react";
import { PropTypes } from "prop-types";

class Canvas extends React.Component {
  
  

    componentDidUpdate(){
      const {width,height,imgSrc,font,text,fillColor,save}=this.props
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
       
       //console.log(newone)
      img.style.display="none"
      //newone.style.display="none"
      img.onload = () => {
        ctx.drawImage(img, 0, 0,width,height)
        // console.log(text)
        ctx.font = font
        ctx.textBaseline = "bottom";
        ctx.fillStyle=fillColor
        for (let i=0;i<text.length;++i){
          ctx.textAlign=text[i][3]
          ctx.fillText(text[i][0], text[i][1], text[i][2])
        }
        //ctx.drawImage(newone,width*0.35,height*0.75,100,100)
        
        const url=canvas.toDataURL()
        save(url)
      }
    }

    shouldComponentUpdate(nextProps,nextState){
      return this.state!=nextState || this.props !=nextProps
  
    }

    componentDidMount() {
      const {width,height,imgSrc,font,text,fillColor,save}=this.props
      const canvas = this.refs.canvas
      const ctx = canvas.getContext("2d")
      const img = this.refs.image
       
       //console.log(newone)
      img.style.display="none"
      //newone.style.display="none"
      img.onload = () => {
        ctx.drawImage(img, 0, 0,width,height)
        // console.log(text)
        ctx.font = font
        ctx.textBaseline = "bottom";
        ctx.fillStyle=fillColor
        for (let i=0;i<text.length;++i){
          ctx.textAlign=text[i][3]
          ctx.fillText(text[i][0], text[i][1], text[i][2])
        }
        //ctx.drawImage(newone,width*0.35,height*0.75,100,100)
        
        const url=canvas.toDataURL()
        save(url)
      }
    }
    render(){
      const {width,height,imgSrc,font}=this.props
      //const newurl=HOST_ENDPOINT+"/home?referal="+this.props.token
      // console.log("newurl: "+newurl)
      return(
        <div >
          <canvas ref="canvas"  width={width} height={height} style={{opacity:0,display:"none"}}/>
           <img ref="image" crossOrigin="anonymous"  src={imgSrc}  />
           {/* <QrCode   ref="qr"  value={newurl} /> */}
  
        </div>
      )
    }
  }
  export default Canvas
  
  // Canvas.defaultProps={
  //   width:500,
  //   height:500,
  //   font:"40px Courier"
  // }
  
  // Canvas.propTypes={
  //   width:PropTypes.number,
  //   height:PropTypes.number,
  //   imgSrc:PropTypes.string.isRequired,
  //   font:PropTypes.string,
  //   fillColor:PropTypes.string,
  
  // }
  