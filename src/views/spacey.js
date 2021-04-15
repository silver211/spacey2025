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
import {update_provider,update_info} from "actions/index.js"



import SpaceYNavbar from "components/Navbars/SpaceYNavbar.js";
import SpaceYFooter from "components/Footers/SpaceYFooter.js";

// index page sections
import Hero from "./IndexSections/spacey/Hero.js";
import FreeTicket from "./IndexSections/spacey/FreeTicket.js";
import About from "./IndexSections/spacey/About.js"
import Partner from "./IndexSections/spacey/Partner.js"

import GetSpay from "./IndexSections/spacey/GetSpay.js"
import TicketModals from "./IndexSections/spacey/TicketModals.js"

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

    const {ethereum} = window
      if (ethereum){
        
        const {update_provider,update_info} = this.props 
        // this.intervals=[setInterval(update_provider,5000),setInterval(update_info,5000)]
        // update_provider()
        this.intervalProvider=setInterval(update_provider,5000)
        this.intervalInfo=setInterval(update_info,5000)
        this.intervals=[this.intervalInfo,this.intervalProvider]
      }
  }

  componentWillUnmount(){
    if(this.intervals){
      for( const interval of this.intervals){
        clearInterval(interval)
      }
    }
  }



  
  render() {
    // return (
    //   <>
    //   <SpaceYNavbar />
    //   <main ref="main">
    //     <Hero />
    //             <SpaceYFooter />

    //     </main>
    //   </>
    // )

    return (
      <>
                 <SpaceYNavbar />

           <div ref="main">

             <Hero />
            <FreeTicket />        
            <About />
            <Partner/>

            <GetSpay/>
            <TicketModals/>

            




        </div>
        <SpaceYFooter />

      </>
    );




  }
}
const SpaceY = connect(mapStateToProps,mapDispatchToProps)(ConnectedSpaceY)
export default SpaceY;
