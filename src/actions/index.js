import store from "store/index.js"
import {ethers} from "ethers";
import {SALEtestaddr} from "components/ETH/spay_testabi.js"

export function get_price(){
    return function(dispatch){
        // console.log(dispatch)
        return dispatch({type:"get_price"})
    }
}

export function toggle_ea(){
    return function(dispatch){
        return dispatch({type:"toggle_ea"})
    }
}

export function toggle_uni(){
    return function(dispatch){
        return dispatch({type:"toggle_uni"})
    }
}

export  function update_address(){
    // console.log(store.getState().provider)

    return async function(dispatch){
        // return dispatch({type:"set_provider"})
        const {ethereum}=window
        await ethereum.enable()
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (!accounts){
        return dispatch({type:""})}
        else{
            const address = accounts[0]
            return dispatch({type:"update_address",payload:{address:address}})
        }

    }
}

export  function update_info(){
    // console.log(store.getState().provider)

    return async function(dispatch){
        // return dispatch({type:"set_provider"})
        const {spayInst,smtInst,address} =store.getState()
        if (spayInst!=null && smtInst!=null ){
            // console.log("try")
            const totalTokens = await smtInst.totalTokens().then(e=>{return e.toNumber()})
            if(address!=null){
            const spayBalance=await spayInst.balanceOf(address)
            const allowance = await spayInst.allowance(address, SALEtestaddr)
            const ticketCount = await smtInst.balanceOf(address)
            return dispatch({type:"update_info",payload:{
                spayBalance:spayBalance,
                allowance:allowance,
                ticketCount:ticketCount,
                inStock:100-totalTokens
            }})
            }
            const {spayBalance,allowance,ticketCount} = store.getState()
            // console.log("update info")
            // console.log(ticketCount)
            return dispatch({type:"update_info",payload:{
                spayBalance:spayBalance,
                allowance:allowance,
                ticketCount:ticketCount,
                inStock:100-totalTokens
            }})
           }
    
        else{
            return dispatch({type:""})
        }
        

    }
}




export function update_provider(){
    return function(dispatch){
        return dispatch({type:"set_provider"})
    }
}