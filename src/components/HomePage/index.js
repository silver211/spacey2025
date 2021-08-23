
import React from "react";
import {connect} from "react-redux"
import {update_provider,update_info} from "actions/index.js"
import ReactDOM from 'react-dom';
import { Page, Hero, Button } from 'decentraland-ui'
import { isMobile } from 'decentraland-dapps/dist/lib/utils'




import SpaceYNavbar from "components/Navbars/SpaceYNavbar.js";
import SpaceYFooter from "components/Footers/SpaceYFooter.js";

// index page sections
// import Hero from "./IndexSections/spacey/Hero.js";
// import Hero from "components/Hero"
// import FreeTicket from "./IndexSections/spacey/FreeTicket.js";
// import About from "./IndexSections/spacey/About.js"
// import Partner from "./IndexSections/spacey/Partner.js"


// import GetSpay from "./IndexSections/spacey/GetSpay.js"
// import TicketModals from "./IndexSections/spacey/TicketModals.js"

import './HomePage.css'


function mapDispatchToProps(dispatch){
  return {
    update_provider:()=>dispatch(update_provider()),
    update_info:()=>dispatch(update_info())


  }
}

function mapStateToProps(state){
  const {ticketPrice,address,spayBalance,ea_open}=state
  return {
   price:ticketPrice,
   address:address,
   spayBalance:spayBalance,
   isopen:ea_open
  }
}



class ConnectedSpaceY extends React.Component {
  state={}
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    const anchor = this.props.location.hash.replace('#', '');
  
    if (anchor) {
      const domElement = ReactDOM.findDOMNode(this.refs[anchor]);
      if (domElement) {
        domElement.scrollIntoView();
      }
    }





    // const {ethereum} = window
    //   if (ethereum){
        
    //     const {update_provider,update_info} = this.props 
    //     // this.intervals=[setInterval(update_provider,5000),setInterval(update_info,5000)]
    //     // update_provider()
    //     this.intervalProvider=setInterval(update_provider,5000)
    //     this.intervalInfo=setInterval(update_info,5000)
    //     this.intervals=[this.intervalInfo,this.intervalProvider]
    //   }
  }

  componentWillUnmount(){
    // if(this.intervals){
    //   for( const interval of this.intervals){
    //     clearInterval(interval)
    //   }
    // }
  }

  componentDidUpdate() {
    
  }

  
  render() {
    

    return (
      <>
                 {/* <SpaceYNavbar /> */}

           <div ref="main">

           <Hero centered={isMobile()} className="HomePageHero">
        <Hero.Header>{"MARS&BLOCKCHAIN"}</Hero.Header>
        <Hero.Description>{'home_page.subtitle'}</Hero.Description>
        <Hero.Content>
          <div className="hero-image" />{' '}
        </Hero.Content>
        <Hero.Actions>
          <Button primary  >
            {'Early Access'}
          </Button>
        </Hero.Actions>
      </Hero>
            {/* <FreeTicket ref="freeticket"/>        
            <About ref="about"/>
            <Partner/> */}

            {/* <GetSpay/> */}
            {/* <TicketModals/> */}

            




        </div>
        {/* <SpaceYFooter /> */}

      </>
    );




  }
}
const SpaceY = connect(mapStateToProps,mapDispatchToProps)(ConnectedSpaceY)
export default SpaceY;
