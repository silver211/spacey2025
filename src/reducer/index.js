import {
    SPAYtestabi,
    SPAYtestaddr,
    SMTtestabi,
    SMTtestaddr,
    SALEtestabi,
    SALEtestaddr
} from "components/ETH/spay_testabi"
import {ethers} from "ethers";

  
  const initialState = {
    provider:null,
    spayInst:null,
    smtInst:null,
    saleInst:null,
    ticketPrice:0,
    address:null,
    spayBalance:0,
    ea_open:false,
    uni_open:false,
    allowance:0,
    ticketCount:0,
    inStock:100

  }
  
  function rootReducer(state = initialState, action) {
  
    switch (action.type){
    case "set_provider":{
        const {ethereum}=window
        if (!ethereum){
            return state
        }
        // ethereum.enable()
        const provider = new ethers.providers.Web3Provider(ethereum)
        const spayInst = new ethers.Contract(SPAYtestaddr,SPAYtestabi,provider.getSigner());
        const smtInst = new ethers.Contract(SMTtestaddr,SMTtestabi,provider.getSigner());
        const saleInst = new ethers.Contract(SALEtestaddr,SALEtestabi,provider.getSigner());
        // localStorage.setItem("provider",provider)
        // localStorage.setItem("spayInst",spayInst)
        // localStorage.setItem("smtInst",smtInst)
        // localStorage.setItem("saleInst",saleInst)
        return Object.assign({},state,{
            ...state,
            provider:provider,
            spayInst:spayInst,
            smtInst:smtInst,
            saleInst:saleInst
        })

    }

    case "get_price":{
        console.log("get price")
        return state
    }
  
    case "toggle_ea":{
        return Object.assign({},state,{
            ...state,
            ea_open:!state.ea_open
        })
    }
  
    case "toggle_uni":{
        return Object.assign({},state,{
            ...state,
            uni_open:!state.uni_open
        })
    }

    case "update_address":{
        return Object.assign({},state,{
            ...state,
            address:action.payload.address
        })
    }
    case "update_info":{
        return Object.assign({},state,{
            ...state,
            spayBalance:action.payload.spayBalance,
            allowance:action.payload.allowance,
            ticketCount:action.payload.ticketCount,
            inStock:action.payload.inStock
        })
    }

  
  
    default:{
      return state
    }
  }
  
  
  
  }
  
  export default rootReducer;


  
  