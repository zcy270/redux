import {CHANG_VALUE,ADD_LIST,CT_SHOW,DELETE_ITEM,DATA_ITEM}  from './actiontype'


//改变input值
export const changInputAction =(value)=>({
    type:CHANG_VALUE,
    value
})

//增加列表
export const addListAction =(list)=>({
    type:ADD_LIST,
    list:list
})
//显示隐藏
export const ctnToggleAction =()=>({
    type:CT_SHOW
})
//删除列表
export const deleteItemAction =(index)=>({
    type:DELETE_ITEM,
    index
})

//获取列表
export const getListAction =(data)=>({
    type:DATA_ITEM,
    data
})