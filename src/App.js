import React, { Component } from 'react'
import "./index.css"
import AppUi from "./AppListUI"
import FlavorForm from "./FlavorForm"
import store from "./store"
import {changInputAction,addListAction,ctnToggleAction,deleteItemAction,getListAction,handleChangeAction} from "./store/actionCreators"
import axios from "axios"
 



class App extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState())
    this.state = store.getState()
     this.changeValue=this.changeValue.bind(this)
     this.addList=this.addList.bind(this)
     this.ctnToggle=this.ctnToggle.bind(this)
     this.storeChange=this.storeChange.bind(this)
     this.deleteItem=this.deleteItem.bind(this)
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     store.subscribe(this.storeChange)
  }
 
  render() { 
    return ( 
     <div>
        <AppUi
        inputValue={this.state.inputValue}
        placeholder={this.state.placeholder}
        changeValue={this.changeValue}
        addList={this.addList}
        list={this.state.list}
        deleteItem={this.deleteItem}
        ctnToggle={this.ctnToggle}
        isShow={this.state.isShow}
      />
      <FlavorForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        value={this.state.handleChange}
      />
     </div>
     );
  }
  componentDidMount(){
    axios.get("https://www.easy-mock.com/mock/5d5a3734328102077c30f6d4/").then((res)=>{
      // console.log(res)
      const data = res.data
      const action = getListAction(data)
      store.dispatch(action)
    })
  }

  changeValue(e){
    // console.log(e.target.value)
    const action=changInputAction(e.target.value)
    store.dispatch(action)
  }
  addList(){
    if(this.state.inputValue!==''){
      const action=addListAction(this.state.list)
      store.dispatch(action)
    }
  }
  ctnToggle(){
    // console.log(this.state.isShow)
    const action=ctnToggleAction()
    store.dispatch(action)
  }

  deleteItem(index){
    console.log(index)
    const action=deleteItemAction(index)
    store.dispatch(action)
  }

  handleChange(event) {
    // this.setState({value: event.target.value});
    const action=handleChangeAction(event.target.value)
    store.dispatch(action)
  }

  handleSubmit(event) {
    alert('你喜欢的风味是: ' + this.state.value);
    event.preventDefault();
  }
  storeChange(){
    this.setState(store.getState())
  }
}
 
export default App;
