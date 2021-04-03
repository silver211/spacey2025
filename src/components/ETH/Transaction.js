import React from 'react';
import Web3 from 'web3';


import {SMTtestabi,SMTtestaddr,SPAYtestabi,SPAYtestaddr}     from "./spay_testabi.js"

class Transaction extends React.Component{

    constructor(prop){
        super(prop);
        this.state={
        account:"",
    }
    this.buySMT=this.buySMT.bind(this);

}

    async getAccountInfo(){
        var address 
        await window.web3.eth.getAccounts().then(e=>{address = e[0]})
        console.log(address)
  
        this.setState({
            account:address,
        })
    }

    async buySMT(){
        const from_address = this.state.account
        const to_address="0xBAB298D0Dcb2589a1c24B6c88fb10BD08eFe3265"
        const spayInst = new window.web3.eth.Contract(SPAYtestabi,SPAYtestaddr);
        const amount = "2025000000000000000000"
        var resp
        console.log(from_address,to_address)
        await spayInst.methods.transfer(to_address,new window.web3.utils.BN(amount)).send({from:from_address}).then(e=>{resp = e})
        console.log(resp)
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

    render(){
        return (
        <>
        <h1>Aboard now!</h1>
        <button onClick= {this.buySMT}>Aboard</button>
        
        </>)
    }
}

export default Transaction