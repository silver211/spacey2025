import React from 'react';
import Web3 from 'web3';
import {ethers} from "ethers";

import {SMTtestabi,SMTtestaddr,SPAYtestabi,SPAYtestaddr}     from "./spay_testabi.js"

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
        const {ethereum,web3} = window
        const provider= new ethers.providers.Web3Provider(ethereum)
        var spayInst = new ethers.Contract(SPAYtestaddr,SPAYtestabi,provider.getSigner());
        var smtInst = new ethers.Contract(SMTtestaddr,SMTtestabi,provider.getSigner());
        const amount = "2025000000000000000000"
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        // await spayInst.transfer(SMTtestabi,ethers.BigNumber.from())
        await spayInst.approve(SMTtestaddr,ethers.BigNumber.from(amount)).then(console.log)
        const allowance = await spayInst.allowance(accounts[0],SMTtestaddr).then(ethers.utils.formatEther)
        await smtInst.buySMT().then(console.log)
        // console.log(from_address,to_address)
        //await spayInst.methods.transfer(to_address,new window.web3.utils.BN(amount)).send({from:from_address}).then(e=>{resp = e})
        // const smtInst = new window.web3.eth.Contract(SMTtestabi,SMTtestaddr);
        // await spayInst.methods.balanceOf(from_address).call().then(e=>{
        //     let spay = window.web3.utils.fromWei(e,"ether")
        //     console.log(spay)
        //   })
        //await spayInst.methods.transfer(to_address,new window.web3.utils.BN("1000000000000000")).send({from:from_address}).then(console.log)
        // await spayInst.methods.approve(SMTtestaddr,new window.web3.utils.BN(amount)).call().then(e=>{console.log(e)})
        // await smtInst.methods.buySMT().call().then(e=>{resp=e})
        // console.log(resp)
    }

    componentDidMount(){
        // if (typeof window.ethereum !== 'undefined') {
        //     console.log('MetaMask is installed!');
        //   }
        // // console.log(window.ethereum)
        // if (window.ethereum){
        //     window.web3 = new Web3(window.ethereum)
        //     window.ethereum.enable();
        //     this.getAccountInfo();
    
        // }
        
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