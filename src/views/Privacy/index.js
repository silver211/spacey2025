
import React from "react";
import {connect} from "react-redux"
import {update_provider,update_info} from "actions/index.js"
import ReactDOM from 'react-dom';
import { Container, Page, Responsive } from 'decentraland-ui'

import "../Privacy/privacy.css"


function mapDispatchToProps(dispatch){
  return {
    // update_provider:()=>dispatch(update_provider()),
    // update_info:()=>dispatch(update_info())


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



class ConnectedPrivacy extends React.Component {
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





   
  }

  componentWillUnmount(){
   
  }

  componentDidUpdate() {
    
  }

  
  render() {
    

    return (
      <>

           <div ref="main">
          <Page isFullscreen>
            
             {/* <Hero /> */}
             <div class="privacy container"><h1 data-sg-track="scroll" id="privacy-policy">Privacy Policy</h1><h2 data-sg-track="scroll" id="introduction">1. Introduction</h2><p>1.1 This Privacy Policy details important information regarding the collection, use and disclosure of User information collected on the Site and the Tools. The aim of this Privacy Policy is to help you understand how your personal information is used and your choices regarding said use. By using the Site or the Tools, you agree that the Foundation can collect, use, disclose, and process your information as described in this Privacy Policy. This Privacy Policy only applies to the Site and the Tools, and not to any other websites, products or services you may be able to access or link to via the Site or the Tools. We encourage you to read the privacy policies of any other websites you visit before providing your information to them.</p><p>The Site and the Tools may evolve over time, and this Privacy Policy will change to reflect that evolution. If changes are made, you will be notified by revising the date at the top of this Privacy Policy. In some cases, if significant changes are made, an statement may be placed in the homepage. We encourage you to review this Privacy Policy periodically to stay informed.</p><p>Some third-party providers may place cookies or pixels - small data files stored on your hard drive or in device memory - on your browser or hard drive. Note that this Privacy Policy does not cover the use of cookies or pixels by such third parties. Most web browsers are set to accept cookies and pixels by default, but you can usually set your browser to remove or reject browser cookies or pixels. If you do choose to remove or reject cookies or pixels, however, your ability to use the Site or the Tools might be affected.</p><p>1.2 This Privacy Policy should be read in conjunction with the Terms of Use. By accessing the Tools, you are consenting to the information collection and use practices described in this Privacy Policy.</p><p>1.3 Any questions, comments or complaints that you might have should be emailed to <a href="mailto:support@spacey2025.com" data-sg-track="click">support@spacey2025.com</a>.</p><h2 data-sg-track="scroll" id="information-collected-in-the-site-and-the-tools">2. Information Collected in the Site and the Tools</h2><p>The personal information collected from you generally may include:</p><p>2.1 Network information regarding transactions, including, among other things, the type of device you use, access times, hardware model, operating system and version, and other unique device identifiers.</p><p>2.2. Information about plugins you might be using, included but not limited to those related to the management of cryptocurrency assets and any information provided by them.</p><p>2.3. Your email and Ether address.</p><h2 data-sg-track="scroll" id="the-way-your-personal-information-is-used">3. The Way your Personal Information is used</h2><p>3.1 As with nearly all interactions that take place on the World Wide Web, the servers may receive information by virtue of your interaction with them, including but not limited to IP Addresses.</p><p>3.2 Public blockchains provide transparency into transactions and the Foundation is not responsible for preventing or managing information broadcasted on a blockchain.</p><h2 data-sg-track="scroll" id="what-is-done-with-your-information">4. What Is Done With Your Information</h2><p>4.1 Your information may be used in the following ways:</p><ul><li>To analyze trends for how the Site and Tools are being used;</li><li>To improve the Site and the Tools;</li><li>To help personalize your experience of the Site and the Tools; and</li><li>If you provide your contact information, you may receive technical notices, updates, confirmations, security alerts, to provide support to you, to tell you about other products and services that might interest you, or to respond to your comments or questions.</li></ul><p>4.2 Your information may be shared with third parties who need to access it in order to do work related to the Site and the Tools, including doing things like helping make the Site or DCL Client available, or providing analytics services. These third parties only access and use your information as necessary to perform their functions.</p><p>4.3 Aggregations and anonymizations that contain your information may be created in a way that does not directly identify you. Those aggregations and anonymizations may be used or shared for a variety of purposes related to the Site.</p><p>4.4 Your personal information may be disclosed to agents, businesses, or service providers who process your personal information for providing the Site and the Tools to you. The agreements with these service providers limit the kinds of information they can use or process and ensure they use reasonable efforts to keep your personal information secure.</p><p>4.5 The Foundation also reserves the right to disclose personal information that it believes, in good faith, is appropriate or necessary to enforce the Terms of Use, take precautions against liability or harm, to investigate and respond to third-party claims or allegations, to respond to court orders or official requests, to protect the security or integrity of the Site or the Tools, and to protect the rights, property, or safety of the Foundation.</p><p>4.6 In the event that the Foundation is involved in a merger, acquisition, sale, bankruptcy, insolvency, reorganization, receivership, assignment for the benefit of creditors, or the application of laws or equitable principles affecting creditors’ rights generally, or other change of control, there may be a disclosure of your information to another entity related to such event.</p><h2 data-sg-track="scroll" id="your-choice">5. Your Choice</h2><p>Your personal information will be processed in accordance with this Privacy Policy, and as part of that you will have limited or no opportunity to otherwise modify how your information is used.</p><h2 data-sg-track="scroll" id="cookies">6. Cookies</h2><p>The Site and the Tools do not use cookies at this time but they might do so in the future, in which case this Privacy Policy shall be updated accordingly.</p><h2 data-sg-track="scroll" id="information-not-collected">7. Information Not Collected</h2><p>Any other personally-identifiable information about you shall not be collected, unless you give it to the Foundation directly: by filling out a form, giving written feedback, communicating via third party social media sites, or otherwise communicating via the Site, the Tools or any other means.</p><p>Your Ethereum public address is not collected, but you should understand that transactions that take place using the Site and the Tools are confirmed and managed via the Ethereum blockchain. You understand that your Ethereum public address will be made publicly visible whenever you engage in a transaction that is confirmed and managed via the Ethereum blockchain.</p><h2 data-sg-track="scroll" id="information-security">8. Information Security</h2><p>Whilst neither the Foundation, nor any other organization, can guarantee the security of information processed online, the Foundation has appropriate security measures in place to protect your personal information. For example, the personal information you provide is stored on computer systems with limited access, encryption, or both.</p><h2 data-sg-track="scroll" id="privacy-rights">9. Privacy Rights</h2><p>9.1 Subject to applicable law, you may have some or all of the following rights in respect of your personal information: (i) to obtain a copy of your personal information together with information about how and on what basis that personal information is processed; (ii) to rectify inaccurate personal information (including the right to have incomplete personal information completed); (iii) to erase your personal information (in limited circumstances, where it is no longer necessary in relation to the purposes for which it was collected or processed); (iv) to restrict processing of your personal information where: a. the accuracy of the personal information is contested; b. the processing is unlawful but you object to the erasure of the personal information; or c. we no longer require the personal information but it is still required for the establishment, exercise or defense of a legal claim; (v) to challenge processing which we have justified on the basis of a legitimate interest (as opposed to your consent, or to perform a contract with you); (vi) to prevent us from sending you direct marketing; (vii) to withdraw your consent to our processing of your personal information (where that processing is based on your consent); (viii) to object to decisions which are based solely on automated processing or profiling; (ix) in addition to the above, you have the right to file a complaint with the supervisory authority.</p><p>9.2. If you reside in California, you may request certain general information regarding our disclosure of personal information to third parties for their direct marketing purposes.</p><p>9.3. If you wish to investigate the exercising of any of these rights, please write to us at the following address: <a href="mailto:support@spacey2025.com" data-sg-track="click">support@spacey2025.com</a>.</p><h2 data-sg-track="scroll" id="changes-and-updates">10. Changes and Updates</h2><p>10.1 This Privacy Policy may be revised periodically and this will be reflected by the “Last update posted” date above. Please revisit this page to stay aware of any changes. </p><p>10.2 Contact Information: <a href="mailto:support@spacey2025.com" data-sg-track="click">support@spacey2025.com</a>.</p></div>
        </Page>

            




        </div>

      </>
    );




  }
}
const Privacy = connect(mapStateToProps,mapDispatchToProps)(ConnectedPrivacy)
export default Privacy;
