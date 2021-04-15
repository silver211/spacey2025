import React from 'react';
import Web3 from 'web3';
import {ethers} from "ethers";


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
      const {ethereum} = window
      if (!ethereum){
        return
      }

      const provider= new ethers.providers.Web3Provider(ethereum)
      const smtInst = new ethers.Contract(SMTtestaddr,SMTtestabi,provider.getSigner());
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (!accounts){
        return
      }
      const account = accounts[0]
  
      const tokenIdLst = await smtInst.tokensOfOwner(account)
      
      var tokenLst=[]
      for(const tokenId of tokenIdLst){
        const tokenHash = await smtInst.tokenHash(tokenId)
        const tokenName = await smtInst.tokenName(tokenId)
        const tokenURI = await smtInst.tokenURI(tokenId)
        var tokenInfo = {
          id:tokenId.toNumber(), 
          hash:tokenHash,
          name:tokenName,
          URI:tokenURI
        }
        tokenLst.push(tokenInfo)
        
      }
      

      

      this.setState({
          account:account,
          smts:tokenLst,
          smtInst:smtInst
      })
      // console.log(tokenLst)
  }

  componentDidMount(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }
    // console.log(window.ethereum)
    if (window.ethereum){
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
      const {imgurl,smts,canvas,select,smt,smtInst,account} = this.state
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
                          {/* <Col>
                          <TicketModals
                           type="NFT"
                           name={smts[select].name}
                           labeltext="My Ticket"
                           imgsrc={saleticket}
                           tokenId={smts[select].id}
                           smtInst={smtInst}
                           account = {account}
                          /></Col>
                           */}

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