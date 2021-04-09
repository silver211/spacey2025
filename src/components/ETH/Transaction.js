import React from 'react';
import Web3 from 'web3';
import {ethers} from "ethers";

import {SMTtestabi,SMTtestaddr,SPAYtestabi,SPAYtestaddr,SALEtestabi,SALEtestaddr} 
from "./spay_testabi.js";
import { randomBytes } from 'ethers/lib/utils';
import {
    Row,
    Col,
    Button
} from "reactstrap";

class Transaction extends React.Component{

    constructor(prop){
        super(prop);
        this.state={
        account:"",
    }
    this.buySMT=this.buySMT.bind(this);

}

    async buySMT(){
        // const from_address = this.state.account
        // const {ethereum,web3} = window
        const {spayInst,saleInst,price,allowance}=this.props
        // console.log(ethers.utils.formatEther(allowance),ethers.utils.formatEther(price),allowance.gte(price))
        // const provider= new ethers.providers.Web3Provider(ethereum)
        // var spayInst = new ethers.Contract(SPAYtestaddr,SPAYtestabi,provider.getSigner());
        // var smtInst = new ethers.Contract(SMTtestaddr,SMTtestabi,provider.getSigner());
        // var saleInst = new ethers.Contract(SALEtestaddr,SALEtestabi,provider.getSigner());
        // const amount = "2025000000000000000000"
        // const price = await saleInst.smtPrice()
        // const allowance = await spayInst.allowance(account,SALEtestaddr)
        let hash = Math.random().toString()
        if (allowance.lt(price)){
            await spayInst.approve(SALEtestaddr,ethers.BigNumber.from(price)).then(console.log)
        }
        else {
        await saleInst.buySMT(hash).then(e=>{console.log(e);alert("You're all set.Please wait for pending transaction")},f=>{console.log(f);alert("Buy SMT failed.Try again later")})
        }
    }

    componentDidMount(){
    }

    render(){
        const {allowance,price,smtInst,spayInst,saleInst}=this.props
        // console.log(ethers.utils.formatEther(allowance),ethers.utils.formatEther(price),allowance.gte(price))
        return (
        <>
        <h1>Aboard now!</h1>
        <Row>
            <Col><Button onClick= {this.buySMT} disabled={allowance.gte(price)}>Approve</Button></Col>
            <Col><Button onClick= {this.buySMT} disabled={allowance.lt(price)}>Buy Ticket</Button></Col>
        </Row>
        </>)
    }
}

export default Transaction