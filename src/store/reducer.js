
import {CHANG_VALUE,ADD_LIST,CT_SHOW,DELETE_ITEM,DATA_ITEM} from "./actiontype"
const defaultState ={
    inputValue:'写东西',
    list:[
        123,
        234,
        345
    ],
    isShow:true,
    placeholder:'请写东西'

}
export default (state = defaultState,action)=>{
    console.log(state,action)
    //Reducer里只能接收state,不能改变state
    if(action.type===CHANG_VALUE){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type===CT_SHOW){
        let newState=JSON.parse(JSON.stringify(state))
        newState.isShow=newState.isShow?false:true
        return newState
    }
    if(action.type===ADD_LIST){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=''
        return newState
    }
    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type===DATA_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list=action.data.data.list
        return newState
    }
    return state
}