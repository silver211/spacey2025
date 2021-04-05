import React from 'react';
import Web3 from 'web3';

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
  Col,
  Label
} from "reactstrap";
import {SMTtestabi,SMTtestaddr,SPAYtestabi,SPAYtestaddr}     from "./spay_testabi.js"
import Canvas from "components/ETH/Canvas.js";
// import Carousels from "components/Carousels.js";
import TicketModals from "views/IndexSections/spacey/TicketModals"

const  saleticket=require("assets/SpaceYAssets/SpaceTicket/spaceship ticket_sale.png")

class OwnedTickets extends React.Component {


constructor(prop){
    super(prop);
    this.state={ether:"0",
    account:"",
    smt:"0",
    smts:[],
    imgurl:[],
    firstname:"",
    lastname:"",
    items:[],
    canvas:[],
    width_o : 2560,
    height_o :1497,
    ratio : 0.4,
    select:0
}
this.handleChange=this.handleChange.bind(this)
this.saveImgurl = this.saveImgurl.bind(this)

}

saveImgurl(url){
  var tmp = this.state.imgurl
  tmp.push(url)
  this.setState({
    imgurl:tmp,
  })
}

handleChange(e){
    const v =e.target.value
    this.setState({
        ...this.state,
        [e.target.name]:v
    })
}


 ethrequest(){
    
    this.ethereum.request({ method: 'eth_requestAccounts' });
 }

//  shouldComponentUpdate(nextProps, nextState) {
//    console.log(this.state,nextState)
//    const result = this.state.imgurl != nextState.imgurl || this.state.account!=nextState.account
//    console.log(this.state.imgurl.length,nextState.smts.length)
//   // const result = this.state.imgurl.length<nextState.smts.length
//   console.log(result)
//   return result
// }

  async getAccountInfo(){
      const {height_o,width_o,ratio} = this.state
      const width = width_o*ratio
      const height = height_o*ratio
      var address 
      await window.web3.eth.getAccounts().then(e=>{address = e[0]})
      // console.log(address)
      if (address == undefined){
        return
      }

      var smtInst = new window.web3.eth.Contract(SMTtestabi,SMTtestaddr);
      var smt
      await smtInst.methods.balanceOf(address).call().then(e=>{
        smt = e
      })
      // console.log(smt)
      // console.log(smtInst.methods)
      var tokenIdLst,itemLst
      await smtInst.methods.tokensOfOwner(address).call().then(e=>{
        tokenIdLst = e;
    })
      // console.log(tokenIdLst)
      var tokenLst=[]
      for(const tokenId of tokenIdLst){
        var tokenHash,tokenName,tokenURI
        await smtInst.methods.tokenHash(tokenId).call().then(e=>{tokenHash=e;})
        await smtInst.methods.tokenName(tokenId).call().then(e=>{tokenName=e;})
        await smtInst.methods.tokenURI(tokenId).call().then(e=>{tokenURI=e;})
        var tokenInfo = {
          id:tokenId,
          hash:tokenHash,
          name:tokenName,
          URI:tokenURI
        }
        tokenLst.push(tokenInfo)
        
      }
      

      

      this.setState({
          account:address,
          smt:smt,
          smts:tokenLst,
      })
      // console.log(tokenLst)
  }

  componentDidMount(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }
    // console.log(window.ethereum)
    if (window.ethereum){
        window.web3 = new Web3(window.ethereum)
        window.ethereum.enable();
        this.getAccountInfo();

    }
    
}
  /**
 * web3Context = {
 *   accounts: {Array<string>} - All accounts
 *   selectedAccount: {string} - Default ETH account address (coinbase)
 *   network: {string} - One of 'MAINNET', 'ROPSTEN', or 'UNKNOWN'
 *   networkId: {string} - The network ID (e.g. '1' for main net)
 * }
 */
    render(){
      const {imgurl,smts,canvas,select} = this.state
      // const width_o = 2560
      // const height_o = 1497
      // const ratio = 0.4
      // const width = width_o*ratio
      // const height = height_o*ratio
      let options=[]
      for(let idx=0;idx<smts.length;idx++){
        const smt=smts[idx]
        
        options.push(<option key={smt.id} value={idx}> {smt.id} </option>)}
      
      // if (select<0 || smts.length==0){
      //   return <></>
      // }
      
      

  return (
    <div>

      <section className="section section-shaped section-lg">

        <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>Mission to Mars</small>
                      </div>
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>View your tickets!</small>
                      </div>    
                      {smts.length>0?(
                      <Form role="form" onSubmit = {this.handleSubmit}>
                        <FormGroup className="mb-3">
                        <Label for="exampleSelect">SMT ID</Label>
                          <InputGroup className="input-group-alternative">
                            
                            {/* <Input placeholder="First Name" 
                            type="text"
                            name="firstname"
                            value={this.state.firstname}
                            onChange={this.handleChange}
                            /> */}
                            <Input type="select" name="select" id="exampleSelect" onChange={this.handleChange} value={this.state.select}>
          {options}
        </Input>
                          </InputGroup>
                        </FormGroup>
                        <Row className="text-center">
                          {/* <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                          >
                            View My Ticket! 
                          </Button> */}
                          <Col>
                          <TicketModals
                           name={smts[select].name}
                           labeltext="My Ticket"
                           imgsrc={saleticket}
                          /></Col>
                          

                        </Row>
                      </Form>):( <div className="text-center text-muted mb-4">
                        <p className="h3 text-center">Woops!<br/>You have no tickets...</p>
                      </div>     )}
                    </CardBody>
                  </Card>
                  </Col>



              </Row>

            </Container>
            

            </section>



    </div>
  );}
}

// Connection.contextTypes = {
//   web3: PropTypes.object
// };

export default OwnedTickets;